import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>유의선 Portfolio</h1>

    <div className="port-container">
      <div className="port-video">
      <video src={"/videos/Pentagon.mp4"} autoPlay muted loop ></video>
      </div>
      <div className="port-info">
        <h3>주제 : 어쩌고</h3>
        <p>일정 : 어쩌고</p>
        <p>사용기술 : 어쩌고</p>
        <p>설명 : 어쩌고</p>
      </div>
    </div>
    </div>
  );
}

export default App;
