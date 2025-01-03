import { Link ,useNavigate} from "react-router-dom";

const Navbar = () =>{
    let navigate = useNavigate()
    const handleLogout = async()=>{
        localStorage.removeItem('authToken')
        localStorage.removeItem('authEmail')
        navigate('/sign')
    }
    return <>
        <header>
            <div className="container"> 
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
        <button onClick={handleLogout}>Log Out</button>
    </>
}

export default Navbar