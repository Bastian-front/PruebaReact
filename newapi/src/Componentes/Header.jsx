import React from 'react'
import { useState } from 'react'
import {  Form, Nav, Button } from 'react-bootstrap'

const Header = ({brand, setValorBusqueda}) => {
const [valorCaja,setValorCaja] = useState('');


  return (
    <Nav className='navbar navbar-dark bg-dark'>
    <div className='container'>
      <a className='navbar-brand' href="/">{brand}</a>
    </div>

    <Form className='d-flex' role='search'>
    <input type="search" className='form-control me-2' placeholder="Search" aria-label="Search" onChange={(e)=> setValorBusqueda(e.target.value)}/>
    <Button onClick={()=> setValorCaja(valorCaja)} className="btn btn-outline-success" type="submit">Search</Button>
    </Form>
    </Nav>

   
  )
}

export default Header;