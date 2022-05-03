import React from 'react';


export default function ListarMoedas() {
  const MOEDAS = [
    { "sigla": "AUB", "descricao": "Dolar australiano" },
    { "sigla": "BRL", "descricao": "Real brasileiro" },
    { "sigla": "USD", "descricao": "Dolar americano" },
    { "sigla": "EURO", "descricao": "Euro" }
    ];
     
    function compare(moedaOne, moedaTwo) {
        if(moedaOne.descricao < moedaTwo.descricao) {
            return -1;
        } else if (moedaOne === moedaTwo) {
            return 0;
        } 
        else {
            return 1;
        }
    }

    return MOEDAS.sort(compare).map(
        moeda => <option value={moeda.sigla} key={moeda.sigla}>
            {moeda.descricao}
        </option>
    );
  }


