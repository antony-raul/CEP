package controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/antony-raul/CEP/model"
	"github.com/gin-gonic/gin"
)

func BuscaEnderecoPeloCep(ctx *gin.Context) {

	var (
		client = new(http.Client)
		resCep model.Cep
	)

	cep, _ := ctx.Params.Get("cep")

	request, err := http.NewRequest(http.MethodGet, fmt.Sprintf("%s/%s/json", model.URL, cep), nil)
	if err != nil {
		log.Println(err)
	}

	response, err := client.Do(request)
	if err != nil {
		log.Println(err)
	}

	if err = json.NewDecoder(response.Body).Decode(&resCep); err != nil {
		log.Println(err)
	}

	ctx.JSON(200, resCep)

}
