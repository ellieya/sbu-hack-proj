import React, { Component } from 'react';
import Typed from 'react-typed';

let certaintyMsgs = [
  "Hi! I'm a cute and fluffy moon bunny. I normally pound mochi on the moon, but I can also tell you whether a picture you give me is Uranus or not!",
  "Hey, your image doesn't seem to be working!",
  "That's Mercury, not Uranus!",
  "That's Venus, not Uranus!",
  "That's the planet we're gradually destroying, not Uranus!",
  "That's Mars, not Uranus! Who wants to go to Mars anyways?! Weirdos!",
  "That's Jupiter, not Uranus!",
  "That's Saturn, not Uranus!",
  "That's Neptune, not Uranus!",
  "Heeeeeey! It's Uranus! *wink wink*",
  "I dunno what that is but my best guess is that it's a "
]

function LinkButton(props) {
  return (
    <div className="input-set">
      <input id="link-input" type="text" placeholder="Copy & paste link here!" /> <br />
      <input className="button" type="button" value="UPLOAD LINK" onClick={props.clicked} />
    </div>
  )
}

function BunnyImg(props) {
  if (props.msgValue === 9)
    return <img id="bunny" src="./sbu_bunny_3.png" alt="A happy winking moon bunny speaking" />
  else if (props.msgValue === 10 || props.msgValue === 1)
    return <img id="bunny" src="./sbu_bunny_4.png" alt="A worried moon bunny" />
  else if (props.msgValue > 1)
    return <img id="bunny" src="./sbu_bunny_2.png" alt="A happy moon bunny speaking" />
  else
    return <img id="bunny" src="./sbu_bunny_1.png" alt="A cute, fluffy bunny" />
}

class App extends Component {

  constructor(props) {
    super(props);
    this.noImgUrl = "./ngimg.png";
    this.defaultUrl = "./default.jpg"
    this.state = {
      imgLink: this.defaultUrl,
      msgValue: 0,
      bunnyImg: "./sbu_bunny_1.png"
    };
  }

  handleClick(event) {
    //Take value in textbox
    let docObj = document.getElementById("link-input");
    let link = docObj.value;

    //if imgLink == link, or link is empty string do nothing
    if (!(this.state.imgLink === link || link === "")) {
      //Later: check this image against API to also set certaintyMsg

      this.setState({
        imgLink: link,
        msgValue: 9 //INCOMPLETE PORTION
      })
    };

    //Blank out document object
    docObj.value = null;
  }


  handleError(event) {
    this.setState(
      {
        imgLink: this.noImgUrl,
        msgValue: 1
      }
    );
  }


  render() {
    let img = this.state.imgLink;

    return (
      <div id="entity">
        <h1 id="title">
          <Typed
            strings={['Is this your anus?', 'Is this Uranus?']}
            typeSpeed={50}
          />
        </h1>
        <div id="display">
          <div id="display-img">
            <img src={img} onError={e => this.handleError(e)} />
          </div>
        </div>
        <div id="form">
          <br />
          <LinkButton clicked={e => this.handleClick(e)} />
        </div>
        <br />
        <br />


        <div id="bunny-speak">
          <BunnyImg msgValue={this.state.msgValue} />
          <div id="speech-bubble">
            {certaintyMsgs[this.state.msgValue]}
          </div>
        </div>

        <div id="footer">
          <span>
            <a href="https://www.dafont.com/visitor.font">Visitor font by Brian Kent</a>. <a href="https://www.dafont.com/full-pack-2025.font">Full Pack 2025 font by imagex</a>. <a href="https://www.pngsee.com/maxp/wibTx/">Background image by PngSee.</a>
            </span>
        </div>
      </div>

    )
  }
}

export default App;
