import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup/user-signup";
import { Signin } from "./components/signin/user-signin"; 

export function AppRouter(){
    return(
        <Routes>
             <Route path="/Signup" element={<Signup></Signup>}></Route>
             <Route path="/Signin" element={<Signin></Signin>}></Route>
        </Routes>
    )
}