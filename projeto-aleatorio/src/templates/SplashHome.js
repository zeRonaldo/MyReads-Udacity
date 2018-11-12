import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Templates
import Logo from './../res/icons/logo.png'

class SplashHome extends Component {
    state = {
        
    }
    onViewWillMount () {
        // $('.carousel.carousel-slider').carousel({
        //     fullWidth: true,
        //     indicators: true
        //   });
    }
    
    render() {
        return(
            <div>
                <div className="diagonal-bg">
                </div>
                <div className="content">
                    <nav>
                       <img src={Logo} alt="Logo" className="logo-big"></img>
                    </nav>
                    

                <div class="carousel carousel-slider center">
                    <div class="carousel-fixed-item center">
                    </div>
                    <div class="carousel-item red white-text" href="#one!">
                    <h2>Seja Bem vindo ao My Reads</h2>
                    <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis aliquet enim, ut posuere velit pretium sed. In egestas rhoncus turpis id elementum. Morbi sodales facilisis augue id dictum</p>
                    </div>
                    <div class="carousel-item amber white-text" href="#two!">
                    <h2>Atualize suas leituras</h2>
                    <p class="white-text">Quisque vel neque ut sem porttitor ultrices sed a magna. Nunc mi elit, vestibulum quis pretium elementum, pulvinar id elit.</p>
                    </div>
                    <div class="carousel-item green white-text" href="#three!">
                    <h2>Saiba quem mais está lendo</h2>
                    <p class="white-text">Aliquam pellentesque lorem sit amet nisi lacinia euismod. Aenean sed mauris eu dolor feugiat semper. Nunc sodales est at tellus tristique posuere. Ut sed sollicitudin turpis.</p>
                    </div>
                </div>
        
                </div>
                
            </div>
            
        );
    };
}



export default SplashHome;