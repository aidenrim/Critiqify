import "./App.css";
import { useState, useRef } from "react";
import VideoRecorder from "../src/VideoRecorder";
import AudioRecorder from "../src/AudioRecorder";
import {useVolumeLevel, VolumeIndicator} from 'react-volume-indicator'

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
        <a href= "https://www.linkedin.com/in/alex-park-/"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224039423826595910/Screenshot_2024-03-31_at_12.55.32_PM.png?ex=661c0a8c&is=6609958c&hm=dd34562425e7f4f66c8f2f3c7de39c9d734f00e7a5addd0a10e62b3aae704a80&=&format=webp&quality=lossless&width=682&height=700" alt="alepark" width="128" height="128"></img></a>
        <h2>
          Aiden Rim :   rim.a@northeastern.edu
        </h2>
        <a href="https://www.youtube.com/watch?v=DINnS09LZww"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224041166517960914/Screenshot_2024-03-31_at_1.02.22_PM.png?ex=661c0c2b&is=6609972b&hm=d6b8f40ed349e746f2b32c659a65c65a5359a766c99707e1da6bac129cb93b8b&=&format=webp&quality=lossless&width=712&height=676" alt="arim" width="128" height="128"></img></a>
        <h2>
          Bryan Li  :   li.brya@northeastern.edu
        </h2>
        <a href="https://www.linkedin.com/in/bryanli27/"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224041166279016498/Screenshot_2024-03-31_at_1.02.19_PM.png?ex=661c0c2b&is=6609972b&hm=2a71664de249db7fb1f906d4a691b101ab2d6902903b0b5512def0e18f1c3cde&=&format=webp&quality=lossless&width=700&height=680" alt="bryali" width="128" height="128"></img></a>
        <h2>
          Colin Chu :   chu.col@northeastern.edu
        </h2>
        <a href="https://www.crunchyroll.com/series/GY8VEQ95Y/darling-in-the-franxx"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224041166794653839/Screenshot_2024-03-31_at_1.02.25_PM.png?ex=661c0c2b&is=6609972b&hm=f59d51592a34ebf55cd896214b3ab2ef0c5571ca8cc50e37289389437d006209&=&format=webp&quality=lossless&width=736&height=692" alt="colchu" width="128" height="128"></img></a>
      </div>
    </>
  );
};

export default App;
