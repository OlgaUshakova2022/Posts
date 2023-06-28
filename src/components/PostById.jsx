import React from 'react'
import { useParams } from 'react-router-dom'

function PostById() {
    const params= useParams();
    console.log('params ', params);
  return (
    <div>Пост</div>
  )
}

export default PostById