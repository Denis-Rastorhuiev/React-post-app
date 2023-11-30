import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyLoaded from "../component/UI/Loader/MyLoaded";

const PostIdPage = () => {
    const params = useParams()
    const [post,setPost] = useState({})
    const [comments,setComments] = useState([])

    const [fetchPostById,isLoadingPost,errorPost] = useFetching(async ()=>{
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })
    const [fetchPostCommentsById,isLoadingPostComments,errorPostComments] = useFetching(async ()=>{
        const response = await PostService.getPostCommentsById(params.id)
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPostById()
        fetchPostCommentsById()
    },[])
    return (
        <div style={{marginLeft: "15%"}}>
            {isLoadingPost
                ? <div>
                    <h1>Loading post...</h1>
                    <MyLoaded/>
                  </div>
                : <div className={"post-opened"}>
                    <h1>Post number: {post.id}</h1>
                        <div style={{fontWeight:"bold"}}>{post.title}</div>
                        <div>{post.body}</div>
                    <hr style={{marginTop:20,marginBottom:20}}/>
                    <h2>Comments</h2>
                    {comments.map((comment)=>
                        <div key={comment.id} style={{marginBottom:20}}>
                            <div style={{fontWeight:"bold"}}>{comment.name}</div>
                            <div>{comment.body}</div>
                        </div>
                    )
                    }
                  </div>
            }

        </div>
    );
};

export default PostIdPage;