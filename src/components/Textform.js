import React, { useState } from 'react';
import { 
  toUpperCase, 
  toLowerCase, 
  removeExtraSpaces, 
  countWords, 
  calculateReadingTime 
} from '../utils/textutils';

function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(toUpperCase(text));
    showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(toLowerCase(text));
    showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText('');
    showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(removeExtraSpaces(text));
    showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color: mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: mode === 'dark' ? '#13466e' : 'white',
              color: mode === 'dark' ? 'white' : '#042743'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{countWords(text)} words and {text.length} characters</p>
        <p>{calculateReadingTime(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

export default TextForm;