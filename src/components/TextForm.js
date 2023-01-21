import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    };
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Textbox Cleared!", "success")
    };
    const [text, setText] = useState("Enter your text here");
    return (
                <>
        <div>
            <h1 className="my-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Conert to Uppercase
            </button>
            <button className="btn btn-warning mx-1" onClick={handleLoClick}>
                Conert to Lowercase
            </button>
            <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").length)} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
        </div>
        </>
    );
}
