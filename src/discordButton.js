import React from 'react';
import {Link} from 'react-router-dom'

class discordButton extends React.Component {
    render(){
        const imgstyle = {
            width : "3rem",
            heigth : '3rem',
            backgroundColor : "transparent",
            verticalAlign: "middle",
            paddingRight: "2px"
          };
        const buttonstyle = {
            width : "100%",
            heigth : "100%",
            backgroundColor : "#F2F1F0 ",
            color:"#737271",
            border : "10px #7A04DD",
            padding : "10px",
            borderRadius : "15px",
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '1rem'
          };
        return(
            <div >
                 <a href="https://discord.gg/DAsHfYE" style={{ textDecoration: 'none', fontSize:'none' }}>
                    <button style={buttonstyle}  ><img src="https://www.pngkey.com/png/full/17-179750_discord-icon-discord-logo.png" 
                                alt="discord logo"
                                style={imgstyle} 
                                onClick={this.myfunction} />
                                Unete al canal de discord
                    </button>
                </a>
                
            </div>
        )
    }
}
export default discordButton;