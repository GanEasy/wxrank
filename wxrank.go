package main

import (
	"fmt"
	"html/template"
	"net/http"
	"strings"

	"github.com/BurntSushi/toml"
	"github.com/labstack/echo"
	"github.com/microcosm-cc/bluemonday"
	"github.com/russross/blackfriday"
	"github.com/yizenghui/reader"
)

type tomlConfig struct {
	ReaderMinApp ReaderMinApp
}

//ReaderMinApp 配置
type ReaderMinApp struct {
	AppID     string `toml:"app_id"`
	AppSecret string `toml:"app_secret"`
}

func init() {
	var config tomlConfig
	if _, err := toml.DecodeFile("conf.toml", &config); err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(config)
}

//GetOpenID get 报料接口
func GetOpenID(c echo.Context) error {
	// url := c.QueryParam("url")

	return c.JSON(http.StatusOK, "0")
}

//GetContent 获取正文
func GetContent(c echo.Context) error {

	urlStr := c.QueryParam("url")

	info, err := reader.GetContent(urlStr)
	if err != nil {
		return c.String(http.StatusOK, "0")
	}

	input := []byte(info.Content)
	unsafe := blackfriday.MarkdownCommon(input)
	content := bluemonday.UGCPolicy().SanitizeBytes(unsafe)

	// html := fmt.Sprintf(`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	// 						<link rel="preload" href="https://yize.gitlab.io/css/main.css" as="style" />
	// 						%v`, string(content[:]))
	// return c.HTML(http.StatusOK, html)
	info.Content = fmt.Sprintf(`%v`, string(content[:]))

	// 给图片加上 最大宽度
	info.Content = strings.Replace(info.Content, `<img src=`, `<img style="max-width:100%" src=`, -1)
	info.Content = strings.Replace(info.Content, `<section>`, `<div>`, -1)
	info.Content = strings.Replace(info.Content, `</section>`, `</div>`, -1)

	type Info struct {
		Title   string        `json:"title"`
		Content template.HTML `json:"content"`
		PubAt   string        `json:"pub_at"`
	}

	return c.JSON(http.StatusOK, Info{
		info.Title,
		template.HTML(info.Content),
		info.PubAt,
	})
}

//GetList 获取列表 临时放在这里面，做小程序测试api
func GetList(c echo.Context) error {
	urlStr := c.QueryParam("url")
	if urlStr == "" {
		return c.JSON(http.StatusOK, "0")
	}
	links, _ := reader.GetList(urlStr)
	return c.JSON(http.StatusOK, links)
}
func main() {
	e := echo.New()
	e.File("favicon.ico", "images/favicon.ico")
	e.File("logo.png", "images/80x80logo.png")
	e.File("/", "static/dist/index.html")
	e.File("/t/:id", "static/dist/index.html")
	e.File("/search", "static/dist/index.html")
	e.File("/tags", "static/dist/index.html")
	e.File("/hot", "static/dist/index.html")
	e.File("/new", "static/dist/index.html")
	// 获取用户帐号信息
	e.File("/user", "static/dist/index.html")
	e.File("/sign", "static/dist/index.html")
	e.Static("static", "static/dist/static")
	e.GET("/getopenid", GetOpenID)

	// 临时做小程序api
	e.GET("/minapp/getlist", GetList)
	e.GET("/minapp/getcontent", GetContent)

	// js 验证

	e.GET("/MP_verify_q4wWNqE4xUaPr81X.txt", func(c echo.Context) error {
		return c.String(http.StatusOK, "q4wWNqE4xUaPr81X")
	})
	// MP_verify_q4wWNqE4xUaPr81X.txt
	e.Logger.Fatal(e.Start(":8006"))
	// e.Logger.Fatal(e.StartAutoTLS(":443"))

}
