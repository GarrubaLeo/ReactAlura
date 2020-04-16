import React, { Component } from 'react'

const TableHead = () => {
    return (
        <thead>
            <th>Autor</th>
            <th>Livro</th>
            <th>Preço</th>
            <th>Remover</th>
        </thead>
    )
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index} >
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick={ () => props.handleDelete(index) }>Remover</button></td>
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
            <table>

                <TableHead />
                <TableBody autores={ autores } handleDelete={handleDelete} />

            </table>
        )
    }
}

export default Tabela