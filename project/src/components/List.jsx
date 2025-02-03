import ListItem from "./ListItem";
import './List.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from './Button';

const List = ({data})=>{
    const [search, setSearch] = useState('');
    const [sortType, setSortType] = useState("latest");
    const [searchOpt, setsearchOpt] = useState("title");
    
    // 페이징 상태 추가
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 표시할 항목 수
    
    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    }
    
    const onChangeSearchOpt = (e)=>{
        setsearchOpt(e.target.value);
    }

    const getFilterItem = ()=>{
        if(search==='') {
            return data;
        } else if(searchOpt==='title'){
            return data.filter((item)=>{
                return item.title.toLowerCase().includes(search.toLowerCase());
            });
        } else if(searchOpt==='writer'){
            return data.filter((item)=>{
                return item.writer.toLowerCase().includes(search.toLowerCase());
            });
        }
    }

    const filterItem = getFilterItem();
    
    const onChangeSortType = (e)=>{
        setSortType(e.target.value);
    }
   
    const getSortData = ()=>{
        return filterItem.toSorted((a,b)=>{
            if(sortType === "oldest"){
                return Number(a.createdDate)-Number(b.createdDate)
            } else {
                return Number(b.createdDate)-Number(a.createdDate)
            }
        });
    }

    const sortedData = getSortData();
    
    // 현재 페이지에 맞는 데이터만 추출
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 변경 함수
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className="list">
            <div className="listBar">
                <select onChange={onChangeSortType}>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>
                <div>
                    <select onChange={onChangeSearchOpt}>
                        <option value="title">제목</option>
                        <option value="writer">작성자</option>
                    </select>
                    <input type="text" name="search" placeholder="검색" value={search}
                    onChange={onChangeSearch}></input>
                </div>
            </div>
            <div className="listTop">
                <table>
                    <td width={'750px'}>글제목</td>
                    <td width={'200px'}>작성자</td>
                    <td width={'120px'}>작성일</td>
                </table>
            </div>
            <div>
                {currentItems.map((item)=>{
                    return <ListItem key={item.id} {...item}/>;
                })}
            </div>
            
            {/* 페이지 네비게이션 */}
            <div className="pagination">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    이전
                </button>
                {[...Array(Math.ceil(sortedData.length / itemsPerPage))].map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}>
                    다음
                </button>
                

            </div>
        </div>
        
    );
}

export default List;
