package controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/antony-raul/CEP/model"
	"github.com/gin-gonic/gin"
)

func ListarEstados(ctx *gin.Context) {

	var (
		client = new(http.Client)
		resUF  []model.UF
	)

	request, err := http.NewRequest(http.MethodGet, fmt.Sprintf("%s/estados", model.BaseURLLocalidades), nil)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	response, err := client.Do(request)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if err = json.NewDecoder(response.Body).Decode(&resUF); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(200, resUF)

}

func ListarCidadesPorEstado(ctx *gin.Context) {

	var (
		client    = new(http.Client)
		resCidade []model.Cidade
	)

	UF, _ := ctx.Params.Get("uf")

	request, err := http.NewRequest(http.MethodGet, fmt.Sprintf("%s/estados/%s/distritos", model.BaseURLLocalidades, UF), nil)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	response, err := client.Do(request)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if err = json.NewDecoder(response.Body).Decode(&resCidade); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	log.Println(len(resCidade))

	ctx.JSON(200, resCidade)

}
