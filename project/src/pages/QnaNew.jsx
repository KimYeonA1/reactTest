// qnanew.jsx
import { useState, useContext } from 'react';
import { BoardDispatchContext } from '../App';
import { useNavigate } from 'react-router-dom';

function QnaNew() {
  const { onCreate } = useContext(BoardDispatchContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, content, writer, 'qna'); // category는 qna로 설정
    navigate('/qna');
  };

  return (
    <div>
      <h2>질문 작성</h2>
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

export default QnaNew;
