import React from "react";
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
    return(
        <div className="login-cont">
            <div className="login-box p-4">
                <h4>Login</h4>
                <div className="email mt-4">
                    <div className="input-box">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="input-box mt-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <label>Password</label>
                            <i className="bi bi-eye-slash fs-4" onClick={togglepass}></i>
                        </div>
                        <input type="password"/>
                    </div>
                    <button className="btn btn-light border-success mt-5">Login</button>
                </div>
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