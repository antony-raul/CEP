package routes

import (
	"github.com/antony-raul/CEP/controllers"
	"github.com/gin-gonic/gin"
)

func HandleRequest() {
	r := gin.Default()

	r.GET("buscar/endereco/:cep", controllers.BuscaEnderecoPeloCep)
	r.GET("buscar/enderecos", controllers.BuscaCepsPorLogradouro)

	r.GET("listar/estados", controllers.ListarEstados)
	r.GET("listar/:uf/cidades", controllers.ListarCidadesPorEstado)

	r.Run()
}
