import React, { Component } from 'react';
import InputValidator from './classes/InputValidator'
import MatrixController from './classes/MatrixController'


let cleanLastLine = (text) => {
  text = text.split(/\n/)
  return text.slice(0, text.length - 1).join('\n')
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      processes: []
    }
    this.validator = new InputValidator()
    this.controller = new MatrixController()
    this.realValidator = new InputValidator()
  }

  setText(text) {
    this.setState({ text })
  }

  componentWillUpdate(nextProps, nextState) {
    let { text } = nextState;
    this.realValidator.setInput(text.toUpperCase().trim(/\n\s*/))
    if (cleanLastLine(text) !== cleanLastLine(this.state.text)) {
      this.validator.setInput(cleanLastLine(text.toUpperCase()))
    }
  }

  process() {
    let { processes } = this.state
    let { controller, realValidator } = this;
    this.setState({
      processes: [
        {
          input: realValidator.input,
          operations: realValidator.operations,
          output: controller.process(realValidator.operations)
        },
        ...processes
      ]
    })
  }
  render() {
    let { text, processes } = this.state
    let { validator } = this
    return (
      <div className="App">
        <div className="col-12">
          <div className="form-group">
            <label>Entrada</label>
            <textarea className='form-control' value={text} onChange={e => this.setText(e.target.value)} />
          </div>
        </div>
        <div className="col-12">
          {validator.isValid() ? (
            <div className='suggestion p-2 mb-2 bg-secondary text-white'>{validator.suggestion}</div>
          ) : (
              <div className='error p-2 mb-2 text-white'>
                <h5>Error en la linea {validator.error.line_number}: {validator.error.line}</h5>
                <div>{validator.error.error}</div>
                <div>Se esperaba: {validator.suggestion}</div>
              </div>
            )}
        </div>
        <div className="col-12 text-right">
          <button onClick={() => this.setState({text: ''})}>Limpiar</button>
          <button onClick={() => this.process()} disabled={!this.realValidator.isValid()}>Procesar</button>
        </div>
        <div className="result col-12">
          {processes.map((p, i) => (
            <div className='row operation' key={i}>
              <div className="col-12 col-md-4">
                <pre className="input">{p.input}<b>INPUT:</b></pre>
              </div>
              <div className="col-12 col-md-4">
                <pre className="operations">{p.operations.join('\n')}<b>PROCESS:</b></pre>
              </div>
              <div className="col-12 col-md-4">
                <pre className="output">{p.output}<b>OUTPUT:</b></pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
