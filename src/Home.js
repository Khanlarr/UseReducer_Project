import { MainContext,useContext } from "./Context";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const {object,dispatch, ACTIONS,total}=useContext(MainContext);
    const navigate=useNavigate();
    return ( 
        <div className="home">
            <div className="header">
                <h1>YOUR BAG</h1>
            </div>
            <div className="list">
                {object&&
                 (
                    object.map((e)=>
                        <div className="param" key={e.id}>
                            <div className="left">
                            <div className="img"><img src={e.phone_img} alt="error" /></div>
                            <div className="source">
                                <h1>{e.name}</h1>
                                <p>${e.price}</p>
                                <button onClick={()=>dispatch({type:ACTIONS.REMOVE,payload:{id:e.id}})}>remove</button>
                            </div>
                            </div>
                            <div className="right">
                                <button onClick={()=>dispatch({type:ACTIONS.INCREASE,payload:{id:e.id}})}><i class="fa-solid fa-chevron-up"></i></button>
                                <p>{e.count}</p>
                                <button  onClick={()=>(e.count>1)?(dispatch({type:ACTIONS.DECREASE,payload:{id:e.id}})):(dispatch({type:ACTIONS.REMOVE,payload:{id:e.id}}))}><i class="fa-solid fa-chevron-down"></i></button>
                            </div>
                        </div>)       
                 )
                }
            </div>
            {
                total?
            <div className="total">
                <h3>Total</h3>
                <p>${total}</p>
            </div>
            :
            <p className="error">is currently empty</p>
            }
            <div className="buttons">
                <button className="added" onClick={()=>navigate('/')}>ADD</button>
                {total?<button className="clear" onClick={()=>dispatch({type:ACTIONS.CLEAR})}>CLEAR CART</button>:""}
            </div>
        </div>
     );
}
 
export default Home;