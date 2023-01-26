import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Card, Col} from 'react-bootstrap';


const MiApi = ( { valorBusqueda } ) => {
const [character, setCharacter] = useState([]);
const [cargado, setCargado] = useState(false);




  

useEffect(() => {

getRandomUser();


}, [valorBusqueda])


  async function getRandomUser(){
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const data = await res.json()
  console.log(data);
  setCharacter(data.results)
  setCargado(true);

 };

  
 return (
  cargado ?
 

  <Row>     
      {
        
          character
            .filter((p) => {
              return p.name.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
              p.name.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
              p.name.toLowerCase().includes(valorBusqueda.toLowerCase());
              })
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((p,i) => {
              return (
                <Col key={i}>
                <Card style={{ width: '18rem', margin: '16px', padding: '1rem'}}>
                <img className='card-img-top' style={{width: 'auto', height: '60%', objectFit: 'contain'}}
                 src={p.image} alt="imagen personaje" />
                <Card.Body>
                <Card.Title className=''> {[p.name, p.name.status].join(' ')}
                </Card.Title>
                <Card.Text>
                  
                  {p.type}
                  <br />
                  {p.species}
                
                </Card.Text>
              </Card.Body>
            </Card>
            
            </Col>
       
              )
          })
      }
    
  </Row>:
 
  <h1>Cargando datos</h1>
  
)

}

export default MiApi;