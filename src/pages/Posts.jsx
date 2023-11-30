import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import "../styles/App.css";
import {useSortedAndSearchPost} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import MyButton from "../component/UI/button/MyButton";
import MyModal from "../component/UI/MyModal/MyModal";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import PostsList from "../component/PostsList";
import MyLoaded from "../component/UI/Loader/MyLoaded";
import Pagination from "../component/UI/Pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../component/UI/select/MySelect";
import CreatePostBtn from "../img/CreatePostBtn.png"
import profileBtn from "../img/PrifileImg.svg"
import {AuthContext} from "../context";


function Posts() {
    const [posts,setPosts] = useState([]);
    const [filter,setFilter] = useState({sort:'',query:''})
    const [modal,setModal] = useState(false)
    const [totalPages,setTotalPages] = useState(0)
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(10)
    const lastElement = useRef();
    const {isAuth,setIsAuth} = useContext(AuthContext)

    const sortedAndSearchedPosts = useSortedAndSearchPost(posts,filter.sort,filter.query)

    const [fetchPosts,isPostsLoading,postsError] = useFetching( async ()=>{
        const response = await PostService.getAll(limit,page)
        setPosts([...posts,...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount,limit))
    })



    function addPost(newPost){
        setPosts([...posts, newPost])
        setModal(false)
    }

    function deletePost(post){
        setPosts(posts.filter(e => e.id !== post.id))
    }

    function changePage(p){
        setPage(p)
    }

    const logOut = () =>{
        setIsAuth(false)
        localStorage.removeItem("auth")
    }

    useObserver(lastElement, page < totalPages, isPostsLoading,()=>{
        setPage(page + 1)
    })

    useEffect(()=>{
        fetchPosts(limit,page)
    },[page,limit])

    return (
        <div className="App">
            {/*<MyButton*/}
            {/*    style={{marginTop:'30px',marginBottom:'30px',marginRight:'30px'}}*/}
            {/*    className={"addBtn"}*/}
            {/*    onClick={fetchPosts}*/}
            {/*>*/}
            {/*    Get Posts*/}
            {/*</MyButton>*/}
            <div className={"topnav"}>

                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm
                        createF={addPost}
                        countPosts={totalPages*limit}
                    />
                </MyModal>

                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                    limit={limit}
                    setLimit={setLimit}
                />

                <div className={"topnav_btns"}>
                    <MyButton
                        style={{marginTop:'30px',marginBottom:'30px'}}
                        className={"addBtnMain"}
                        onClick={e=> setModal(true)}
                    >
                        <img draggable="false" className={"addBtnMain_img"} alt={"createPost"} src={CreatePostBtn}/>
                    </MyButton>
                    <MyButton className={"addBtnMain"}  onClick={logOut}>
                        <img className={"profileImg"} draggable="false" alt={"profileImg"} src={profileBtn}/>
                    </MyButton>
                </div>
            </div>


            {postsError &&
                <h1  style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>Error loading posts</h1>
            }
            <PostsList
                posts={sortedAndSearchedPosts}
                deleteF={deletePost}
            />
            <div ref={lastElement}></div>
            {isPostsLoading &&
                 <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}><MyLoaded/></div>
            }

            {/*<Pagination*/}
            {/*    totalPages={totalPages}*/}
            {/*    page={page}*/}
            {/*    changePage={changePage}*/}
            {/*/>*/}

        </div>
    );
}
export default Posts;
