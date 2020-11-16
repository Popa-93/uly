
import React from 'react';
import Sound from 'react-sound';

class Touche extends React.Component {

    constructor(props) {
      super(props);
      this.state = { playStatus : Sound.status.STOPPED }
    }
  
    componentDidMount(){
      this.handleClick = this.handleClick.bind(this);
      this.handleSongFinishedPlaying = this.handleSongFinishedPlaying(this);
    }

    handleClick() {
      this.setState( {playStatus: Sound.status.PLAYING} );
    }
  
    handleSongFinishedPlaying() {
      this.setState( {playStatus: Sound.status.STOPPED} );
     }
  
    render() {
      return (
        <React.Fragment>
            <div className={"Touche " + this.props.name}>
            <img onClick={this.handleClick}
                src={process.env.PUBLIC_URL + '/' + this.props.img}
                alt={this.props.img} />
            <Sound url={process.env.PUBLIC_URL + '/' + this.props.soundURL}
                playStatus={this.state.playStatus}
                onFinishedPlaying={this.handleSongFinishedPlaying}/>
            </div>
        </React.Fragment>
      );
    }
  }

  export default Touche;
  