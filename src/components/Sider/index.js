import React from 'react';
import './sider.scss';
import { Layout , Menu , Icon } from 'antd';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
const { Sider } = Layout;
const { SubMenu } = Menu;

@withRouter
@inject(['golbal'])
@observer
class SiderBox extends React.Component{
  render() {
    const { collped } = this.props.golbal;
    return(
        <Sider trigger={null} collapsible collapsed={ collped }>
        <div className="logo-img">
          <img src="/static/paper-plane.png" alt=""/>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={ () => { this.props.history.push('/') } }>
            <Icon type="user" />
            <span >核心数据</span>
          </Menu.Item>
          <SubMenu
            key="5"
            title={
              <span>
                <Icon type="bar-chart" />
                <span>每日数据</span>
              </span>
            }
          >
            <Menu.Item key="6" onClick={ () => { this.props.history.push('/logindata') } }>
              <Icon type="snippets" />
              <span>登录数据</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="snippets" />
              <span>财务数据</span>
              </Menu.Item>
          </SubMenu>
          <SubMenu
            key="8"
            title={
              <span>
                <Icon type="fire" />
                <span>实时数据</span>
              </span>
            }
          >
            <Menu.Item key="9">
              <Icon type="snippets" />
              人工列表
            </Menu.Item>

          </SubMenu>
          <SubMenu
            key="2"
            title={
              <span>
                <Icon type="contacts" />
                <span>用户数据</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Icon type="snippets" />
              用户库
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="snippets" />
              LoL数据
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}
export default SiderBox;