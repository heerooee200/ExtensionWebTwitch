import React from 'react';
import Login from './login';
import './styles/App.css';

class Home extends React.Component {
  
    render(){

        return(
               
            <div className="App">
            <header className="App-header">
              
           
             <Login/>
            
            </header>
          </div>
            
        )
    }
}
export default Home;