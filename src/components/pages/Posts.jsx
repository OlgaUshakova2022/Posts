import React, { useEffect, useMemo, useState } from "react";
import '../../styles/style.css';
import PostItem from "../PostItem";
import PostList from "../PostList";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/button/input/MyInput";
import PostForm from "../PostForm";
import MySelect from "../UI/select/MySelect";
import PostFilter from "../PostFilter";
import MyModal from "../MyModal/MyModal";
import { usePosts } from "../../hocks/usePosts";
import axios from "axios";
import PostService from "../../styles/API/PostService";
import Loader from "../UI/Loader/Loader";
import { useFetching } from "../../hocks/useFetching";
import { getPageCount, getPagesArrey } from "../../utils/Pages";



function Posts() {

const [posts, setPosts] = useState([
  // {id:1, title:'AAAAA', body: 'discription'},
  // {id:2, title:'VVVVV', body: 'discription'},
  // {id:3, title:'SSSSS', body: 'discription'},
 
])


const createPost=(newPost)=>{
  setPosts([...posts, newPost])
  setModal(false)
}




const removePost = (post)=>{
  // const filteredPosts = ()=>posts.filter((p)=> p.id !== post.id)
  setPosts(posts.filter((p)=> p.id !== post.id))
  // setPosts(filteredPosts())
}


   
const [filter, setfilter]=useState({sort:'', query:''})

const [modal, setModal] = useState(false);

const [totalPages, setTotalPages]=useState(0);

const [limit, setLimit]=useState(6);
const [page, setPage]=useState(1);
let pagesArray= getPagesArrey(totalPages);

const [fetchPosts, isPostsLoading, postError] = useFetching( async ()=>{
  const response = await PostService.getAll(limit, page); 
  setPosts(response.data);
   const totalCount=(response.headers['x-total-count']);
  setTotalPages(getPageCount(totalCount, limit))
  console.log(totalPages);
 
})
useEffect(()=>{
  fetchPosts()
},[page])

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  return (
    <div className="App">
      {/* <MyButton onClick={fetchPosts}>Получить пост</MyButton> */}
     <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>Coздать пост</MyButton>
      <MyModal 
            visibel={modal}
            setVisibel={setModal}> 
            <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin:'15px'}}/>
      <PostFilter 
          filter={filter}
          setFilter={setfilter}/>
      { postError &&
      <h1>Произошла ошибка ${postError}</h1>

       }
      {
        isPostsLoading
        ? <div style={{display: 'flex',  justifyContent: 'center', marginTop: 50}}><Loader/></div>
        :<PostList remove={removePost} posts = {sortedAndSearchedPosts} title= 'Список постов 1'/> 
      }
      <div style={{marginTop: 30, marginLeft: 25}}>
        {
      pagesArray.map(p=>
        <span key={p} onClick={()=>setPage(p)} className={page===p?'page__current':'page'}>{p}</span>
         )
      }
      </div>
      
     </div>
  );
}

export default Posts;
