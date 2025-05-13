import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ref, onValue, push } from 'firebase/database';
import { database } from './firebase'; // 경로 확인

import { motion, AnimatePresence } from 'framer-motion';
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
    content: `성취감이라 하면 자신이 뜻 한 바를 이루었을 때의 얻는 감정이다.
나는 물론 6개월간의 휴먼 교육센터에서 배우면서 성취감은 많이 느꼈다.
나의 첫 팀 프로젝트 Pentagon을 완성했을 때,
그리고 Final Project였던 JUVO를 성공적으로 마무리했을 때
그리고 멘토님들로부터 칭찬을 받았을 때 기분이 정말 좋았다.

그 이전에는 아마 고등학교 때 사이클 선수로서 포디엄에 올랐을 때,
캐나다에서 어학원에서 제일 높은 단계로 졸업을 했을 때,
그때를 마지막으로 얻었던 성취감이었던 거 같다.
나는 이제 내가 쌓아온, 열심히 이루어 냈던 결과물을 바탕으로 취업전선에 뛰어들어야 한다.
이제 막 3개의 팀프로젝트를 마무리 했고 
지금 개인 포트폴리오를 만들고 있지만 더 많은 프로젝트를 할 기회가 생긴다면 정말 좋겠다,, 
파이팅..`,
  },
  {
    id: 3,
    title: '세 번째 포스트',
    excerpt: 'Sk하이닉스 메인트 입사지원을 해봤습니다.',
    content: `4월 중순에 지원을 해서 오늘 5월13일 오후3시에 결과 발표가 나왔다.
    정말 나는 나의 최선을 다 했다고 생각을 했는데 결과는 서류탈락이 되어서 상당한 아쉬움이 남았다.
    대기업이라서 무작정 넣어봤는데 항상 이렇게 떨어지니 마음이 심란하다.
    그래도 최선을 다 해서 자소서를 작성을 했지만 결과가 이런걸 어떡해 마음이 조금 아프지만 어쩔 수 없지
    서류 탈락이 된걸 보고 나는 다시 "사람인"에 들어가서 채용공고를 확인하고 해당하는 회사가 사용하는 기술들을 보고 지원을 하고,
    나는 또 다시 코딩 공부를 하고 코드를 다시 한 번 해석해보고 firebase도 사용해보고 그랬다.
    다시 한 번 빠이팅 있게 해보자.. 취업할 수 있겠지..? 열심히 하다보면 하겠지 
    내 나이 26 이제는 자리를 잡고 돈을 벌고 Independence  해야한다. 혹시라도 나의 웹페이지에 들어와서 
    구경을 해주시는 회사 관계자 님 들에게 감사함을 표 합니다. 감사합니다 더욱 증진해서 
    노력하는 개발자가 되도록 하겠습니다.`,
  },
];
const Blog = () => {
  const [searchParams] = useSearchParams();
  const postId = parseInt(searchParams.get('p'), 10);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (postId) {
      const commentsRef = ref(database, `posts/${postId}/comments`);
      onValue(commentsRef, (snapshot) => {
        const data = snapshot.val();
        const loadedComments = data ? Object.values(data) : [];
        setComments(loadedComments);
      });
    }
  }, [postId]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      text: commentText.trim(),
      date: new Date().toLocaleString(),
    };

    const commentsRef = ref(database, `posts/${postId}/comments`);
    push(commentsRef, newComment);

    setCommentText('');
  };

  return (
    <AnimatePresence mode="wait">
      {postId ? (
        (() => {
          const post = posts.find(p => p.id === postId);
          if (!post) {
            return (
              <motion.div
                key="not-found"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              >
                <p>글을 찾을 수 없습니다.</p>
                <Link to="/blog" className="back-link">목록으로 돌아가기</Link>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={`post-${postId}`}
              className="blog-detail"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <h2>{post.title}</h2>
              <div className="content">{post.content}</div>

              <div className="comments-section">
                <h3>댓글</h3>
                <ul className="comments-list">
                  {comments.length > 0 ? comments.map((c, i) => (
                    <li key={i}>
                      <p>{c.text}</p>
                      <span className="comment-date">{c.date}</span>
                    </li>
                  )) : (
                    <li className="no-comments">아직 댓글이 없습니다.</li>
                  )}
                </ul>
                <form onSubmit={handleSubmit} className="comment-form">
                  <textarea
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    placeholder="댓글을 입력하세요."
                    required
                  />
                  <button type="submit">댓글 달기</button>
                </form>
              </div>

              <Link to="/blog" className="back-link">목록으로 돌아가기</Link>
            </motion.div>
          );
        })()
      ) : (
        <motion.div
          key="blog-list"
          className="blog-list"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p className="excerpt">{post.excerpt}</p>
              <Link to={`/blog?p=${post.id}`} className="read-more">더보기 →</Link>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Blog;