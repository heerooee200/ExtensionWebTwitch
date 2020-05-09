import React from 'react';
import Discord from './discordButton';
import GoogleButton from './googleButton';
import logo from './logo.svg';
class signIn extends React.Component {
    signIn = () => {
        this.props.signGoogle();
    }
    render(){
        const imgstyle = {
            heigth : "2rem",
            width : "2rem",
            backgroundColor : "transparent",
            verticalAlign: "middle",
            paddingRight: "2px"
          };
        const buttonstyle = {
            width : "100%",
            heigth : "100%",
            backgroundColor : "#2b3056",
            border : "0px",
            padding : "10px",
            color: "#f7e9dc",
            borderRadius : "15px"
          };
        return(
            <div>
                <img src="https://support.discordapp.com/hc/article_attachments/360050664572/Twitch-refresh.gif" className="App-logo" alt="logo" />
                <p>Sign in</p> 
                <GoogleButton clickMe={this.signIn}/>  
                <Discord/>
            </div>
        )
    }
}
export default signIn;