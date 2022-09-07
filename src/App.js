import { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

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
    <div className='App' style={{backgroundColor:"black", height:'auto', width:'100%', display:'flex', flexDirection:"column", justifyContent:"center" }}>
      <FirstPage charList={charList}/>
      <SecondPage />
    </div>
  );
}

export default App;
