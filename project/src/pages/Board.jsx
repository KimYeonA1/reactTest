import Header from "../components/Header";
import BoardView from "../components/BoardView";
import { useContext, useEffect, useState } from "react";
import { BoardStateContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";

const Board = ()=>{
    const params = useParams();
    const nav = useNavigate();

    const data = useContext(BoardStateContext);
    const [curBoardItem, setCurBoardItem] = useState();
    useEffect(()=>{
        const currentBoardItem = data.find(
            (item)=> String(item.id) === String(params.id)
        )

        if(!currentBoardItem){
            window.alert("존재하지 않는 글입니다.")
            nav("/",{replace:true})
        }
        setCurBoardItem(currentBoardItem);
    }, [params.id, data])

    if (!curBoardItem) {
        return <div>데이터 로딩중...!</div>;
      }

    return (
        <div className="board">
            <Header title={'글 보기'}></Header>
            <BoardView curBoardItem={curBoardItem}></BoardView>
        </div>
    )
}

export default Board;