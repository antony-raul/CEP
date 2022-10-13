package model

var URL = "https://viacep.com.br/ws/"

type Cep struct {
	Cep         *string `json:"cep"`
	Logradouro  *string `json:"logradouro"`
	Complemento *string `json:"complemento"`
	Bairro      *string `json:"bairro"`
	Localidade  *string `json:"localidade"`
	Uf          *string `json:"uf"`
	Erro        string  `json:"erro,omitempty"`
}
