import { Carousel } from "react-bootstrap"
import CharCards from "./CharCards"

function FirstPage( { charList } ){

    return(
        <div style={{width:'100%', height:'80vh', border:'1px solid white', display:'flex', justifyContent:"center"}}>
            <Carousel style={{border:'1px solid red', padding:'5%', width:'90%'}}>
                {charList.map((characters) => (
                    <Carousel.Item style={{padding:'3%', border:'1px solid green', backgroundImage:"url('https://wallpaperaccess.com/full/2398638.jpg')", backgroundSize:'cover', backgroundPosition:"60%"}} key={characters.id} characters={characters}>
                        <CharCards name={characters.name} image={characters.image} gender={characters.gender} species={characters.species} status={characters.status} ></CharCards>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default FirstPage