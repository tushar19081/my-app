import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted into Upper Case!", "success");
    }
    const handlelowClick = () =>{
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted into Lower Case!", "success");
    }
    const copy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const clear = () =>{
         setText("");
         props.showAlert("Text Cleared!", "success");
    }

    const removeExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra Spaces Removes', 'success')
    }

    const handleOnChange= (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">TextArea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="5"
            style={{backgroundColor: props.mode === 'dark'?'#021a31':'white', color: props.mode === 'dark'?'white':'black'}} ></textarea>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick} style={{backgroundColor: props.mode === 'dark'?'#058e6c':'#0d6efd', border: props.mode === 'dark'?'#065039':'#0d6efd', marginTop: '17px'}}>Get LowerCase </button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={clear} style={{backgroundColor: props.mode === 'dark'?'#058e6c':'#0d6efd', border: props.mode === 'dark'?'#065039':'#0d6efd', marginTop: '17px'}}>Clear</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={{backgroundColor: props.mode === 'dark'?'#058e6c':'#0d6efd', border: props.mode === 'dark'?'#065039':'#0d6efd', marginTop: '17px'}}>Get UpperCase </button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={copy} style={{backgroundColor: props.mode === 'dark'?'#058e6c':'#0d6efd', border: props.mode === 'dark'?'#065039':'#0d6efd', marginTop: '17px'}}>Copy</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces} style={{backgroundColor: props.mode === 'dark'?'#058e6c':'#0d6efd', border: props.mode === 'dark'?'#065039':'#0d6efd', marginTop: '17px'}}>Trim Extra Spaces</button>
            </div>           
        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
           <h2>Your Text Analysis</h2>
           <p>{text.split(/\s+/).filter((ele) =>{return ele.length!==0}).length} Word and {text.length} Characters</p>
           <h2>Text Preview</h2>
           <p>{text}</p>
        </div>
        </>
    )
}
