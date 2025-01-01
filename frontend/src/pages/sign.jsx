import { useState } from "react"

const Sign = () => {
    const [loginEmail,setLoginEmail]=useState('');
    const [logPass,setLogPass] = useState('');

    const [signupEmail,setSignupEmail] = useState('');
    const [signPass,setSignPass] = useState('');
    const [name,setName]= useState('');

    const handleSignUp = (e) => {
        e.preventDefault()

    }

    const handleLogIn = (e) => {
        e.preventDefault()

    }

    return(
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true"/>

            <div class="signup">
                <form onSubmit={handleSignUp}>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" value={name}  onChange={(e)=>(setName(e.target.value))}/>
                    <input type="email" name="email" placeholder="Email" value={signupEmail} onChange={(e)=>(setSignupEmail(e.target.value))}/>
                    <input type="password" name="pswd" placeholder="Password" value={signPass} onChange={(e)=>(setSignPass(e.target.value))}/>
                    <button>Sign up</button>
                </form>
            </div>

            <div class="login">
                <form onSubmit={handleLogIn}>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" value={loginEmail} onChange={(e)=>(setLoginEmail(e.target.value))}/>
                    <input type="password" name="pswd" placeholder="Password" value={logPass} onChange={(e)=>(setLogPass(e.target.value))}/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    ) 	
        
}

export default Sign