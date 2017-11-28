package main

import "github.com/labstack/echo"

func main() {
	e := echo.New()
	e.File("favicon.ico", "images/favicon.ico")
	e.File("logo.png", "images/80x80logo.png")
	e.File("/", "static/dist/index.html")
	e.File("/t/:id", "static/dist/index.html")
	e.File("/tags", "static/dist/index.html")
	e.File("/hot", "static/dist/index.html")
	e.File("/new", "static/dist/index.html")
	e.Static("static", "static/dist/static")
	e.Logger.Fatal(e.Start(":8006"))
	// e.Logger.Fatal(e.StartAutoTLS(":443"))

}
