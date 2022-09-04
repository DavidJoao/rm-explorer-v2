import { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';

function App() {
    
    const [ charList, setCharList ] = useState([{}]);


      fetch('https://rickandmortyapi.com/api/character')
        .then((res) => {return res.json()})
        .then((res) => {
          setCharList(res.results)
        })
        .catch((err) => {
          console.log(err)
        })

  return (
    <div style={{backgroundColor:"black", height:'100vh', width:'100%', display:'flex', justifyContent:"center", paddingTop:'3%'}}>
      <FirstPage charList={charList}/>
    </div>
  );
}

export default App;
