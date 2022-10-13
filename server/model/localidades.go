package model

const BaseURLLocalidades = "https://servicodados.ibge.gov.br/api/v1/localidades/"

type UF struct {
	UF   *string `json:"sigla"`
	Nome *string `json:"nome"`
}

type Cidade struct {
	Nome *string `json:"nome"`
}
