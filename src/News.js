import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';  // News 전용 스타일

const News = () => (
  <div className="community-page">
    <h2 className="news-title">소식</h2>
    <p className="news-text">
      방문해 주셔서 감사합니다. 
      <p>매일 기능을 추가해 확장해 나가고 있습니다.</p><br />

      최근 업데이트 날짜 2025.04.08 (화)
    </p>
    <div className="news-links">
      <Link to="/" className="back-link">홈으로 돌아가기</Link>
      <Link to="/blog" className="blog-link">블로그 보러가기</Link>
    </div>
  </div>
);

export default News;
