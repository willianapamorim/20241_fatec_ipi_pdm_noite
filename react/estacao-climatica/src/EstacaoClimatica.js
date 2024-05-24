import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class EstacaoClimatica extends Component {

  timer = null 

  state = {
    data: null
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({data: new Date().toLocaleTimeString()})
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    console.log('render')
    return <div className="card">
      <div className="card-body">
        <div
          className="d-flex align-items-center border rounded mb-2"
          style={{ height: '6rem' }}>
          {/* icone */}
          <i className={`fa-solid fa-5x fa-${this.props.icone}`}></i>
          <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
        </div>
        <div>
          <p className="text-center">
            {
              this.props.latitude ?
                `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}` :
                this.props.mensagemDeErro ?
                  `${this.props.mensagemDeErro}` :
                  `Clique no botão para saber a sua estação climática`
            }
          </p>
        </div>
        <button
          className="btn btn-outline-primary w-100 mt-2"
          onClick={() => this.props.obterLocalizacao()}>
          Qual a minha estação?
        </button>
        <button
          className='btn btn-outline-danger w-100 mt-2'
          onClick={() => {
            ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
          }}>
          Desmontar! Cuidado!
        </button>
      </div>
    </div>
  }
}
