import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import { useReducer, createContext, useRef } from 'react';
import QnaList from './components/QnaList';  // QnaList 컴포넌트 import
import Qna from './pages/Qna';  // Qna 상세 페이지 import
import QnaNew from './pages/QnaNew';  // Qna 글쓰기 페이지 import

const mockData = [
  {
    id: 1,
    title: "자유게시판 글 1",
    content: "내용1",
    writer: "김김김",
    createdDate: new Date("2025-01-01").getTime(),
    category: "board" // 카테고리 수정
  },
  {
    id: 2,
    title: "자유게시판 글 2",
    content: "내용2",
    writer: "박박박",
    createdDate: new Date("2025-01-04").getTime(),
    category: "board" // 카테고리 수정
  },
  {
    id: 100,
    title: "공지사항 글 1",
    content: "내용1",
    writer: "김김김",
    createdDate: new Date("2025-01-01").getTime(),
    category: "notice" // 공지사항 카테고리
  },
  {
    id: 200,
    title: "질문하기 글 1",
    content: "내용2",
    writer: "박박박",
    createdDate: new Date("2025-01-05").getTime(),
    category: "qna" // Q&A 카테고리
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.id)
      );
    default:
      return state;
  }
}

export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();

function App() {
  const idRef = useRef(3); // 초기값을 3으로 설정 (기존 데이터 2개 존재)
  const [data, dispatch] = useReducer(reducer, mockData);

  const onCreate = (title, content, writer, category = "board") => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate: new Date(),
        title,
        content,
        writer,
        category
      }
    });
  };

  const onUpdate = (id, createdDate, title, content, writer) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        title,
        content,
        writer
      }
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id
    });
  };

  return (
    <BoardStateContext.Provider value={data}>
      <BoardDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          {/* 기본 경로는 /board로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/board" />} /> 

          {/* board 페이지 */}
          <Route path="/board" element={<Home boardType="board" />} />  {/* 자유게시판 */}
          <Route path="/notice" element={<Home boardType="notice" />} />  {/* 공지사항 */}
          <Route path="/qna" element={<QnaList />} />  {/* Q&A 목록 페이지 */}
          <Route path="/qna/:id" element={<Qna />} />  {/* Q&A 상세 페이지 */}
          <Route path="/qna/new" element={<QnaNew />} />  {/* Q&A 글쓰기 페이지 */}
          <Route path="/board/:id" element={<Board />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  );
}

export default App;
