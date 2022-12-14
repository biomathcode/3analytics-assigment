import React, { ChangeEvent, FormEvent, ReactPropTypes} from "react";
import { Navigate } from "react-router-dom";
import UserContext, { UserConsumer } from "../context/UserContext";


type stateType = {
    username: string;
    password: string;
}

type setUser =  (username:string, isLoggedIn: boolean) => void;
type toggleLogin =  ( state: boolean) => void;


class Login extends React.Component {
    state = {
        username: '', 
        password: '', 
        error: '', 
    }
  
    handleChange(event: ChangeEvent<HTMLInputElement>) {
      console.log(event, event.target.name, event.target.value);
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event: FormEvent, setUser:setUser, toggleLogin:toggleLogin ) {
      // save auth info in the a userContext;
      //username: admin, password: admin@123
      if(this.state.username === 'admin' && this.state.password === 'admin@123') {
        setUser(this.state.username, true)
        toggleLogin(true);
        
      } else {
        this.setState({error: "Please write correct username and Password"})
      }


      event.preventDefault();
      
    }
  
    render() {
      return (
        
        <div className="mt-40 w-100 h-100 flex center col jc">
          <ul>
            <li>Username: admin</li>
            <li>Password: admin@123</li>

          </ul>
        {this.state.error && <p>{this.state.error}</p>}


        <UserContext.Consumer>
          {({ isLoggedIn, user, setUser, toggleLogin }) => (
            <>
            {isLoggedIn && <Navigate to="/"/>}
          <form className="flex col center gap-10" onSubmit={(e) => this.handleSubmit(e, setUser, toggleLogin)}>
          <label className="flex gap-20">
            Username
            <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
          </label>
          <label className="flex gap-20">
            Password
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />

          </label>
          <input type="submit" value="Submit" />
        </form>
        </>
           )}
        </UserContext.Consumer>
        </div>
      );
    }
  }
export default Login;