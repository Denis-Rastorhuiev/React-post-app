import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({createF,countPosts}) => {
    const [post,setPost] = useState({title:'',body:''})
    function addPost(event){
        event.preventDefault()
        const newPost ={
            ...post,
            id: countPosts +1
        }
        createF(newPost)
        setPost({title: '',body: ''})
    }
    return (
        <div>
            <form>
                <div className={"addPole"}>
                    <MyInput
                        type="text"
                        placeholder="Title"
                        value={post.title}
                        onChange={(value) => setPost({ ...post, title: value })}
                        className={"addInput"}
                    />
                    <MyInput
                        type="text"
                        placeholder="Content"
                        value={post.body}
                        onChange={(value) => setPost({ ...post, body: value })}
                        className={"addInput"}
                    />
                    <MyButton onClick={addPost} className={"addBtn"}>Add post</MyButton>
                </div>
            </form>
        </div>
    );
};

export default PostForm;