// Copyright 2012 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package repository

import (
	"fmt"
	"log"
	"net/url"
	"strconv"
	"testing"
	"time"

	"github.com/GanEasy/wxrank/orm"
	"github.com/PuerkitoBio/goquery"
	"github.com/yizenghui/sda/wechat"
)

func Test_Post(t *testing.T) {
	err := Post("https://mp.weixin.qq.com/s/e_0BhJ0vOvIqt610MjgKLA")
	if err != nil {
		t.Error(err)
	}
	err = Post("https://mp.weixin.qq.com/s/lu9yU_Wvd8yQs6alZ7OBqg")
	if err != nil {
		t.Error(err)
	}
	err = Post("https://mp.weixin.qq.com/s/widHAGN7zOymivIUihkuTw")
	if err != nil {
		t.Error(err)
	}
	err = Post("https://mp.weixin.qq.com/s/wXOhpZHdzlHlf5jgC54AaA")
	if err != nil {
		t.Error(err)
	}
}

func Test_Pos22t(t *testing.T) {
	url := "https://mp.weixin.qq.com/s/e_0BhJ0vOvIqt610MjgKLA"
	var post orm.Post
	post.GetPostByURL(url)
	var a orm.Article
	article, err := wechat.Find(url)
	if err == nil {

		if article.URL == "" {
			t.Error("url err")
		}

		media, err := GetMediaByAppID(article.AppID)
		if err != nil {
			t.Error(err)

		}
		// 如果公众号是新收录的
		if media.State == 0 {
			media.AppName = article.AppName
			media.Cover = article.RoundHead
			media.State = 1

			// 公众号ID作为一个标签
			var tag orm.Tag
			tag.GetTagByName(article.AppID)
			if tag.Type == "" {
				tag.Type = "wxid"
				tag.Title = article.AppName
				// tag.IsShow = 0
				tag.Save()
			}

			media.Tags = append(media.Tags, int64(tag.ID))

			media.Save()
		}

		post.ArticleURL = article.URL
		post.State = 1
		post.Save()
		a.GetArticleByURL(article.URL)
		a.MediaID = media.ID
		a.Title = article.Title
		a.Intro = article.Intro
		a.Cover = article.Cover
		a.Author = article.Author
		a.Tags = media.Tags // 文章的标签等于公众号的标签

		i64, err := strconv.ParseInt(article.PubAt, 10, 64)
		if err != nil {
			// fmt.Println(err)

			t.Error(err)
		}
		a.PubAt = time.Unix(i64, 0)
		a.Save()
		// panic(a.ID)
		t.Error(a)
	} else {
		t.Error(err)
	}

}

func Test_SliceRemoveDuplicates(t *testing.T) {
	var tags []int
	tags = append(tags, 1)
	tags = append(tags, 2)
	tags = append(tags, 2)
	tags = append(tags, 3)
	// t.Fatal(tags)

	ta := make(map[int]int)
	for _, k := range tags {
		ta[k] = 1
	}

	var tt []int
	for k := range ta {
		tt = append(tt, k)

	}

	t.Fatal(tt)

}
func Test_GetArticle(t *testing.T) {
	articles, _ := GetArticle(5, 0, 0, "id")
	fmt.Println(articles)
	t.Error(articles)

}
func Test_New2(t *testing.T) {
	articles, _ := GetArticle(5, 0, 2, "id")
	fmt.Println(articles)
	t.Error(articles)

}

func Test_PostLink(t *testing.T) {
	// link := url.QueryEscape("https://mp.weixin.qq.com/s?__biz=MjM5NzgzNTUyNA==&mid=2650373560&idx=1&sn=84964bd5ce47084ae175806a4bf279da&chksm=bede3bd389a9b2c540644ba0161a5ece8f5c84b3088da9eccc3d8d0712e21cf31f6a637b4940#rd")
	link := url.QueryEscape("http://mp.weixin.qq.com/s?__biz=MzI4ODU0Nzk0NA==&amp;mid=2247484254&amp;idx=2&amp;sn=83cec43c784e699a827a3c9987c9171c&amp;chksm=ec3df659db4a7f4fa457a95daa77a07534e3172902ca27f39ed7a91d9170d260073ace202325&amp;mpshare=1&amp;scene=1&amp;srcid=1010Yx7oukwdLbpQ9QY31fwU#rd")
	doc, err := goquery.NewDocument(fmt.Sprintf("http://localhost:8888/fetch?url=%v", link))
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(doc.Html())
}
