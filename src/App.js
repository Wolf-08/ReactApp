//Importar clase de componente para la creacion

import { Component } from "react";

class Button extends Component {
	// 1ro en Ejecutar
	// state = { chanchito: this.props.chanchito }
	state = { }
	// en el constructor se puede definir el estate
	// pero esto es una mala practica de acuerdo con react documentation
	// pero las propiedad pueden estar cambiando y ademas se puede acceder desde this.props
	constructor(props) {
		//Siempre se debe de llamar super
	super(props);
	console.log('constrcutor', props);
	// this.state = {
	//	chanchito: props.chanchito
	// }
	}

	componentDidMount(){
	// 3ro en Ejecutar
		console.log('Component Did Mount');
	}
// Solo se ejecuta cuando actualizamos el componente
	componentDidUpdate(prevProps, prevState) {
		//4to en ejecutar
		console.log(' component did update', prevProps, prevState);
	}

	componentWillUnmount() {
		console.log('unmount component', this.props, this.state);
	}

	render(){
	// 2ro en Ejecutar
		console.log("ejecutando metodo render de button")
		return(
			<button onClick={() => this.setState({prop: 1})}> ENVIAR </button>
		)
	}
}

class Input extends Component {
	// state = { valor: ''}

	// handleChange = (value) => {
	// 	this.setState({ valor:value })
	// }

	render () {
		return (
			<input
			value={this.props.value}
			onChange={this.props.onChange}></input>
		)
	}
}
class App extends Component {
	//El estado se define vacio al inicio
	// El estado se puede pasar como propiedad a otros componentes que estan en la clase como
	// al boton.
	// el estado siempre se va llamar state si no no furula. y vive en la class Component
	state = {
		valor: 3,
		// Para subir el estado al componente padre
		nombre: '',
		apellido: '',
	}
	// Es mejor utilizar propiedades con arrow functions que utilizar
	// metodos porque se pierde el contexto
	updateValues = (prop, value) => {
		this.setState({ [prop]: value})
	}

	//Es lo que se va mostrar en la pagina, Siempre va en el componente
	render() {
		console.log(this.state);

		//El metodo render siempre se ejecuta en 2 condiciones:
		// 1. El estado del componente haya cambiado (setState)
		// 2. El metodo render de un componente padre se ha ejecutado.
		return(
			//Retornamos contenido JSX
			<div>
				<p> Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
					<Input
					value={this.state.nombre}
					onChange={e => this.updateValues('nombre', e.target.value)}></Input>
					<Input
					value={this.state.apellido}
					onChange={e => this.updateValues('apellido', e.target.value)}></Input>
				</p>
				<p> Hola Mundo</p>
				{/* componente hijo no se le esta enviando una propiedas*/}
				{ this.state.valor === 3 ? <Button chanchito = 'happy'/> : null}
				<button className= {`${this.state.valor}`}  onClick={() => this.setState({valor: 2})}>
					Enviar EN APP
				</button>
			</div>
		)
	}
}

export default App;
