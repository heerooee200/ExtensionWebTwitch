import React, {Component} from 'react'

export default class Emote extends Component{
    constructor(props) {
        super(props);
        let url = '';
        if(this.props.type == 'bttv') url = 'https://cdn.betterttv.net/emote/'+this.props.id+'/3x';
        if(this.props.type == 'twitch' || this.props.type == 'channel') url = 'https://static-cdn.jtvnw.net/emoticons/v1/'+this.props.id+'/3.0';
        this.state = {visible:true,link: url }
      }
    
      componentWillReceiveProps(nextProps) {
        // reset the timer if children are changed
        if (nextProps.children !== this.props.children) {
          this.setTimer();
          this.setState({visible: true});
        }
      }
    
      componentDidMount() {
        this.setTimer();
      }
    
      setTimer() {
        // clear any existing timer
        if (this._timer != null) {
          clearTimeout(this._timer)
        }
    
        // hide after `delay` milliseconds
        this._timer = setTimeout(function(){
          this.setState({visible: false});
          this._timer = null;
        }.bind(this), 60000);
      }
    
      componentWillUnmount() {
        clearTimeout(this._timer);
      }    

    render(){

        return(
            <div>
            { this.state.visible
                ? <div >
                    <img src = {this.state.link} />
                    <span className="multiplier">x</span>
                    <span className="combo" id="combo">{this.props.cont}</span> 
                </div>
                : <span/>
            }
            
            </div>
        
       )
    }
}
