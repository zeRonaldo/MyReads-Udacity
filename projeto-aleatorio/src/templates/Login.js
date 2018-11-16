import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Tab,Tabs,Row,Input, Icon,Col, Card, CardTitle, Button} from 'react-materialize'
//iconography
import Logo from './../res/icons/logo.png';
import Close from './../res/icons/cross-out.png';
import User from './../res/icons/user-grad.png';
import Password from './../res/icons/lock-grad.png'
import LibPic from './../res/library.jpg';
class Login extends Component {
    state = {
        
    }
    tryLogin (){
        //event.preventDefault();
        console.log('boo');
    }
    render() {
        return(
            <div className="background">
                <Col s={12} m={12}>
                    <Card 
                        horizontal
                        header={<CardTitle image={LibPic} ></CardTitle>} 
                         className="hide-on-med-and-down">
                        <Tabs className=''tabWidth="100%">
                            <Tab title="Login"active>
                                <Row className="content">
                                    <Row className="center">
                                        <h5>Welcome to MyReads!</h5>
                                        <p>Although our system is like an open book, we still have to judge you by the cover.</p>
                                        <p>Complete your <b>Login</b> to start</p>
                                    </Row>
                                    <Row>
                                        <Input s={12} label="Username" validate><Icon>account_circle</Icon></Input>
                                        <Input s={12} label="Password" type="password" validate><Icon>lock</Icon></Input>
                                    </Row>
                                    <Row>
                                        <div className="center">
                                            <Button waves='light'>Login</Button>
                                        </div>
                                    </Row>
                                </Row>
                            </Tab>
                            
                            <Tab title="Register" >
                                <Row className="content">
                                    <Row className="center">
                                        <h5>Olá novo tripulante da nave My Reads!</h5>
                                        <p>precisamos saber um pouco mais de você para saber se tem o que é preciso para ser o maior leitor de todos os sete mares</p>
                                    </Row>
                                    <Row>
                                         
                                        <Col s={12}>
                                            <Row>
                                               <Input s={12} label="Name" validate><Icon>person</Icon></Input> 
                                               <Input s={12} label="Username" validate><Icon>alternate_email</Icon></Input> 
                                               <Input s={12} label="Password" type="password" validate><Icon>lock</Icon></Input> 
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="center">
                                            <Button waves='light'>Register</Button>
                                        </div>
                                    </Row>
                                   
                                </Row>
                            </Tab>
                        </Tabs>
                        
                        
                    </Card>
                    <Card   className="hide-on-large-only">
                        <Tabs className=''tabWidth="100%">
                            <Tab title="Login"active>
                                <Row className="content">
                                    <Row className="center">
                                        <h5>Welcome to MyReads!</h5>
                                        <p>Although our system is like an open book, we still have to judge you by the cover.</p>
                                        <p>Complete your <b>Login</b> to start</p>
                                    </Row>
                                    <Row>
                                        <Input s={12} label="Username" validate><Icon>account_circle</Icon></Input>
                                        <Input s={12} label="Password" type="password" validate><Icon>lock</Icon></Input>
                                    </Row>
                                    <Row>
                                        <div className="center">
                                            <Button waves='light' onClick={this.tryLogin}>Login</Button>
                                        </div>
                                    </Row>
                                </Row>
                            </Tab>
                            
                            <Tab title="Register" >
                                <Row className="content">
                                    <Row className="center">
                                        <h5>Olá novo tripulante da nave My Reads!</h5>
                                        <p>precisamos saber um pouco mais de você para saber se tem o que é preciso para ser o maior leitor de todos os sete mares</p>
                                    </Row>
                                    <Row>
                                         
                                        <Col s={12}>
                                            <Row>
                                               <Input s={12} label="Name" validate><Icon>person</Icon></Input> 
                                               <Input s={12} label="Username" validate><Icon>alternate_email</Icon></Input> 
                                               <Input s={12} label="Password" type="password" validate><Icon>lock</Icon></Input> 
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="center">
                                            <Button waves='light' onClick={this.tryRegister}>Register</Button>
                                        </div>
                                    </Row>
                                   
                                </Row>
                            </Tab>
                        </Tabs>
                    </Card>
                </Col>
                    {/* <div className="logo-container">
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
               </section> */}
            </div>
            
        );
    };
}

export default Login;