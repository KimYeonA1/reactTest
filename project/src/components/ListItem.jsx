import { useNavigate } from 'react-router-dom';
import './ListItem.css'

const ListItem = ({id,title,writer,createdDate})=>{
    const nav = useNavigate();
    return(
        <div className="listItem" onClick={()=>{nav(`/board/${id}`)}}>
                <td width={'750px'}>{title}</td>
                <td width={'200px'}>{writer}</td>
                <td width={'100px'}>{new Date(createdDate).toLocaleDateString()}</td>
            </div>
    )
}

export default ListItem;