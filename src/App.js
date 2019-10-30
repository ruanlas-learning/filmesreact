import React, { Component } from 'react';
import './style.css';
import Routes from './routes';

class App extends Component {
    render(){
        return(
            <div className="app">
                <Routes />
            </div>
        );
    }
}

export default App;