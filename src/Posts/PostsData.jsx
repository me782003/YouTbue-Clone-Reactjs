import React, { useEffect, useEffict } from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from "./api/postsApi";

const TostsData = () => {
  // const [todos, settodos] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  //     settodos(res.data);
  //     console.log(res.data);
  //   };
  //   getData();
  // }, []);

  const dispatch = useDispatch();
  const {todos, loading, error} = useSelector(state => state.todosData);
  console.log(todos)

  useEffect(()=>{
    dispatch(getAllTodos(`https://jsonplaceholder.typicode.com/todos/1200`));
  }, [])
if(error != null){
  return <h1>{error}</h1>
}
  return (
    <div>
      {todos? todos.title: null}
      {
        loading ? <h1>loading...</h1> : (todos?.length >= 1? (
          todos.map((post, index) => {
            return <h6 key={index}>{post.title}</h6>;
          })
        ) : (
          <h6>NO todos</h6>
        ))
      }
    </div>
  );
};

export default TostsData;
