import React from 'react';
import pikachu from '../imagen/pikachu.jpg'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'


export default  class NavBarHome extends React.Component
{
render(){
    return (<Navbar bg="dark" variant="dark">
    <Navbar.Brand >
    <img
        alt=""
        src={pikachu}
        width="90"
        height="75"
      />{' '}
      <strong>MovieMoon</strong>
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Brand> <Link to="/login">Login</Link></Navbar.Brand>
    </Navbar.Collapse>
  </Navbar> 
)
}
}
