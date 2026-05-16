import { useNavigate } from "react-router-dom"
function Navbar(){
    const navigate = useNavigate();
    return(
        <div className="navbar">
            <div className="components">
                <h1>Veyra</h1>
                <h3>Features</h3>
                <h3>About</h3>
                <h3>Github</h3>
                <button className="try-button" onClick={() => navigate("/chat")}>Try Veyra</button>
            </div>
        </div>
    )
}

export default Navbar