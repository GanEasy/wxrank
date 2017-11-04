package main

import (
	"html/template"
	"io"
	"net/http"
	"strconv"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/yizenghui/wx/orm"
	"github.com/yizenghui/wx/repository"
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

//Home 主页
func Home(c echo.Context) error {
	articles, err := repository.New(10, 0)

	if err != nil {

	}

	type Data struct {
		Title    string
		Articles []orm.Article
	}

	data := Data{
		Title:    "tttiii",
		Articles: articles,
	}

	return c.Render(http.StatusOK, "home", data)
}

//Hot 热门数据
func Hot(c echo.Context) error {
	// fmt.Println(mapWhere)

	limit, _ := strconv.Atoi(c.QueryParam("limit"))
	offset, _ := strconv.Atoi(c.QueryParam("offset"))

	if limit <= 0 || limit > 100 {
		limit = 10
	}
	// limit = 10
	if offset < 0 || offset > 500 {
		offset = 0
	}

	articles, err := repository.Hot(limit, offset)

	if err != nil {

	}

	return c.JSON(http.StatusOK, articles)
}

//New 最新数据
func New(c echo.Context) error {
	limit, _ := strconv.Atoi(c.QueryParam("limit"))
	offset, _ := strconv.Atoi(c.QueryParam("offset"))

	if limit <= 0 || limit > 100 {
		limit = 10
	}
	// limit = 10
	if offset < 0 || offset > 500 {
		offset = 0
	}

	articles, err := repository.New(limit, offset)

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

func main() {

	t := &Template{
		templates: template.Must(template.ParseGlob("views/*.html")),
	}

	e := echo.New()
	e.Renderer = t
	e.Use(middleware.CORS())

	// e.Pre(middleware.HTTPSRedirect())
	// e.Pre(middleware.HTTPSNonWWWRedirect())
	// Middleware
	// e.Use(middleware.Logger())
	// e.Use(middleware.Recover())

	// Route => handler
	// e.GET("/", Home)
	e.File("/", "static/dist/index.html")

	e.GET("/fetch", Fetch)
	e.POST("/post", Post)

	e.GET("/new", New)
	e.POST("/new", New)

	e.GET("/view/:id", View)

	e.GET("/hot", Hot)
	e.GET("/jssdk", JsSDK)

	e.File("/favicon.ico", "images/favicon.ico")

	e.Any("/wx_callback", echoWxCallbackHandler)

	e.Static("static", "static/dist/static")

	e.Static("file", "file")

	// e.Static("/", "src")
	// Start server
	// e.Logger.Fatal(e.Start(":8888"))
	e.Logger.Fatal(e.Start(":8004"))
	// e.Logger.Fatal(e.StartAutoTLS(":443"))

}
