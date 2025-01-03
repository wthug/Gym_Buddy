import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Sign = () => {
    const [loginEmail,setLoginEmail]=useState('');
    const [logPass,setLogPass] = useState('');
    const [err1,setErr1] = useState('');

    const [signupEmail,setSignupEmail] = useState('');
    const [signPass,setSignPass] = useState('');
    const [name,setName]= useState('');

    let nevigate = useNavigate();
    const handleSignUp = async(e) => {
        e.preventDefault()
        const email=signupEmail
        const password=signPass
        const newUser= {name,email,password}
        const response = await fetch('/api/workouts/signup',{
            method: 'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type':'application/json'
            }
        }) 
        const json =await response.json()
        if(!response.ok){
            console.log(json.error)
            setErr1(json.error)
        }
        if(response.ok){
            setErr1('')
            console.log("new workout added successfully",json)
            setSignPass('')
            setSignupEmail('')
            setName('')
            localStorage.setItem('authToken',json.authToken);
            localStorage.setItem('authEmail',email);
            nevigate('/')
        }

    }

    // for logging in
    const handleLogIn = async(e) => {
        e.preventDefault()
        const email=loginEmail
        const password=logPass
        const oldUser = {email,password}
        const response = await fetch('/api/workouts/login',{
            method: 'POST',
            body: JSON.stringify(oldUser),
            headers:{
                'Content-Type':'application/json'
            }
        }) 
        const json =await response.json()
        if(!response.ok){
            setErr1(json.error)
            console.log(json.error)
        }
        else{
            setLogPass('')
            setLoginEmail('')
            setErr1('')
            localStorage.setItem('authToken',json.authToken);
            localStorage.setItem('authEmail',email);
            console.log("user login successfully ",json)
            nevigate('/')
        }

    }

    return(
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true"/>

            <div class="signup">
                <form onSubmit={handleSignUp}>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text"  placeholder="User name" value={name}  onChange={(e)=>(setName(e.target.value))}/>
                    <input type="text"  placeholder="Email" value={signupEmail} onChange={(e)=>(setSignupEmail(e.target.value))}/>
                    <input type="password"  placeholder="Password" value={signPass} onChange={(e)=>(setSignPass(e.target.value))}/>
                    <button>Sign up</button>
                </form>
            </div>

            <div class="login">
                <form onSubmit={handleLogIn}>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="text"  placeholder="Email" value={loginEmail} onChange={(e)=>(setLoginEmail(e.target.value))}/>
                    <input type="password"  placeholder="Password" value={logPass} onChange={(e)=>(setLogPass(e.target.value))}/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    ) 	
        
}

export default Sign;