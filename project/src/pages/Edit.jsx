import Header from "../components/Header";
import Editor from "../components/Editor";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BoardDispatchContext, BoardStateContext } from "../App";

const Edit = ()=>{
    const [editOn, setEditOn] = useState(false);
    const {onUpdate} = useContext(BoardDispatchContext);

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
        setEditOn(true);
        setCurBoardItem(currentBoardItem);
    }, [params.id, data])

    if (!curBoardItem) {
        return <div>데이터 로딩중...!</div>;
      }

    const onSubmit = (input)=>{
      onUpdate(params.id, input.createdDate, input.title, input.content, input.writer, );
      nav("/",{replace:true})
    }

    return (
        <div className="edit">
            <Header title={'글 수정하기'}></Header>
            <Editor curBoardItem={curBoardItem} editOn={editOn} onSubmit={onSubmit}></Editor>
        </div>
    )
}

export default Edit;