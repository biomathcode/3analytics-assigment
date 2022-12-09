import { useState, Component} from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import  {UserProvider} from './context/UserContext';
import PostList from './Components/PostList';
import PostView from './Components/PostView';
import Navbar from './Components/Navbar';
import Comments from './Components/Comments';
import Private from './auth/Private';
import Login from './auth/Login';


function App() {
  // const user = { username: '', isLoggedIn: false } 
  const [user, setUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleLogin = (state:boolean) => {
    setLoggedIn(state);
  }
  const changeUser = (username: string, isLoggedIn: boolean) => {
    setUser({
      username, 
      isLoggedIn
    })
  }

  return (

    <UserProvider value={{user: user, isLoggedIn: isLoggedIn, setUser: changeUser,toggleLogin: toggleLogin }}>
       <BrowserRouter>
      <Navbar/>

    <Routes>
      <Route element={<Private />}>
      <Route path="/" element={ <PostList/>  } />
      <Route path="post/:id" element={<Post/>} />

      </Route>

      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>


    </UserProvider>
   
  )
}



const Post = () => {
  const {id} = useParams();
  return (
    <div>
      {
        id && (<>
        <PostView id={id} />
        <Comments postId={id} />
        </>
        )
      }
      
      
    </div>
  )
}

export default App
