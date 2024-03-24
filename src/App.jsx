import "./App.css";
import { useState, useRef } from "react";
import VideoRecorder from "../src/VideoRecorder";
import AudioRecorder from "../src/AudioRecorder";

const App = () => {
  let [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };
  const [val, setVal] = useState("Enter Critiques Here");
  const click = () => {
    alert(val);
  };
  const change = (event) => {
    setVal(event.target.value);
  };

  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  return (
    <>
      <div className="alex-park-homescreen">
        <button className="button-left" onClick={()=>updateToggle(1)}>About</button>
        <h1>CRITIQIFY</h1>
        <img src = "IMG_2921.jpg" alt="alex park" width="128" height="64"></img>
        <button className="button-middle" onClick={()=>updateToggle(2)}>Record</button>
        <button className="button-right" onClick={()=>updateToggle(3)}>Credits</button>
      </div>
      <div className={toggle === 1 ? "show-content" : "content"}>
        <h2>
          Critiqify is an app used to record and self-critique video presentations.
        </h2>
        <h2>
          We are planning to add more useful functions in the future. 
        </h2>
        <button onClick={()=>updateToggle(2)} className = "button">
          Use Critiqify
        </button>
      </div>
      <div className={toggle === 2 ? "show-content" : "content"}>
        <h2>Record Yourself Doing a Presentation!</h2>
        <div className="button-flex">
          <button onClick={toggleRecordOption("video")}>Record Video</button>
          <button onClick={toggleRecordOption("audio")}>Record Audio</button>
        </div>
        <div>
          {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
        </div>
        <div className="textbox">
          <form>
            <label>
              Critique: <input type="text" name="lastCritique" />
            </label>
            <input type="submit" value="Enter" />
          </form>
        </div>
      </div>
      <div className={toggle === 3 ? "show-content" : "content"}>
        <h2>
          Alex Park :   park.ale@northeastern.edu
        </h2>
        <h2>
          Aiden Rim :   rim.a@northeastern.edu
        </h2>
        <h2>
          Bryan Li  :   li.brya@northeastern.edu
        </h2>
        <h2>
          Colin Chu :   chu.col@northeastern.edu
        </h2>
      </div>
    </>
  );
};

export default App;
