import './App.css';
import { useState,useReducer, useEffect } from 'react';
import Navbar from './Navbar'
import {MainContext} from './Context'
import Home from './Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddPhone from './AddPhone';

const ACTIONS={
  INCREASE:'increase',
  DECREASE:'decrease',
  REMOVE:'remove',
  CLEAR:'clear',
  ADD:'add'
}
const reducer=(object,action)=>{
switch(action.type){
  case ACTIONS.INCREASE:
    return object.map((obj)=>{
      if(obj.id===action.payload.id){
        return {...obj,count:obj.count+1}
      }
      return obj;
    })
    case ACTIONS.DECREASE:
    return object.map((obj)=>{
      if(obj.id===action.payload.id){
         return {...obj,count:obj.count-1}
      }
      return obj;
    })
    case ACTIONS.REMOVE:
     return object.filter((obj)=>obj.id!==action.payload.id)
     case ACTIONS.CLEAR:
    return object.filter((obj)=>!obj.id)
    case ACTIONS.ADD:
      return [...object,newObject(action.payload.img,action.payload.name,action.payload.price,action.payload.count)]
}
}
const newObject=(image,name,price,count)=>{
  return {id:Date.now(),phone_img:image,name:name,price:price,count:count}
}
function App() {
  const [object,dispatch]=useReducer(reducer,JSON.parse(localStorage.getItem("database")));
 
  const [counts,setCount]=useState(0);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setCount(0)
    setTotal(0)
      object&&object.map((obj)=>{
        setCount(prev=>prev+obj.count);
        setTotal(prev=>prev+(obj.price*obj.count))
      })
      localStorage.setItem("database",JSON.stringify(object));
  },[object])
  const data={
    object,
    dispatch,
    counts,
    setCount,
    ACTIONS,
    total
  }
  return (
  <Router>
    <MainContext.Provider value={data}>
     <Navbar/>
     <Routes>
      <Route path='/' element={<AddPhone/>}/>
      <Route path='/home' element={ <Home/>}/>
     </Routes>
    </MainContext.Provider>
   </Router>
  );
}
export default App;
