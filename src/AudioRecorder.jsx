import { useState, useRef } from "react";
import {useVolumeLevel, VolumeIndicator} from 'react-volume-indicator'

const AudioRecorder = () => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [beginRecording, endRecording, volume] = useVolumeLevel();
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };
  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };
  return (
    <div>
      <h2>Audio Recorder</h2>
      <main>
        <div className="audio-controls">
          {audio ? (
            <div className="audio-container">
              <audio src={audio} controls></audio>
              <a download href={audio}>
                Download Recording
              </a>
            </div>
          ) : null}
          {!permission ? (
            <button onClick={getMicrophonePermission} type="button">
              Get Microphone
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <button onClick={startRecording} type="button">
              Start Recording
            </button>
            //<VolumeIndicator backgroundColor="#ae9773" indicatorColor="rgba(179, 153, 116, 0.87)" volume={volume} />
          ) : null}
          {recordingStatus === "recording" ? (
            <button onClick={stopRecording} type="button">
              Stop Recording
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default AudioRecorder;
const mimeType = "audio/webm";
