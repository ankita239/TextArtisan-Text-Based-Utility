import React,{useState} from "react";
export default function TextForm(prop) {
  const[text, setText] = useState('');
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Changed to Uppercase","success");
  }
  const charCounter = (text) => {
         let words = text.trim().replace(" ","");
         return words.length;
  }
  const onChangeHandler = (event) => {
         setText(event.target.value);
          }
  const handleLow = () => {
      let newText = text.toLowerCase();
      setText(newText);
      prop.showAlert("Changed to Lowercase","success");
  }
  const handleClear = () => {
    let newText = '';
    setText(newText);
    prop.showAlert("Cleared the TextBox!","success");
  }
  const handleTitle = () => {
    let words = text.split(' ');
    words = words.map((word)=>{
      return word.charAt(0).toUpperCase()+word.slice(1);
      
    })
    let newText = words.join(' ');
    setText(newText);
    prop.showAlert("Changed to Title Case","success");
  }

  const handleSentence = () => {
    let sentences = text.split('. ');
    sentences = sentences.map((sentence) => {
     return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    let newText = sentences.join('. ');
    setText(newText);
    prop.showAlert("Changed to Sentence Case","success");
  }
  
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  } 
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    prop.showAlert("Copied to Clipboard!","success");
  }
  
const handlestopclicked=()=>
{
    //console.log("StopListen Text was clicked"+ text);
    window.speechSynthesis.cancel()
}
const handleremovextra = () => {
  let newText = text.replace(/\s+/g,' ').trim();
  setText(newText);
  prop.showAlert("Removed any extra spaces from your text","success");
}
  return (
    <div className={`text-center text-${prop.mode==='dark'?'light':'dark'} mb-3`}>
        <h1 className="text-3xl font-bold my-2 mb-4">{prop.heading}  </h1>
        <textarea
          value={text}
          className={`${prop.mode === 'dark'?' bg-gray-800 focus:bg-gray-700':' white'} ${prop.mode === 'dark'?'text-white':'text-black'} form-control overflow-x-hidden border-2  border-gray-400 rounded my-2 p-4 w-[75%] flex mx-auto`}
          id="exampleFormControlTextarea1"
          rows="10"   onChange={onChangeHandler} placeholder="Enter Your Text Here"
        ></textarea>
        <div className="buttons">
          <button disabled={text.length===0} className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handleUp}>UpperCase</button>
          <button disabled={text.length===0} className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handleLow}>LowerCase</button>
          <button disabled={text.length===0} className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handleTitle}>Title Case</button>
          <button disabled={text.length===0} className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handleSentence}>Sentence Case</button>
          <button disabled={text.length===0} type="submit" onClick={speak} className="bg-blue-800 rounded text-white font-semibold p-2 m-1">Speak</button>
          <button disabled={text.length===0} type="button" className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handlestopclicked}>Stop Listening </button>
          <button disabled={text.length===0} type="button" className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handleremovextra}>Remove Extra Spaces </button>
          <button disabled={text.length===0} type="button" className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handleCopy}>Copy to Clipboard</button>
          <button disabled={text.length===0} className="bg-blue-800 rounded text-white font-semibold p-2 m-1" onClick={handleClear}>Clear</button>
        </div>
        <div className="summary">
          <h1 className="text-xl font-semibold mt-2">Your Text Summary</h1>
          <p><b>{text.split(/\s+/).filter((t)=>t!=='').length}</b> Words</p>
          <p><b>{charCounter(text)}</b> characters</p>
          <p><b>{0.008 * text.split(' ').filter((t)=>t!=='').length}</b> Minutes Read</p>
          <h2 className="text-xl font-semibold my-2">Preview</h2>
          <p className="mx-8">{text.length>0?text:"Nothing to preview"}</p>
        </div>
    
    </div>
  );
}
