import React from 'react';
import { Provider } from "mobx-react";
import store from './store';
import zhCN from 'antd/es/locale/zh_CN';
import './App.scss';
import SelfSider from './components/Sider/index';
import SelfHeader from './components/Header/index';
import SelfContent from './components/Content';
import { Layout , ConfigProvider } from 'antd';
const { Content } = Layout;

// 观察者
class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="App">
        <Provider  {...store}>
          <ConfigProvider locale={zhCN}>
          <Layout>
            <SelfSider collapsed={ this.state.collapsed }/>
              <Layout>
                <SelfHeader collapsed={ this.state.collapsed } toggle={ this.toggle } />
                <Content
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                  }}
                >
                  <SelfContent/>
                </Content>
              </Layout>
            </Layout>
          </ConfigProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
