//Importar clase de componente para la creacion
import { Component } from "react";
import Products from './components/Products'
class App extends Component {
	// Estado inicial
	// Arreglo de objetos de cada producto
	state = {
		products: [
			{name: 'headset', price: 1500, img: '/products/audifonos.webp'},
			{name: 'ipad', price: 9200, img: '/products/tablet.webp'},
			{name: 'mat', price: 300, img: '/products/alfombrilla.webp'},
		]
	}

	//Es lo que se va mostrar en la pagina, Siempre va en el componente
	render() {
		console.log(this.state);
		return(
			<div>
				<Products addShoppingCart={()=> console.log('Dont doing anything')}
				products={this.state.products}
				></Products>
				<p> Hola Mundo</p>
			</div>
			//Retornamos contenido JSX
			)
	}
}

export default App;
