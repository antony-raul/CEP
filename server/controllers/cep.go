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
		ctx.JSON(400, gin.H{"error": "CEP invalido"})
		return
	}

	request, err := http.NewRequest(http.MethodGet, fmt.Sprintf("%s/%s/json", model.URL, cep), nil)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	response, err := client.Do(request)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if err = json.NewDecoder(response.Body).Decode(&resCep); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if resCep.Erro == "true" {
		ctx.JSON(400, gin.H{"error": "Erro ao encontrar CEP desejado. Por favor, verifique os dados informados"})
		return
	}

	ctx.JSON(200, resCep)

}

func BuscaCepsPorLogradouro(ctx *gin.Context) {

	var (
		client = new(http.Client)
		resCep []model.Cep
	)

	query := ctx.Request.URL.Query()

	UF := query.Get("UF")
	cidade := query.Get("cidade")
	logradouro := query.Get("logradouro")

	request, err := http.NewRequest(http.MethodGet, fmt.Sprintf("%s/%s/%s/%s/json", model.URL, UF, cidade, logradouro), nil)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	response, err := client.Do(request)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if err = json.NewDecoder(response.Body).Decode(&resCep); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
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
