package repository

import (
	"errors"

	"github.com/yizenghui/wx/orm"
)

func GetMediaIDByAppID() {

}

//GetMediaByAppID 通过 appID 获取公众号信息
func GetMediaByAppID(appID string) (media orm.Media, err error) {

	if appID != "" {

		media.GetMediaByAppID(appID)
		return media, nil
	} else {
		return media, errors.New("出错了")
	}

}
