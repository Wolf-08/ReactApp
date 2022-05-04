import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// JSX ES CASI COMO HTML
// Elementos primitivos de html
// const x = React.createElement('p', null, 'hola mundo')

// Compoenente funcional que recibe parametros
// const Li = ({ children, estado, casa, edad}) => {
//   console.log(casa, edad);
//   return (
// <li> {children} estoy {estado}</li>
//   )}
// Componente funcional que retorna contenido jsx
// const Y = () => //Necesita recibir un parametro
// <ul>
//   <Li estado = {'feliz'}
//       casa = {false}
//       edad={24}> Chanchito</Li>
//   <Li estado = {' emocionado'}>Chanchito 2</Li>
//   <Li estado = {'depresion'}>Chanchito 3</Li>
// </ul>
// ReactDOM.render(
// < Y />, document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
