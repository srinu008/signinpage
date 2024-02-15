import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { Signup } from "./components/signup/user-signup";
// import { Signin } from "./components/signin/user-signin";
// import { Menu } from "./components/menu/menu.components";
import { AppRouter } from "./appRouter";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Signup></Signup>
        <Signin></Signin> */}
        {/* <Menu></Menu> */}
       
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  )
}

export default App;