import { Component } from "react";
import Product from './Product';

// inline style
const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

  }
}




class Products extends Component {
  render(){
    const { products, addShoppingCart } = this.props

    return(
      <div style={styles.products}>
        {products.map(product =>
          <Product
          addShoppingCart={addShoppingCart}
          key={product.name}
          product={product}
          ></Product>)}
      </div>
    )
  }
}

export default Products