import './App.css';

function App() {
  const portfolios = [
    {
      title: 'Pentagon Project',
      date: '2025.04.01 ~ 04.04',
      tech: 'React, CSS, Git',
      desc: '간단한 포트폴리오 영상 테스트입니다.',
      video: 'https://YooUisun.github.io/web-portfolio/videos/Pentagon.mp4',
    },
    {
      title: '떠나볼까 여기어때 clone 프로젝트',
      date: '2025.03.20 ~ 03.30',
      tech: 'Vue, Sass, Firebase',
      desc: '두 번째 프로젝트 설명입니다.',
      video: 'https://YooUisun.github.io/web-portfolio/videos/Hexagon.mp4',
    },
    {
      title: 'JUVO',
      date: '2025.03.10 ~ 03.18',
      tech: 'HTML, CSS, JavaScript',
      desc: '세 번째 프로젝트 설명입니다.',
      video: '/videos/Juvo.mp4',  // 경로를 상대경로로 수정
    },
  ];

  return (
    <div className="App">
      <h1>유의선 Portfolio</h1>
      <div className="port-container">
        {portfolios.map((item, index) => (
          <div key={index} className="port-card">
            <div className="port-video">
              <video src={item.video} autoPlay muted loop></video>
            </div>
            <div className="port-info">
              <h3>{item.title}</h3>
              <p>일정: {item.date}</p>
              <p>사용 기술: {item.tech}</p>
              <p>설명: {item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
