import { Carousel } from "react-bootstrap"
import CharCards from "./CharCards"

function FirstPage( { charList } ){

    return(
        <div style={{width:'100%', height:'auto', display:'flex', flexDirection:'column', justifyContent:"center", alignItems:"center", padding:"1%", boxShadow:"4px 17px 55px 3px rgba(79,194,132,0.84)"}}>
            <h1 style={{color:'white', borderLeft:"1px solid rgba(79,194,132,0.82)", borderRight:"1px solid rgba(79,194,132,0.82)", padding:"0% 1% 0% 1%", boxShadow:"-3px 0px 79px -6px rgba(79,194,132,0.84)", borderRadius:'10px'}}>Rick and Morty Explorer</h1>
            <h3 style={{color:'white', borderLeft:"1px solid rgba(79,194,132,0.82)", borderRight:"1px solid rgba(79,194,132,0.82)", padding:"0% 1% 0% 1%", borderRadius:'10px'}}>Main Characters</h3>
            <Carousel style={{padding:'5%', width:'90%', backgroundImage:"url('https://wallpaperaccess.com/full/2398638.jpg')", backgroundSize:'cover'}}>
                {charList.map((characters) => (
                    <Carousel.Item style={{padding:'3%'}} key={characters.id} characters={characters}>
                        <CharCards name={characters.name} image={characters.image} gender={characters.gender} species={characters.species} status={characters.status} ></CharCards>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default FirstPage