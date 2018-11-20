import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Slider, Slide, Button, Icon} from 'react-materialize';
// Templates

import Header from './Header';
import FooterTemplate from './FooterTemplate';

class SplashHome extends Component {
    state = {
        
    }
   
    
    render() {
        return(
            <div>
                <Header isLogged={true} />
                    
                    <div className="content">
                        <Slider id="sliders">
                            <Slide  title="Welcome to MyReads!">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis aliquet enim, ut posuere velit pretium sed. In egestas rhoncus turpis id elementum. Morbi sodales facilisis augue id dictum
                            </Slide>
                            <Slide  title="Catch up on your readings">
                            Quisque vel neque ut sem porttitor ultrices sed a magna. Nunc mi elit, vestibulum quis pretium elementum, pulvinar id elit.
                            </Slide>
                            <Slide title="Know what everybody else is reading">
                            Aliquam pellentesque lorem sit amet nisi lacinia euismod. Aenean sed mauris eu dolor feugiat semper. Nunc sodales est at tellus tristique posuere. Ut sed sollicitudin turpis.
                            </Slide>
                        </Slider>

                        <div className="button-container">
                            <Link to="/login">
                                <Button waves='light'>Login<Icon left>person</Icon></Button>
                            </Link>
                            <Link to="/register">
                                <Button waves='light'>Register<Icon left>person_add</Icon></Button>
                            </Link>
                            
                        </div>
                    </div>
                    

                <FooterTemplate/>
                
                
                
            </div>
            
        );
    };
}



export default SplashHome;