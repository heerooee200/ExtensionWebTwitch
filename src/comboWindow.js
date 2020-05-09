import React from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string'
import { existEmote  } from './scripts/chatListener.js';
import Emote from './emote.js'
import './styles/Combo.css';
class ComboWindow extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { apiResponse: "",
        combo:"NO",
        logEmotes : [],
        prueba: [
            {code: "ricardoFlick", id: "5bc2143ea5351f40921080ee", type: "bttv", cont: 0},
            {code: "cmonBruh", id: 84608, type: "twitch", cont: 0}
        ]
     };
        
    }

    chatListener(channelName,emotesJson){
        this.setState({
            emotes: JSON.parse(emotesJson) 
        });
        let options = {
            options: {
                debug: true
            },
            connection: {
                secure: true,
                reconnect: true
            },
            channels: [channelName]
        };
       
        let client = new window.tmi.client(options);
        //client.on('message', this.onMessageHandler(this,channel, context, msg, self));
        client.on("message", (channel, tags, message, self) => {
            this.onMessageHandler.call(this,channel, tags, message, self)
        });
        client.on('connected', this.onConnectedHandler);
        client.connect();
          
    }

    onMessageHandler (target, context, msg, self) {
        var  logEmotesTemp = this.state.logEmotes.map(a => ({...a}));
        if (self) { return; } // Ignore messages from the bot
        // Remove whitespace from chat message
        const commandName = msg.trim();
        // If the command is known, let's execute it
        var isEmote = existEmote(this.state.emotes,commandName)
        if(isEmote !== null) {
            let emoteFlag = false; 
            logEmotesTemp=logEmotesTemp.map(function(emote) {
                if(emote['code'] == isEmote[0]['code'] ){
                    emote['cont'] = emote['cont']  + 1;
                    if(emote['cont'] > 10 ) {
                        if (!emote['combo']) {
                            emote['lastlog'] = performance.now();
                            console.log('inicio');
                            console.log(emote['lastlog'])
                            emote['combo'] = true;
                        }
                        else{
                            if((performance.now()-emote['lastlog'])/1000 > 10){
                                emote['combo'] = false;
                                emote['cont'] = 1;
                                emote['lastlog'] = performance.now();
                            }

                        }
                        
                    }
                    else{
                     
                        if((performance.now() - emote['lastlog'])/1000 > 10 ){
                              emote['lastlog'] = performance.now();
                              console.log('se establecio en 0 el contador')
                              emote['cont'] = 0;

                        }
                    }
                   
                    emoteFlag = true;
                }
                return emote;
            });
            if (!emoteFlag) {
                let  isEmoteTemp = isEmote.map(a => ({...a}));
                isEmoteTemp[0]['cont'] = 1;
                isEmoteTemp[0]['combo'] = false;
                isEmoteTemp[0]['lastlog'] = performance.now();
              // messagesLimit = messagesLimit - 1;
              logEmotesTemp.push(isEmoteTemp[0]);
            }
            isEmote = null;
            this.setState({
                logEmotes: logEmotesTemp
            });
            console.log(this.state.logEmotes);
            //updateMultiplier();

        }
    
        //console.log(`* Unknown command ${commandName}`);
    }

   
    // Called every time the bot connects to Twitch chat
    onConnectedHandler (addr, port) {
        console.log(`* Connected to ${addr}:${port}`);
    }
    

    callAPI(channelid) {
          fetch("http://pinnate-surf-dirigible.glitch.me/twitchAPI?channelid="+channelid)
              .then(res => res.text())
              .then(res => this.setState({ apiResponse: res }))
              .then(() => {
                    const values = queryString.parse(this.props.location.search)
                    this.chatListener.call(this,values.channelname,this.state.apiResponse);
                });
    }
    
    componentWillMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(values.channelid)
        this.callAPI.call(this,values.channelid);
         
    }

     
     
    render(){
        
        return(
               
              <div className="comboEmote">
                  <br/>
                  {this.state.logEmotes.map((emote,index) =>{
                    if (emote.cont >10){
                      return(
                         
                            <Emote 
                                key =  {emote.id.toString()}
                                code = {emote.code}
                                id   = {emote.id}
                                type = {emote.type}
                                cont = {emote.cont}
                            />
                         
                      )
                    }
                  })
                  }
              </div>
            
        )
    }
}
export default ComboWindow;