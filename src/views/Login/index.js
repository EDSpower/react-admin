import React from 'react';
import './login.scss';
import From from "./From";

class LoginBox extends React.Component{
  render() {
    return (
      <div className="login-container">
        <div className="login-warp">
          <div className="title">
            <p>后台管理系统</p>
          </div>
         <From/>
        </div>
      </div>
    )
  }
}

export default LoginBox;