import React from 'react';

class googleButton extends React.Component {
    clickMe = () => {
        this.props.clickMe();
    }
    render(){
        const imgstyle = {
            heigth : "3rem",
            width : "3rem",
            backgroundColor : "transparent",
            verticalAlign: "middle",
            paddingRight: "2px"
          };
        const buttonstyle = {
            width : "100%",
            heigth : "100%",
            backgroundColor : "#2b3056",
            border : "0px",
            marginBottom : "1rem" ,
            padding : "1rem",
            color: "#f7e9dc",
            borderRadius : "15px",
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '1rem'
          };
        return(
            <div >
                <button style={buttonstyle}  onClick={this.clickMe}>
                    <img src="https://pluspng.com/img-png/google-logo-png-chrome-google-logo-social-icon-download-png-512.png" 
                             alt="discord logo"
                             style={imgstyle} 
                              />
                             Ingresa con tu cuenta de google
                </button>
            </div>
        )
    }
}
export default googleButton;