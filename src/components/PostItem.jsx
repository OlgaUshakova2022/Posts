
import React from 'react'
import MyButton from './UI/button/MyButton';
import  {useNavigate, useParams} from "react-router-dom";

function PostItem(props) {

  const { id } = useParams();
  

  const router = useNavigate();
  console.log('router',router);
  const handleClick = () => {
    const path = `/posts/${id}`;
    router(path);
    console.log(router);
  };
  return (
    <div className="post">
        <div className="post__content">
        <strong>{props.number} {props.post.title}</strong>
        <div>{props.post.body}</div>
        <div style={{fontWeight: 'bold'}}> id {props.post.id}</div>
        </div>
        <div className='post__btn'>
            <MyButton onClick={handleClick}>Открыть</MyButton>
            <MyButton onClick = {()=>props.remove(props.post)}>Удалить</MyButton>    
        </div>
    </div>
  )
}





export default PostItem;