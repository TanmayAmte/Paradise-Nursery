import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";


const Header = () => {
  const getData = useSelector((state)=>state.cartreducer.carts);
  console.log(getData);
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" style={{height:60}}>
        <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3" style={{fontSize:40, marginRight:40, marginLeft:-30}}><img 
              src="/images/logo.jpg" 
              alt="Logo" 
              style={{ height: 50, width: 50, borderRadius: "50%", marginRight: 10, marginBottom: 5 }}
            />OnlyPlants</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/home" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>
        </Container>
        <Badge badgeContent={getData.length} color="success" style={{ marginRight: 30 }}>
        <NavLink to="/cart"><i
            class="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 30, cursor: "pointer", marginRight: 20 }}
          ></i></NavLink>
        </Badge>
      </Navbar>
    </>
  );
};

export default Header;
