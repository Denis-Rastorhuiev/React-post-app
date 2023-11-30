import {useMemo} from "react";

export const useSortPost = (posts , sort) =>{
    const sortedPosts= useMemo(()=>{
        if(sort){
            return [...posts].sort((a,b)=>
                a[sort].localeCompare(b[sort]))
        }
        return posts
    },[sort,posts])

    return sortedPosts;
}

export const useSortedAndSearchPost = (posts,sort,query)=>{
    const sortedPosts = useSortPost(posts,sort)
    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    },[query,sortedPosts])
    return sortedAndSearchedPosts;
}