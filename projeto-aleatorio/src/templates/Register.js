import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Tab,Tabs,Row,Input, Icon,Col, Card, CardTitle, Button} from 'react-materialize'
//iconography
import Logo from './../res/icons/logo.png';
import Close from './../res/icons/cross-out.png';
import User from './../res/icons/user-grad.png';
import Password from './../res/icons/lock-grad.png';
import Name from './../res/icons/identification-grad.png';
import LibPic from './../res/library.jpg';
class Registration extends Component {
    state = {
        
    }
    tryLogin = () =>{
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
                            <Tab title="Login">
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
                            
                            <Tab title="Register" active>
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
                            <Tab title="Login">
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
                            
                            <Tab title="Register" active>
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
            </div>
        );
    };
}

export default Registration;