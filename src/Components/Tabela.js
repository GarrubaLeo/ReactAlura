import React, { Component } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autor</th>
                <th>Livro</th>
                <th>Preço</th>
                <th>Remover</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index} >
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(linha.preco)}</td>
                <td>
                    <button className="waves-effect waves-light indigo lighten-2 btn" onClick={() => props.handleDelete(index)}>
                        Remover
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>
            {linhas}
        </tbody>
    )
}

class Tabela extends Component {

    render() {
        const { autores, handleDelete } = this.props

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody autores={autores} handleDelete={handleDelete} />
            </table>
        )
    }
}

export default Tabela