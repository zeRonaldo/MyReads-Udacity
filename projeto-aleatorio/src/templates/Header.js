import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Images
import Logo from './../res/icons/logo.png'
import Logout from './../res/icons/logout-grad.png'
import magGlass from './../res/icons/loupe.png'


class Header extends Component{

    render(){
        return(
         
               <nav>
                    <Link to="/">
                        <img src={Logo} alt="MyReads" className="logo"></img>
                    </Link>
                    
                    <Link to="/search">
                        <div className="search-bar">
                            <p>Buscar...</p>
                            <img src={magGlass} alt="" className="icon-big"></img>
                        </div>
                    </Link>

                    <Link className="sair"  to="">
                        <img src={Logout} alt="" className="icon-big"></img> <p>Sair</p>
                    </Link>
                </nav>
            
        );
    }
}

export default Header