// import React, { useState } from 'react';
// import Recorder from 'recorder-js';
// import { urlState, recorderState, blobState, recordingState } from '../recoil/AudioAtom';
// import { useRecoilState } from 'recoil';

// const AudioRecorder = () => {
//   const [recorder, setRecorder] = useRecoilState(recorderState);
//   const [recording, setRecording] = useRecoilState(recordingState);
//   const [audioBlob, setAudioBlob] = useRecoilState(blobState);
//   const [audioURL, setAudioURL] = useRecoilState(urlState);

//   const handleStartRecording = async () => {
//     const newRecorder = new Recorder();
//     await newRecorder.init();
//     setRecorder(newRecorder);
//     newRecorder.start();
//     setRecording(true);
//   };




//   const handleStopRecording = async () => {
//     if (recorder) {
//       const audioData = await recorder.stop();
//       setAudioBlob(audioData.blob);
//       setAudioURL(audioData.url);
//       setRecording(false);
//     }
//   };


//   return (
//     // <div>
//     //   <button onClick={handleRecord}>{recording ? 'Stop Recording' : 'Start Recording'}</button>
//     //   {audioBlob && (
//     //     <div>
//     //       <audio controls src={audioURL}></audio>
//     //     </div>
//     //   )}
//     // </div>
//     {handleStartRecording, handleStopRecording}
//   );
// };

// export default AudioRecorder;
