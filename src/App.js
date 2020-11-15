import './App.css';

import React from 'react';
import Sound from 'react-sound';

const touches = [
    {
      soundURL : "coq.mp3",
      img: "coq.jpg",
      name : "Coq"
    },
    {
      soundURL : "chèvre.mp3",
      img: "chèvre.jpg",
      name : "Chevre"
    },
    {
      soundURL : "klaxon.mp3",
      img: "voiture.jpg",
      name : "Klaxon"
    }
  ];

class Touche extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSongFinishedPlaying = this.handleSongFinishedPlaying(this);
    this.state = { playStatus : Sound.status.STOPPED }
  }

  handleClick() {
    this.setState( {playStatus: Sound.status.PLAYING} );
  }

  handleSongFinishedPlaying() {
    this.setState( {playStatus: Sound.status.STOPPED} )
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

class App extends React.Component {
  
    render() {
    const listeTouches = touches.map ( (touche) =>
      <Touche img ={touche.img} name={touche.name} key={touche.name} soundURL={touche.soundURL}/>);
    return (
      <div className="App">
        {listeTouches}
      </div>
      );
    }
}

export default App;
