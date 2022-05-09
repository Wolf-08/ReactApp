//Importar clase de componente para la creacion
import { Component } from "react";
class App extends Component {
	state = {
		valor: 3,
		nombre: '',
		apellido: '',
	}

	//Es lo que se va mostrar en la pagina, Siempre va en el componente
	render() {
		console.log(this.state);
		return(
			<div>
				<p> Hola Mundo</p>
			</div>
			//Retornamos contenido JSX
			)
	}
}

export default App;
