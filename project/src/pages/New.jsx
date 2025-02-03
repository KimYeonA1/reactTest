import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BoardDispatchContext } from '../App';

function New() {
  const { onCreate } = useContext(BoardDispatchContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const { boardType } = useParams();  // boardType에 따라 동적으로 변경
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, content, writer, boardType);  // 해당 카테고리에 맞춰서 데이터 추가
    navigate(`/${boardType}`);  // 글 작성 후 해당 카테고리 페이지로 리다이렉트
  };

  useEffect(() => {
    if (!boardType || !['board', 'notice', 'qna'].includes(boardType)) {
      navigate('/');  // 잘못된 카테고리 경로일 경우 홈으로 리다이렉트
    }
  }, [boardType, navigate]);

  return (
    <div>
      <h2>{boardType === 'notice' ? '공지사항 글쓰기' : boardType === 'qna' ? 'Q&A 글쓰기' : '자유게시판 글쓰기'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="작성자"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}

export default New;
