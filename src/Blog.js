// src/Blog.js
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: '첫 번째 포스트',
    excerpt: '개인 포트폴리오를 제작중 입니다. 방문해 주시는 관계자 님들 감사합니다.',
    content: `방문해 주셔서 정말 감사드립니다. 발전 가능한 개발자가 되도록 노력하겠습니다.`,
  },
  {
    id: 2,
    title: '두 번째 포스트',
    excerpt: '개발자의 길을 선택하면서 성취감을 느낀적이 있는가.',
    content: `성취감이라.. 하면 자신이 뜻 한 바를 이루었을 때의 얻는 감정이다.\n물론 6개월간의 휴먼교육센터에서 배우면서 성취감은 많이 느꼈다.\n캘린더를 만들었을 때, 며칠 동안 못 했었는데 끝내 해결했을 때, 정말 기분이 좋았다.
    \n 아마 고등학교때 사이클 선수로써 포디움에 올랐을 때 , \n 캐나다에서 어학원에서 제일 높은 단계로 졸업을 했을때, 
    그때를 마지막으로 얻었던 성취감 이었던 거 같다.`,

  },
];

const Blog = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('p');

  // 상세 페이지
  if (postId) {
    const post = posts.find(p => p.id === parseInt(postId, 10));
    if (!post) {
      return <div className="blog-detail"><p>글을 찾을 수 없습니다.</p><Link to="/blog" className="back-link">목록으로 돌아가기</Link></div>;
    }
    return (
      <div className="blog-detail">
        <h2>{post.title}</h2>
        <div className="content">{post.content}</div>
        <Link to="/blog" className="back-link">목록으로 돌아가기</Link>
      </div>
    );
  }

  // 목록 페이지
  return (
    <div className="blog-list">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p className="excerpt">{post.excerpt}</p>
          <Link to={`/blog?p=${post.id}`} className="read-more">더보기 →</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
