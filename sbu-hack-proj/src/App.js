import React, { Component } from 'react';
import img from './uranus.jpg';

class App extends Component {

  state = {
    fileUploaded: false
  };

  render() {
    return (
      <div id="entity">
        <h1>Is it Uranus?</h1>
        <div id="display">
          <div id="display-img">
            {/* Want to make img displayed change based on whether fileUploaded true or not */}
            <img src={img} />
          </div>
        </div>
        <div id="form">
          <br />
          <input className="text-input" type="text" placeholder="Type link here..." /><br />
          <input className="button" type="button" value="UPLOAD LINK" />
          {/* <input className="button" type="button" value="UPLOAD FILE" /> */}
        </div>
        <br />

        {/* Want to make this message change based on API response */}
        <h1>That's definitely uranus *wink*</h1>

      </div>

    )
  }
}

export default App;
