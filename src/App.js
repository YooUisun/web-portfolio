import './App.css';
import { useState } from 'react';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const portfolios = [
    {
      title: 'Pentagon Project',
      date: '2024.11.29 ~ 2024.12.13',
      tech: 'HTML, JS, React, CSS, Git, VS Code',
      desc: '운동 기록 저장 및 운동 추천 웹사이트',
      video: 'https://YooUisun.github.io/web-portfolio/videos/Pentagon.mp4',
      github: 'https://github.com/YooUisun/pentagon',
      deploy: 'https://yoouisun.github.io/pentagon/',
    },
    {
      title: '여기어때 Clone 프로젝트',
      date: '2025.01.31 ~ 2025.02.19',
      tech: 'HTML, JAVA, JS, React, CSS, Oracle DB, Spring Framework, MyBatis, Git, VS Code, Eclipse',
      desc: '경주지역 여행지 및 식당 추천 사이트',
      video: 'https://YooUisun.github.io/web-portfolio/videos/SecondProject.mp4',
      github: 'https://github.com/YooUisun/Ttonabolkka',
    },
    {
      title: 'JUVO',
      date: '2025.02.24 ~ 2025.03.20',
      tech: 'HTML, JAVA, JS, React, CSS, Oracle DB, Spring Framework, MyBatis, Git, VS Code, Eclipse, Postman',
      desc: '주유소/전기차 충전소 정보 제공 및 현재 위치 기준 목적지 추천 시스템',
      video: 'https://YooUisun.github.io/web-portfolio/videos/JUVO.mp4',
      github: 'https://github.com/YooUisun/JUVO',
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>Yoo Uisun's Portfolio</h1>
      </header>
      <div className="port-container">
        {portfolios.map((item, index) => (
          <div
            key={index}
            className={`port-card ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'not-hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="port-video">
              <video src={item.video} autoPlay muted loop playsInline />
            </div>
            <div className="port-info">
              <h3>{item.title}</h3>
              <p className="date">{item.date}</p>
              <p className="desc">{item.desc}</p>
              <p className="tech">{item.tech}</p>
              <div className="links">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="github-icon"
                  />
                </a>
                {item.deploy && (
                  <a href={item.deploy} target="_blank" rel="noopener noreferrer" className="deploy-link">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/819/819814.png"
                      alt="Deploy"
                      className="deploy-icon"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <h2>Contact Me</h2>
        <p>+82 010 8690 7691</p>
        <p>
          <a href="mailto:yoouisun33@naver.com" className="email-link">
            yoouisun33@naver.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;