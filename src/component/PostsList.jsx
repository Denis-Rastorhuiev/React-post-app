import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = ({posts,deleteF}) => {

    if(!posts.length){
        return (
            <h1 style={{textAlign:"center"}}>There are no posts here yet :(</h1>
        )
    }

    return (
        <div style={{marginLeft:"20%"}}>
            <h1 style={{margin: "20px 0"}}>Posts:</h1>
            <TransitionGroup>
            {posts.map((post,index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem number={index+1} deleteF={deleteF} post={post} />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostsList;