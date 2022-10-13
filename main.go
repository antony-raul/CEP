package main

import (
	"github.com/antony-raul/CEP/controllers"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("buscar/endereco/:cep", controllers.BuscaEnderecoPeloCep)
	r.Run()
}
