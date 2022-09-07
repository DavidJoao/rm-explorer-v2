import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CharCards from './CharCards';

function SecondPage(){
    
    const [ charList, setCharList ] = useState([{}]);
    const [ count, setCount ] = useState(2)

    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
    .then((res) => res.json())
    .then((res) => {
        setCharList(res.results)
      })
      .catch((err) => {
        console.log(err)
      })

    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecrement = () => {
        setCount(count-1)
    }

    if(count < 2){
        setCount(2)
    }
    if(count > 41){
        setCount(41)
    }

    return(
        <div style={{height:"auto", width:'100%', padding:'3%', display:"flex", flexDirection:'column', alignItems:'center'}}>
            <h1 style={{color:'white'}}>More Characters: Page {count}</h1>
            <div style={{display:"flex", flexDirection:'row'}}>
                <Button style={{width:'10rem', marginRight:"1%"}} onClick={handleDecrement}>Previous Page</Button><Button style={{width:'10rem', marginLeft:"1%"}} onClick={handleIncrement}>Next Page</Button>
            </div>
            <div style={{width:'100%', height:'auto', padding:'3%'}} className="d-flex flex-column flex-md-row flex-wrap">
            {charList.map((characters) => (
                        <CharCards name={characters.name} image={characters.image} gender={characters.gender} species={characters.species} status={characters.status} ></CharCards>
                ))}
            </div>

        </div>
    )
}

export default SecondPage