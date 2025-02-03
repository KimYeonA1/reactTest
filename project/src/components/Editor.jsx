import './Editor.css'
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Editor = ({ onSubmit, curBoardItem, editOn }) => {
    const nav = useNavigate();
    const [input, setInput] = useState({
        title: '',
        content: '',
        writer: '',
    });

    const [images, setImages] = useState([]); // 🖼️ 선택된 이미지 파일 저장
    const [previewUrls, setPreviewUrls] = useState([]); // 🖼️ 이미지 미리보기 URL 저장

    // 🔹 수정 모드일 때 기존 데이터 불러오기
    useEffect(() => {
        if (editOn && curBoardItem) {
            setInput({
                title: curBoardItem.title,
                content: curBoardItem.content,
                writer: curBoardItem.writer,
            });
            if (curBoardItem.imageUrls) {
                setPreviewUrls(curBoardItem.imageUrls);
            }
        }
    }, [editOn, curBoardItem]);

    // 🔹 입력 값 변경
    const onChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    // 🖼️ 파일 선택 시 실행 (미리보기 + 파일 저장)
    const onFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        // 이미지 미리보기 URL 생성
        const urls = files.map((file) => URL.createObjectURL(file));
        setPreviewUrls(urls);
    };

    // 🔹 등록 버튼 클릭 시 실행
    const onClickSubmit = () => {
        onSubmit(input, images);
    };

    return (
        <div className="editor">
            <div className="input">
                <input type="text" name="writer" placeholder="작성자" onChange={onChangeInput} value={input.writer} />
                <input type="text" name="title" placeholder="제목" onChange={onChangeInput} value={input.title} />
                <textarea name="content" placeholder="내용" rows={10} onChange={onChangeInput} value={input.content} />

                {/* 🖼️ 파일 업로드 (여러 개 가능) */}
                <input type="file" multiple accept="image/*" onChange={onFileChange} />

                {/* 🖼️ 이미지 미리보기 */}
                <div className="image-preview">
                    {previewUrls.map((url, index) => (
                        <img key={index} src={url} alt={`미리보기 ${index}`} style={{ width: "100px", margin: "5px" }} />
                    ))}
                </div>

                <div className="button">
                    <Button text={'취소하기'} onClick={() => nav(-1)} />
                    <Button text={'등록하기'} onClick={onClickSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Editor;
