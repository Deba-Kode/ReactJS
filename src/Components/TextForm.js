import React, { useState } from "react";
// import PropTypes from "prop-types";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case dude...","success");
  };
  
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case dude...","success");
  };

  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Textarea has been cleared dude...","success");
  }

  const handleCopyClick = () =>{
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied....","success");
  }

  const handleOnChange = (event) => {
    // console.log("Handle On change was clicked");
    setText(event.target.value); //It is used to add the provided at the end of every text in textarea
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style = {{background: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        {/* mx-2 is class which is used to give the margin in x-direction where 2 is variable i.e., can be changed*/}
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        {/* mx-2 is class which is used to give the margin in x-direction where 2 is variable i.e., can be changed*/}
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Click to Clear
        </button>
      </div>
      <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        {/* my-3 is class which is used to give the margin in y-direction where 3 is variable i.e., can be changed*/}
        <h3>Your Text Summary</h3>
        <p>
          <b>{text.split(" ").length}</b> word and <b>{text.length}</b> characters are there
          in your text
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes are required to read the
          above text
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it"}</p>
      </div>
    </>
  );
}
