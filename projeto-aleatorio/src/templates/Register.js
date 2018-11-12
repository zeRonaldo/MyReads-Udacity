import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//iconography
import Logo from './../res/icons/logo.png';
import Close from './../res/icons/cross-out.png';
import User from './../res/icons/user-grad.png';
import Password from './../res/icons/lock-grad.png';
import Name from './../res/icons/identification-grad.png';

class Registration extends Component {
    state = {
        
    }
    tryLogin = () =>{
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
                            <Link to="/login"><button className="button inactive">Entrar</button></Link>
                            <button className="button">Registrar-se</button>
                            
                        </div>
                  
                    
                    
                    <div className="modal-content row">
                        <div className="row center-align">
                            <h6>Olá novo tripulante da nave My Reads!</h6>
                            <p>precisamos saber um pouco mais de você para saber se tem o que é preciso para ser o maior leitor de todos os sete mares</p>
                           
                        </div>

                        <div className="row">
                            <div className="col s12 m4">
                                <div className="register-image">
                                </div>
                            </div>
                            <form className="col s12 m8">

                            <div className="row fields-container">
                                <div className="input-field col s12">
                                    <img className=" prefix icon" src={Name} alt=""></img>
                                    <input id="name" type="text" className="validate"></input>
                                    <label htmlFor="name">Nome</label>
                                </div>
                                <div className="input-field col s12">
                                    <img className=" prefix icon" src={User} alt=""></img>
                                    <input id="user" type="text" className="validate"></input>
                                    <label htmlFor="user">Usuário</label>
                                </div>
                                <div className="input-field col s12">
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

export default Registration;