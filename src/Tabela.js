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

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Paulo</td>
                <td>React</td>
                <td>100</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Nico</td>
                <td>React</td>
                <td>100</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>João</td>
                <td>React</td>
                <td>100</td>
                <td><button>Remover</button></td>
            </tr>
        </tbody>
    )
}

class Tabela extends Component {

    render() {
        return (
            <table>

                <TableHead />
                <TableBody />

            </table>
        )
    }
}

export default Tabela