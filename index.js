const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 4567

app.use(bodyParser.json())

app.get('/data', (_req, res) => {
  let response =
    [
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }, {
        "data_venda": '01/01/2020',
        "valor_vendas": 477.4,
        "quantidade_vendas": 7,
        "quantidade_pecas": 6.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 2218.7000000000003,
        "quantidade_vendas": 10,
        "quantidade_pecas": 13,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 200.0,
        "quantidade_vendas": 2,
        "quantidade_pecas": 4.0,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31435614836',
        "vendedor_id": '9095'
      },
      {
        "data_venda": '01/01/2020',
        "valor_vendas": 221.03,
        "quantidade_vendas": 3,
        "quantidade_pecas": 4,
        "loja_cnpj": '10473217000172',
        "vendedor_cpf": '31582267820',
        "vendedor_id": '9093'
      }
    ]

  res.send(response)
})

app.post('/receive', (req, res) => {
  console.log('Received');
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})