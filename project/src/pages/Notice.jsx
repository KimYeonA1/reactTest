import { useContext } from "react";
import List from "../components/List";
import { BoardStateContext } from "../App";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Notice = () => {
  const data = useContext(BoardStateContext);
  const noticeData = data.filter(item => item.category === "notice");
  const nav = useNavigate(); // useNavigate 사용

  // 글쓰기 버튼 클릭 시 NoticeNew 페이지로 이동
  const handleWriteClick = () => {
    nav("/noticenew"); // "noticenew" 경로로 이동
  };

  return (
    <div className="notice">
      <Header title="공지사항" />
      <List data={noticeData} />
      <button onClick={handleWriteClick}>글쓰기</button> {/* 글쓰기 버튼 */}
    </div>
  );
};

export default Notice;
