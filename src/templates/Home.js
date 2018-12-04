import React, { Component } from 'react';

// Templates

import LoggedHome from './LoggedHome';
import SplashHome from './SplashHome';
class Home extends Component {
    state = {
        
    }
    render() {
        return(
            <div>
                
                
                    <LoggedHome/>
                    {/* <SplashHome/> 
               */}
                 
                
            </div>
            
        );
    };
}

export default Home;