import './App.css';

import React from 'react';

import Touche from './Touche'

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


class App extends React.Component {
    render() {
    const listeTouches = touches.map ( (touche) =>
      <Touche {...touche} key={touche.name}/>);
    return (
      <div className="App">
        {listeTouches}
      </div>
      );
    }
}

export default App;
