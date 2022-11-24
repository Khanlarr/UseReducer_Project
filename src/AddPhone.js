import { MainContext,useContext } from "./Context";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
const AddPhone = () => {
    const {dispatch,ACTIONS}=useContext(MainContext);
    const [image,setImg]=useState(null);
    const [name,setName]=useState(null);
    const [price,setPrice]=useState(null);
    const [count,setCount]=useState(null);
    const navigate = useNavigate();
    const onCLickHandle = (e) => { 
          let k=0;
          const a=JSON.parse(localStorage.getItem("database"));
          let database;
          if(localStorage.getItem("database")===null){
               database=[];
           }
           else{
            database=JSON.parse(localStorage.getItem("database"));
          }
          if(a!==null){
            a.forEach(e => {
                if(name!==e.name)k++; 
            });
          }
        if(k==a.length){
            dispatch({type:ACTIONS.ADD,payload:{img:image,name:name,price:price,count:count}})
            database.push({id:Math.random(),img:image,name:name,price:price,count:count});
            localStorage.setItem("database",JSON.stringify(database));
        }
    }
    return ( 
        <div className="add_phone">
            <form action="" onSubmit={()=>navigate("/home")}>
                <label htmlFor="img">Img_Url:</label>
                <input type="text" id="img" onChange={(e)=> setImg(e.target.value)}/>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" onChange={(e)=>setPrice(parseFloat(e.target.value))}/>

                <label htmlFor="count">Count:</label>
                <input type="number" id="count" onChange={(e)=>setCount(parseInt(e.target.value))}/>
                <div className="buttons">
                      {(image!=null&&name!=null&&price!=null&&count!=null)&&
                     <button type="submit" onClick={onCLickHandle}>Add</button>
                     }
                <button className="home" onClick={()=>navigate("/home")}>Home</button>
                </div>
                </form>
        </div>
     );
}
 
export default AddPhone;