import './BoardView.css'
import Button from './Button';
import { getStringedDate } from "../util/get-stringed-date";
import { replace, useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BoardDispatchContext } from '../App';

const BoardView = ({curBoardItem})=>{
    const params = useParams();
    const nav = useNavigate();
    const {onDelete} = useContext(BoardDispatchContext);

    const onClickDelete = ()=>{
        if(window.confirm("정말 삭제하시겠습니까?")){
            onDelete(params.id);
            nav('/',{replace:true})
        }
    }
    
    return(
        <div className='boardView'>
            <div className='table'>
                <table>
                    <tr height='60px'>
                        <td colSpan={2}><strong>{curBoardItem.title}</strong></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{curBoardItem.content}</td>
                    </tr>
                    <tr height='80px'>
                        <td>작성자 : {curBoardItem.writer}</td>
                        <td>작성일 : {getStringedDate(new Date(curBoardItem.createdDate))}</td>
                    </tr>
                </table>
            </div>
            <div className='button'>
                <Button text={'글 수정하기'} onClick={()=>{nav(`/edit/${curBoardItem.id}`)}}/>
                <Button text={'글 삭제하기'} onClick={onClickDelete}/>
            </div>
        </div>
    )
}

export default BoardView;