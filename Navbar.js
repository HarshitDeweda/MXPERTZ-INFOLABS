// components/Navbar/index.js

import React from "react";
import {AiOutlineShopping} from "react-icons/ai"
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
} from "./Navbarindex";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/Landing" >
						Landing
					</NavLink>
					<NavLink to="/Home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/Gallery" activeStyle>
						Gallery
					</NavLink>
					<NavLink to="/Shop" activeStyle>
						Shop
					</NavLink>
					<NavLink to="/Blogs" activeStyle>
						Blogs
					</NavLink>
                    <NavLink to="/About" activeStyle>
						About
					</NavLink>
                    <NavLink to="/Team" activeStyle>
						Team
					</NavLink>
					<NavLink to="/Contant" activeStyle>
						Contant
					</NavLink>
                    <NavLink to="/signUp" activeStyle>
                        Sign Up
                    </NavLink>

					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<AiOutlineShopping to="/signin">
						
					</AiOutlineShopping>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
