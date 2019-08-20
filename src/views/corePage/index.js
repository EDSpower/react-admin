import React from 'react';
import { DatePicker } from 'antd';
import "./core.scss";
// import { loginApi } from "@/service/allApi";


class one extends React.Component{
  async componentDidMount() {
    // const res = await loginApi();
  }
  onChange = ( date ) => {
  }
  render(h) {
    return (
      <div className="core-container">
        <div className="top">
          <p className="box-title font-title">
            核心指标
          </p>
          <ul>
            <li>
              <div className="li-left">
                <span>核心指标</span>
                <p>￥324235</p>
              </div>
              <img src="/static/icon1.png" alt=""/>
            </li>
            <li>
              <div className="li-left">
                <span>核心指标</span>
                <p>￥324235</p>
              </div>
              <img src="/static/moneys.png" alt=""/>
            </li>
            <li>
              <div className="li-left">
                <span>核心指标</span>
                <p>60%Component</p>
              </div>
              <img src="/static/icon3.png" alt=""/>
            </li>
            <li>
              <div className="li-left">
                <span>核心指标</span>
                <p>￥324235</p>
              </div>
              <img src="/static/icon4.png" alt=""/>
            </li>
            <li>
              <div className="li-left">
                <span>核心指标</span>
                <p>￥324235</p>
              </div>
              <img src="/static/icon4.png" alt=""/>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="box-title">
            <span className="title font-title">核心指标</span>
            <DatePicker onChange={ this.onChange }/>
          </div>
          <ul>
            <li>
              <p>核心指标</p>
            </li>
            <li>
              <p>核心指标</p>
            </li>
            <li>
              <p>核心指标</p>
            </li>
            <li>
              <p>核心指标</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default one;