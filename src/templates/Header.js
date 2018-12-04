import React, { Component } from 'react';

import {Navbar , NavItem, Icon} from 'react-materialize';
// Images
import Logo from './../res/icons/logo.png';


class Header extends Component{

    render(){
        
        let logoimg = <img src={Logo} alt="Logo" className="logo-nav"></img>
        
        return(
            <div>
                {!this.props.authenticated?
                (<div>
                    <Navbar brand={logoimg} right>
                        <NavItem href='search'><Icon>search</Icon>Search</NavItem>
                        <NavItem href='logout'><Icon>input</Icon>logout</NavItem>
                    </Navbar>
                </div>)
                :
                (<div>
                    <Navbar brand={logoimg} right>
                        <NavItem href='register'><Icon>person</Icon>Register</NavItem>
                        <NavItem href='login'><Icon>person_add</Icon>Login</NavItem>
                    </Navbar>
                </div>)
                
            }
                 
                </div>
        );
    }
}

export default Header