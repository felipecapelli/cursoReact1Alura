import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
            </tr>
        </thead>);
}

const TableBoty = props => {
    const linhas = props.autores.map( (linha, index) => {
        return(
            <tr>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
            </tr>
        );
    });

    return(
        <body>
            {linhas}
        </body>
    );
}

class Tabela extends Component {
    render() {
        
        const { autores } = this.props;
        

        return (
            <table>
                <TableHead />
                <TableBoty autores={ autores }/>
            </table>
        );
    }
}
export default Tabela;