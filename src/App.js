import React, { Component, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css'

import Tabela from './Components/Tabela'
import Form from './Components/Form'
import Header from './Components/Header'
import PopUp from './Components/PopUp'

class App extends Component {
  state = {
    autores: [
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
    );

    PopUp.exibeMensagem('success', 'Autor removido');
  }

  handleSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
    PopUp.exibeMensagem('success', 'Autor cadastrado');
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela autores={this.state.autores} handleDelete={this.handleDelete} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
