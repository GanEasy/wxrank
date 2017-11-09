package main

import (
	"encoding/base64"
	"html/template"
	"io"
	"net/http"
	"strconv"

	"github.com/GanEasy/wxrank/repository"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

// 接入微信接口服务
func echoWxCallbackHandler(c echo.Context) error {
	repository.WechatServe(c.Response().Writer, c.Request())
	var err error
	return err
}

// Template ..
type Template struct {
	templates *template.Template
}

// Render ..
func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

//Articles 文章接口
func Articles(c echo.Context) error {
	// fmt.Println(mapWhere)

	limit, _ := strconv.Atoi(c.QueryParam("limit"))
	offset, _ := strconv.Atoi(c.QueryParam("offset"))
	tag, _ := strconv.Atoi(c.QueryParam("tag"))
	order := c.QueryParam("order")

	if limit <= 0 || limit > 100 {
		limit = 10
	}
	// limit = 10
	if offset < 0 || offset > 500 {
		offset = 0
	}

	articles, err := repository.GetArticle(limit, offset, tag, order)

	if err != nil {

	}

	return c.JSON(http.StatusOK, articles)
}

// JsSDK wx jssdk sign
func JsSDK(c echo.Context) error {
	js, _ := repository.GetSign("wb.readfollow.com/")

	return c.JSON(http.StatusOK, js)
}

//View 阅读
func View(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	article, err := repository.View(id)

	if err != nil {

	}

	return c.JSON(http.StatusOK, article)
}

//Fetch get 报料接口
func Fetch(c echo.Context) error {
	url := c.QueryParam("url")
	// fmt.Println(url)
	if url != "" {
		repository.Post(url)
		return c.JSON(http.StatusOK, "Post")
	}
	return c.JSON(http.StatusOK, "0")
}

//Post 报料接口
func Post(c echo.Context) error {
	url := c.FormValue("url")
	// fmt.Println("url", url)
	if url != "" {
		err := repository.Post(url)
		if err != nil {
			return c.JSON(http.StatusOK, "0")
		}
		return c.JSON(http.StatusOK, "1")
	}
	return c.JSON(http.StatusOK, "0")
}

//ImageServe 图片服务
func ImageServe(c echo.Context) error {
	input := c.Param("url")
	uDec, err := base64.URLEncoding.DecodeString(input)
	if err != nil {
		repository.PrintErrorImageHandler(c.Response().Writer, c.Request())
	} else {
		repository.PrintImageHandler(string(uDec), c.Response().Writer, c.Request())
	}
	var err2 error
	return err2
}

func main() {

	e := echo.New()
	// t := &Template{
	// 	templates: template.Must(template.ParseGlob("views/*.html")),
	// }

	// e.Renderer = t
	e.Use(middleware.CORS())

	// e.Pre(middleware.HTTPSRedirect())
	// e.Pre(middleware.HTTPSNonWWWRedirect())
	// Middleware
	// e.Use(middleware.Logger())
	// e.Use(middleware.Recover())

	// Route => handler
	// e.GET("/", Home)
	e.File("/", "static/dist/index.html")

	// 请求抓取
	e.GET("/api/fetch", Fetch)
	e.POST("/api/post", Post)

	// 用户查看文章时请求该接口
	e.GET("/api/view/:id", View)

	// 获取微信文章接口
	e.GET("/api/article", Articles)

	// e.GET("/view/:id", View)

	// e.GET("/jssdk", JsSDK)

	e.File("/favicon.ico", "images/favicon.ico")

	// e.Any("/wx_callback", echoWxCallbackHandler)

	e.Static("static", "static/dist/static")

	e.Static("file", "file")

	e.GET("image/:url", ImageServe)

	// e.Static("/", "src")
	// Start server
	// e.Logger.Fatal(e.Start(":8888"))
	e.Logger.Fatal(e.Start(":8004"))
	// e.Logger.Fatal(e.StartAutoTLS(":443"))

}
