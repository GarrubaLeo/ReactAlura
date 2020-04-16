import React, { Component } from 'react';
import Tabela from './Tabela'

class App extends Component {
  state = {
    autores:  [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '9999'
      }
    ],
  }

  handleDelete = index => {
    const { autores } = this.state

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        })
      }
    )
  }  

  render() {
    return (
      <div className="App">
        <Tabela autores={this.state.autores} handleDelete={this.handleDelete} />
      </div>
    );
  }  
}

export default App;
