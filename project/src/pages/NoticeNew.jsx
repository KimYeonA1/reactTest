import { useState, useContext } from 'react';
import { BoardDispatchContext } from '../App';

function NoticeNew() {
  const { onCreate } = useContext(BoardDispatchContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, content, writer, "notice");
  };

  return (
    <div>
      <h2>공지사항 글쓰기</h2>
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

export default NoticeNew;
