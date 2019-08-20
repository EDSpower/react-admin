import React from 'react';
import './header.scss';
import {observer, inject} from 'mobx-react';
import { Layout , Button , Icon , Dropdown , Menu} from 'antd'
import { withRouter } from "react-router-dom";
const { Header } = Layout;
@withRouter
// 观察者
@inject(['golbal'] , ['user']) 
@observer
class HeaderBox extends React.Component {

  logout = () => {
    window.localStorage.removeItem('djb_token');
    this.props.history.push('/login');
  } 

  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={ this.logout }>
          <span >
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    );
    const { name } = this.props.user;
    return (
      <Header>
        <div className="header-content">
          <Button type="primary" ghost 
            icon={this.props.golbal.collped ? 'menu-unfold' : 'menu-fold'}
            onClick={() =>{
              this.props.golbal.changeCollp()
            }}
          />
          <Dropdown overlay={ menu }>
            <div className="userBox">
              <img src="static/gx.jpg" alt=""/>
              <span> { name } </span>
              <Icon type="caret-down" />
            </div>
          </Dropdown>
        </div>
      </Header>
    )
  }
}

export default HeaderBox;