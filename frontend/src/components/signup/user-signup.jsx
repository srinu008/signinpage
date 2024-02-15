import "./user-signup.css";
import axios from "axios";
import { useForm } from 'react-hook-form';
export const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    function validateUser(values) {
        console.log(values)
        axios({
            method: "post",
            url: "http://127.0.0.1:5000/customerregister",
            data: values
        })
        alert("data save")
    }
    return (
        <div className="">

            <div className="form"> <br></br><br></br>
                <h2 className="form-group">Sign Up</h2>
                <form onSubmit={handleSubmit((values) => validateUser((values)))}>
                    <div className="form-group">
                        <label>Full Name</label> <br></br>
                        <input type="text"  {...register("Fullname", { required: true })} placeholder="Full name"></input>
                        {errors.Fullname && <div className="text-danger">Full Name must be required</div>}
                    </div>
                    <div className="form-group">
                        <label>User Name</label><br></br>
                        <input type="text number" {...register("Username", { required: true })} placeholder="User name"></input>
                        {errors.Username && <div className="text-danger">User uame must be required</div>}
                    </div>
                    <div className="form-group">
                        <label>Email</label> <br></br>
                        <input type="text"  {...register("Email", { required: true })} placeholder="Enter Email"></input>
                        {errors.Email && <div className="text-danger">Email must be required</div>}
                    </div>
                    <div className="form-group">
                        <label>Password</label> <br></br>
                        <input type="password"  {...register("Password", { required: true })} placeholder="Enter password"></input>
                        {errors.password && <div className="text-danger"> password must be required</div>}
                    </div>
                    <div className="form-group">
                        <label>Conform Password</label> <br></br>
                        <input type="password"{...register("Conform password", { required: true })} placeholder='Conform password'></input>
                        {errors.Conformpassword && <div className="text-danger"> password must be required</div>}
                    </div> <br></br>
                    <input type="checkbox" className="checkbox"></input>
                    <span>Already do you have an Account? <a href="http://localhost:3000/Signin">Sign In</a></span>
                    <div>
                        <input type="submit" value="Submit" className="buttonsubmit"></input>
                    </div>
                </form>
            </div>

        </div>
    )
}

