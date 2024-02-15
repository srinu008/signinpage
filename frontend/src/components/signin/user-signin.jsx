import "./user-signin.css";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
export const Signin = () => {
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    function validateUser(values) {
        axios({
            method: "get",
            url: "http://127.0.0.1:5000/user",
            data: values
        }).then((res)=>{
            for(var users of res.data){
                if(users.Username===values.Username&&users.Email===values.Email&&users.Password===values.Password){
                    
                    navigate("/SignUp")
                    break;
                }else{
                    
                }
            }

        })
    }
    return (
        <div>
            <div className="form"><br></br><br></br>
                <h2 className="form-group">Sign In</h2>
                <form onSubmit={handleSubmit((values)=>validateUser(values))}>
                <div className="form-group">
                    <label className="label">User Name</label><br></br>
                    <input type="text" {...register("Username", { required: true })} placeholder="User name"></input>
                </div>
                <div className="form-group">
                    <label className="label">Email</label><br></br>
                    <input type="text" {...register("Email", { required: true })} placeholder="Email"></input>
                </div>
                <div className="form-group">
                    <label className="label">Password</label><br></br>
                    <input type="password"{...register("Password", { required: true })} placeholder="Password"></input>
                </div>
                <div>
                    <input type="checkbox" className="checkbox"></input>
                    <span>Forgot password<a href="#">Click Here?</a></span><p></p>
                    <span className="link">Create an Account? <a href="http://localhost:3000/signup">Sign up</a></span>
                </div>
                <div>
                    <input type="submit" value="submit" className="buttonsubmit"></input>
                </div>
                </form>

            </div>
        </div>

    )
}