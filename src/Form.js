import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }

        this.state = this.stateInicial
    }

    handleInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState(this.stateInicial);
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">livro</label>
                        <input
                            className="validate"
                            type="text"
                            id="livro"
                            name="livro"
                            value={livro}
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            className="validate"
                            type="text"
                            id="preco"
                            name="preco"
                            value={preco}
                            onChange={this.handleInput}
                        />
                    </div>
                </div>

                <button className="waves-effect waves-light indigo lighten-2 btn" onClick={this.submitForm} >Salvar</button>
            </form>
        )
    }
}

export default Form;