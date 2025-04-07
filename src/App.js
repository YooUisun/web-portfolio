import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog';
import News from './News';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      title: '떠나볼까',
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
      desc: '주유소/전기차 충전소 정보 제공 및\n현재 위치 기준 목적지 추천 시스템',
      video: 'https://YooUisun.github.io/web-portfolio/videos/JUVO.mp4',
      github: 'https://github.com/YooUisun/JUVO',
    },
    {
      title: 'Portfolio',
      date: '2025.03.21 ~',
      desc: '개인 포트폴리오 ppt 자료',
      ppt: 'https://YooUisun.github.io/web-portfolio/ppt/Portfolio.pdf',
      image: 'https://YooUisun.github.io/web-portfolio/img/Bono.webp'
    }
  ];

  const PortfolioHome = () => (
    <div className="port-container">
      {portfolios.map((item, index) => (
        <div
          key={index}
          className={`port-card ${
            hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'not-hovered' : ''
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* 이미지 or 비디오 */}
          <div className="port-media">
            {item.video ? (
              <video src={item.video} autoPlay muted loop playsInline />
            ) : item.image ? (
              <img src={item.image} alt={item.title} className="port-image" />
            ) : null}
          </div>

          {/* 정보 영역 */}
          <div className="port-info">
            <h3>{item.title}</h3>
            <p className="date">{item.date}</p>
            <p className="desc">{item.desc}</p>
            {item.tech && <p className="tech">{item.tech}</p>}

            {/* 링크들 */}
            <div className="links">
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="github-icon"
                  />
                </a>
              )}
              {item.deploy && (
                <a href={item.deploy} target="_blank" rel="noopener noreferrer" className="deploy-link">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/819/819814.png"
                    alt="Deploy"
                    className="deploy-icon"
                  />
                </a>
              )}
              {item.ppt && (
                <a href={item.ppt} target="_blank" rel="noopener noreferrer" className="ppt-link">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                    alt="PPT"
                    className="deploy-icon"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const closeMenu = () => setIsMenuOpen(false);

  const basename = process.env.NODE_ENV === 'development' ? '/' : '/web-portfolio';

  return (
    <Router basename={basename}>
      <div className="App">
        {/* HEADER */}
        <header>
          <Link to="/" className="home-link" onClick={closeMenu}>
            <h1>Yoo Uisun's Portfolio</h1>
          </Link>
          <button
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="메뉴 열기"
          >
            <span className="hamburger-icon"></span>
          </button>
        </header>

        {/* OVERLAY */}
        <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu} />

        {/* SLIDE-IN MENU */}
        <nav className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={closeMenu}>홈</Link>
          <Link to="/news" onClick={closeMenu}>소식</Link>
          <Link to="/blog" onClick={closeMenu}>블로그</Link>
        </nav>

        {/* MAIN CONTENT */}
        <main>
          <Routes>
            <Route path="/" element={<PortfolioHome />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* FOOTER */}
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
    </Router>
  );
}

export default App;
