import React, { Component } from 'react';

import FormValidator from '../Class/FormValidator'

import PopUp from './PopUp'

class Form extends Component {
    constructor(props) {
        super(props)

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
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
        event.preventDefault();
        
        const validacao = this.validador.valida(this.state);

        if(validacao.isValid){
            this.props.handleSubmit(this.state)
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });

            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        {/*<label className="input-field" htmlFor="nome">Nome</label>*/}
                        <input
                            className="validate"
                            placeholder="Nome"
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        {/* <label className="input-field" htmlFor="livro">livro</label> */}
                        <input
                            className="validate"
                            placeholder="Livro"
                            type="text"
                            id="livro"
                            name="livro"
                            value={livro}
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        {/* <label className="input-field" htmlFor="preco">Preço</label> */}
                        <input
                            className="validate"
                            placeholder="Preço"
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