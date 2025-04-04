import './App.css';

function App() {
  const portfolios = [
    {
      title: 'Pentagon Project',
      date: '2024.11.29 ~ 2024.12.13',
      tech: 'HTML,JS,React,Css,Git,VsCode',
      desc: '운동 기록 저장 및 운동 추천 웹사이트',
      video: 'https://YooUisun.github.io/web-portfolio/videos/Pentagon.mp4',
    },
    {
      title: '여기어때 clone 프로젝트',
      date: '2025.01.31 ~ 2025.02.19',
      tech: 'HTML,JAVA,JS,React,CSS,Oracle DB,Spring FrameWork,Mybatis,Git,VsCode,Eclipse',
      desc: '경주지역 여행지 및 식당 추천 사이트',
      video: 'https://YooUisun.github.io/web-portfolio/videos/SecondProject.mp4',
    },
    {
      title: 'JUVO',
      date: '2025.02.24 ~ 2025.03.20',
      tech: 'HTML,JAVA,JS,React,CSS,Oracle DB,Spring FrameWork,Mybatis,Git,VsCode,Eclipse,PostMan',
      desc: '세 번째 프로젝트 설명입니다.',
      video: 'https://YooUisun.github.io/web-portfolio/videos/Juvo.mp4',
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
