import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar , NavItem, Icon} from 'react-materialize';
// Images
import Logo from './../res/icons/logo.png'
import Logout from './../res/icons/logout-grad.png'
import magGlass from './../res/icons/loupe.png'


class Header extends Component{

    render(){
        let content;
        let logoimg = <img src={Logo} alt="Logo" className="logo-nav"></img>
        if(this.props.isLogged){
             content = <Navbar brand={logoimg} right>
            <NavItem href='register'><Icon>person</Icon>Register</NavItem>
            <NavItem href='login'><Icon>person_add</Icon>Login</NavItem>
        </Navbar>;
        }else{
            content = <Navbar brand={logoimg} right>
            <NavItem href='search'><Icon>search</Icon>Search</NavItem>
            <NavItem href='logout'><Icon>input</Icon>logout</NavItem>
            </Navbar>;
        }
        
        return(
            <div>
                
                 {content}
                </div>
        );
    }
}

export default Header