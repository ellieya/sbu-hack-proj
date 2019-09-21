import React, { Component } from 'react';

function LinkButton(props) {
  return (
    <div className="input-set">
      <input id="link-input" type="text" placeholder="Type link here..." /> <br />
      <input className="button" type="button" value="UPLOAD LINK" onClick={ props.clicked }/>
    </div>
  )
}

class App extends Component {

  certaintyMsgs = [
    "Pretty sure that isn't Uranus!",
    "I don't think that's Uranus.",
    "I think that's Uranus...",
    "Sure looks like a Uranus!",
    "That's DEFINITELY uranus *wink*"
  ]

  state = {
    fileUploaded: false,
    imgLink: "https://static.thenounproject.com/png/1174579-200.png",
    certaintyMsg: null
  };

  /*
  
  */

 handleClick(event) {
  //Take value in textbox
  let link = document.getElementById("link-input").value;

  //Later: if imgLink == link, do nothing

  //Update component state
  //Later: check valid image link
    //if invalid want to make certaintyMsg = null
  //Later: check this image against API to also set certaintyMsg
  this.setState({
    imgLink: link,
    certaintyMsg: this.certaintyMsgs[0]
  });
}
 

  render() {
    /* Want to make img displayed change based on whether fileUploaded true or not */
    let img = this.state.imgLink;

    return (
      <div id="entity">
        <h1>Is it Uranus?</h1>
        <div id="display">
          <div id="display-img">
            <img src={img}/>
          </div>
        </div>
        <div id="form">
          <br />
          <LinkButton clicked={ e => this.handleClick(e)} />
          {/* <input className="button" type="button" value="UPLOAD FILE" /> */}
        </div>
        <br />

        {/* Want to make this message change based on API response (certainty) */}
        <h1>{this.state.certaintyMsg}</h1>

      </div>

    )
  }
}

export default App;
