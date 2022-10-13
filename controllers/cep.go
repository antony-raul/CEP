package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"regexp"

	"github.com/antony-raul/CEP/model"
	"github.com/gin-gonic/gin"
)

func BuscaEnderecoPeloCep(ctx *gin.Context) {

	var (
		client = new(http.Client)
		resCep model.Cep
	)

	cep, _ := ctx.Params.Get("cep")

	if !validarCep(cep) {
		ctx.JSON(400, "cep invalido")
		return
	}

	request, err := http.NewRequest(http.MethodGet, fmt.Sprintf("%s/%s/json", model.URL, cep), nil)
	if err != nil {
		ctx.JSON(400, err.Error())
		return
	}

	response, err := client.Do(request)
	if err != nil {
		ctx.JSON(400, err.Error())
		return
	}

	if err = json.NewDecoder(response.Body).Decode(&resCep); err != nil {
		ctx.JSON(400, err.Error())
		return
	}

	ctx.JSON(200, resCep)

}

func validarCep(cep string) bool {
	if cep != "" {
		re := regexp.MustCompile(`^\d{8}$`)
		val := re.Match([]byte(cep))

		return val
	}
	return false
}
