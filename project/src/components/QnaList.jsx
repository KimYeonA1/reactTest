import './QnaList.css'; // QnaList 컴포넌트의 스타일을 적용하기 위해 import
import { useContext } from 'react';
import { BoardStateContext } from '../App';
import { Link } from 'react-router-dom';

function QnaList() {
  const data = useContext(BoardStateContext);
  const qnaData = data.filter(item => item.category === 'qna'); // Q&A 항목만 필터링

  return (
    <div className="qna-list">
      <h2>Q&A 목록</h2>
      <Link to="/qna/new" className="qna-new-link">질문하기</Link> {/* 새 질문 작성 버튼 */}

      <ul>
        {qnaData.map(item => (
          <li key={item.id} className="qna-post">
            <Link to={`/qna/${item.id}`} className="qna-link">
              <h3>{item.title}</h3>
              <p>작성자: {item.writer}</p>
            </Link>
            {/* 질문에 대한 답변은 따로 표시 */}
            {item.answers && item.answers.length > 0 && (
              <div className="qna-answers">
                <h4>답변:</h4>
                {item.answers.map((answer, idx) => (
                  <div key={idx} className="qna-answer">
                    <p>{answer}</p>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QnaList;
