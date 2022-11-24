import { MainContext,useContext } from "./Context";
const Navbar = () => {
    const {counts}=useContext(MainContext);
    return ( 
        <nav className="navbar">
            <div className="logo">
                <h1>UseReducer</h1>
            </div>
            <div className="basket">
                <p><i class="fa-solid fa-bag-shopping"></i></p>
                <div>{counts}</div>
                </div>
        </nav>
     );
}
 
export default Navbar;