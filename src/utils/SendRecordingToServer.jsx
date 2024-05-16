import axios from "axios";


function SendRecordingToServer(blob){
    const formData = new FormData();
    formData.append("voice", blob, "recording.wav");
    
    axios.post("http://172.19.25.241:9145/query", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(response => {
      console.log("파일 전송 완료: " + response.status)
      // 서버로부터 받은 응답에 따라 필요한 작업 수행
      // 예: 서버에서 처리한 결과를 출력
    })
    .catch(error => alert("에러 발생: " + error));
  };

  export default SendRecordingToServer;