// qna.jsx
import { useState, useContext, useEffect } from 'react';
import { BoardStateContext } from '../App';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Qna() {
  const data = useContext(BoardStateContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const questionData = data.find(item => item.id === parseInt(id));
    if (questionData) {
      setQuestion(questionData);
    } else {
      navigate('/notfound');
    }
  }, [data, id, navigate]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    // 답변 추가
    if (question) {
      const updatedQuestion = {
        ...question,
        answers: question.answers ? [...question.answers, answer] : [answer],
      };
      // 답변을 추가한 후에 state 업데이트
      navigate(`/qna/${id}`);
    }
  };

  if (!question) return null;

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.content}</p>
      <p>작성자: {question.writer}</p>
      <h4>답변:</h4>
      {question.answers && question.answers.length > 0 ? (
        question.answers.map((ans, idx) => (
          <div key={idx}>
            <p>{ans}</p>
          </div>
        ))
      ) : (
        <p>답변이 없습니다.</p>
      )}
      <form onSubmit={handleAnswerSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="답변을 작성해주세요."
        />
        <button type="submit">답변 작성</button>
      </form>
      <Link to="/qna">뒤로가기</Link>
    </div>
  );
}

export default Qna;
