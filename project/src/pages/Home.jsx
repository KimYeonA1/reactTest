import { useContext } from 'react';
import Button from '../components/Button';
import Header from './../components/Header';
import List from './../components/List';
import { BoardStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Home = ({ boardType }) => {
  const nav = useNavigate();
  const data = useContext(BoardStateContext);

  // 글쓰기 버튼 클릭 시 해당 게시판에 맞게 이동
  const handleNewPost = () => {
    if (boardType === "notice") {
      nav("/notice/noticenew");
    } else if (boardType === "qna") {
      nav("/qna/qnanew");
    } else if (boardType === "board") {
      nav("/board/boardnew");
    }
  };

  return (
    <>
      <Header 
        left={boardType === "board" ? "자유게시판" : (boardType === "notice" ? "공지사항" : "Q&A")}
        right={<Button text={'글 쓰기'} type={'blue'} onClick={handleNewPost} />}
      />
      <List data={data.filter(item => item.category === boardType)} />
    </>
  );
};

export default Home;
