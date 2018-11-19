import React, { Component } from 'react';

// Templates

import LoggedHome from './LoggedHome';

class Home extends Component {
    state = {
        
    }
    render() {
        return(
            <div>
                
                {/* <SplashHome/> */}
                <LoggedHome/>
            </div>
            
        );
    };
}

export default Home;