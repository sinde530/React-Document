// import logo from './logo.svg';
import './App.css';
import FormatName from './components/formatName';
import GetGreeting from './components/GetGreeting';
import ReactDOM from 'react-dom'
import Welcome from './components/Welcome';

function App() {
  // 태그문법으로 변수선언이 가능하다
  // const name = `josh Perez`
  // const element = <h1>Hello, {name}</h1>

  const element = <a href="https://www.reactjs.org"> link </a>
  // const element = <img src={user.avatarUrl}></img>;
  return (
    <div className="App">
    {element}
    <FormatName/>
    <GetGreeting/>
    <Welcome/>
    </div>
    
  );
  
}
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

export default App;
