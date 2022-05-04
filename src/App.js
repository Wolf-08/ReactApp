import logo from './logo.svg';
import './App.css';
import Button from './Button';
const arr = [
  'Chanchito feliz',
  'Chanchito feliz 2',
  'Chanchito feliz 3',
  'Chanchito feliz 4',
]
//Declarado como una funcion o como una constante
// con las arrow functions
// Esto cambia a react creare elemente
// const Li = ({children}) => {
//   console.log(children);
//   return (
//     <li className='clase-li'>{children}</li>
//   )
// }
// function App() {
//   const valor = 'Feliz'; // Valores que se pueden imprimir
//   return (
//     <ul>
//       <Li estado={'feliz'}> valor de li</Li>
//     </ul>
//   );
// }
function App() {
  const valor = 'Feliz'; // Valores que se pueden imprimir
  //Renderizado condicional
  const miVariable = false;
  // En el click se manda la funcion y eso me puede servir
  if ( miVariable) {
    return <p> Mivariable dio true</p>
  }
  return (
  <div>
    <h1 onClick={(e) => console.log('click', e)}> Hola Mundo</h1>
    {arr.map(el => <p key={el}>{el}</p>)}
    <Button onClick= {() => console.log('Click')}>Enviar</Button>
  </div>
  );
}

export default App;
