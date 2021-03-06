import React,{useEffect} from "react";
import './login.css'

const Login = () => {
    const togglepass = (event) => {
        event.target.classList.toggle('bi-eye')
        let input = event.target.parentElement.nextSibling;
        if(input.type=='password'){
            input.type='text';
        }
        else{
            input.type='password';
        }
    }
    useEffect( () => {
        document.getElementsByClassName('login-box')[0].style.transform='scale(1)';
        document.getElementsByClassName('login-box')[0].style.outline='3px solid white';
    })
    return(
        <div className="login-cont">
            <div className="login-box p-4" id="log-box">
                <h3>Login</h3>
                <div className="input-box mt-4">
                    <label for="email">Email</label>
                    <input id='email' type="email"/>
                </div>
                <div className="input-box mt-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <label>Password</label>
                        <i className="bi bi-eye-slash fs-4" onClick={togglepass}></i>
                    </div>
                    <input type="password"/>
                </div>
                <button for="log-box" className="btn btn-light border-success mt-5 w-100">Login</button>
            </div>
        </div>
    )
}
export default Login;





                // <form method="post">
                //     <div className="txt_field">
                //         <input type="number" required />
                //         <span></span>
                //         <label>OTP</label>
                //     </div>
                //     <div className="pass">Resend OTP</div>
                //     <input type="submit" value="Submit" />
                // </form>

                // <form method="post">
                //     <div className="txt_field">
                //         <input type="password" required />
                //         <span></span>
                //         <label>new password</label>
                //     </div>
                //     <div className="txt_field">
                //         <input type="password" required />
                //         <span></span>
                //         <label>Confirm password</label>
                //     </div>
                //     <input type="submit" value="Submit" />