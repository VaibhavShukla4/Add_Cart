import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import Table from "react-bootstrap/Table";
const Header = () => {
   
  const getData= useSelector((state) =>state.cartreducer.carts);
  console.log(getData);




  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="./" className="text-decoration-none text-light mx-3">
            Add To Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="./ " className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >

        {
          getData.length ?
          <div className="cart_details" style={{width:"24rem", padding:"10px"}}>
            <Table>
               <thead>
                   <tr>
                     <th>Photo</th>
                     <th>Restaurent Name</th>
                   </tr>
               </thead>
               <tbody>
                {
                  getData.map((e) =>{
                    return(
                      <div>
                        <tr>
                          <td>
                            <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt=""/>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price :₹ {e.price}</p>
                            <p>Quantity :{e.qnty}</p>
                          </td>
                        </tr>
                      </div>
                    )
                  })
                }
               </tbody>
            </Table>
          </div>:
         <div className="cart_details justify-content-center d-flex align-item-center" style={{width:"24rem", padding:10,position:"relative"}} > 
         <i className="fas fa-close smallclose" style={{position:"absolute", top:2,right:20,fontSize:23,cursor:"pointer"}} onClick={handleClose} ></i>
           <h5><p>Your Cart Is Empty</p></h5> 
           <img src="./Cart.gif" alt="" className="cart_img" style={{width:"10rem",padding:10}} />                                                   
         </div>
        }
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
