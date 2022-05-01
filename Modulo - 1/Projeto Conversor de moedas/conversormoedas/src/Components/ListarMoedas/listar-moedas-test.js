import React from 'react';
import ReactDOM from 'react-dom';
import ListarMoedas from './listarMoedas';



describe('teste do componente de listagem de moedas', () => {
    it('deve renderizar o component sem erros', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<ListarMoedas />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})