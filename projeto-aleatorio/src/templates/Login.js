import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//iconography
import Logo from './../res/icons/logo.png';
import Close from './../res/icons/cross-out.png';
import User from './../res/icons/user-grad.png';
import Password from './../res/icons/lock-grad.png'

class Login extends Component {
    state = {
        
    }
    tryLogin (event){
        event.preventDefault();
        console.log('boo');
    }
    render() {
        return(
            <div className="background">
                
                    <div className="logo-container">
                        <img src={Logo} alt="Logo" className="logo-big"></img>
                        <Link to="/" ><img className="icon-big" src={Close} alt="Close"></img></Link>
                    </div>
            
                
               <section className="login-modal">
                    
                        <div className="top-buttons">
                            <button className="button">Entrar</button>
                            <Link to="/register"><button className="button inactive">Registrar-se</button></Link>
                        </div>
                  
                    
                    
                    <div className="modal-content row">
                        <div className="row center-align">
                            <h6>Seja bem vindo ao sistema My Reads!</h6>
                            <p>Apesar do nosso sistema ser um livro aberto ainda precisamos julgar você pela capa.</p>
                            <p>Realize o <b>Login</b> para prosseguir</p>
                        </div>

                        <div className="row">
                            <form className="col s12">
                            <div className="row fields-container">
                                <div className="input-field col s8">
                                    <img className=" prefix icon" src={User} alt=""></img>
                                    <input id="user" type="text" className="validate"></input>
                                    <label htmlFor="user">Usuário</label>
                                </div>
                                <div className="input-field col s8">
                                    <img className=" prefix icon" src={Password} alt=""></img>
                                    <input id="password" type="password" className="validate"></input>
                                    <label htmlFor="password">Senha</label>
                                </div>
                            </div>
                            <div className="row button-row">
                                <button className="waves-effect waves-light button" onClick={this.tryLogin}>Entrar</button>
                            </div>
                            </form>
                        </div>
        
                    </div>
               </section>
            </div>
            
        );
    };
}

export default Login;