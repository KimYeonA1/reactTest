import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ right }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <div className="left">
        <span 
          className={location.pathname === "/board" ? "active" : ""}
          onClick={() => navigate("/board")}
        >
          자유게시판
        </span>
        <span 
          className={location.pathname === "/notice" ? "active" : ""}
          onClick={() => navigate("/notice")}
        >
          공지사항
        </span>
        <span 
          className={location.pathname === "/qna" ? "active" : ""}
          onClick={() => navigate("/qna")}
        >
          Q&A
        </span>
      </div>
      <div className="right">{right}</div>
    </div>
  );
};

export default Header;
