import React from 'react';
import {useNavigate} from 'react-router-dom'
import MyButton from "./UI/button/MyButton";
const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post-content">
                <b>{props.post.id}. {props.post.title}</b>
                <div>{props.post.body}</div>
            </div>
            <div className="post-btn">
                <MyButton style={{marginRight:10}} className="addBtn" onClick={()=> navigate(`${props.post.id}`)}>Open</MyButton>
                <button className="post-btn-del" onClick={()=>props.deleteF(props.post)}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;