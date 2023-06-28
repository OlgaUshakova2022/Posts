import React from 'react'
import MyInput from './UI/button/input/MyInput';
import MySelect from './UI/select/MySelect';

function PostFilter({filter, setFilter}) {
  return (
    <div>
    <MyInput 
  value={filter.query}
  onChange={(e)=>setFilter({...filter, query: e.target.value})}
  type="text" 
  placeholder="Поиск..."/>
  
    <MySelect
    value={filter.sort}
    onChange={ s => setFilter({...filter, sort: s})}
      defaultValue='Cортировка'
      options={[
        {value:'title', name:'По названию'},
        {value:'body', name:'По описанию'}
        ]}/>
  </div>
  )
}

export default PostFilter;