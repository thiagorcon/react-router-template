import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import ErroPage from "../pages/ErroPage";

const Router = () =>{     

     return(
          <BrowserRouter>
          <Routes>
               <Route index element={<HomePage/>}/>
               <Route path="/profile/:name" element={<ProfilePage/>}/>
               <Route path="*" element={<ErroPage/>}/>
          </Routes>
          </BrowserRouter>     
     )
}

export default Router;