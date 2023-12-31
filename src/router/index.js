import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path:"/posts",component: Posts},
    {path:"/about",component: About},
    {path:"/posts/:id",component: PostIdPage}
]

export const publicRoutes = [
    {path:"/login",component: Login}
]