import React , { Component } from 'react';
import { DatePicker , Button , Table , Tag } from 'antd';
import moment from 'moment';
import './loginData.scss';

const { Column } = Table;
const { RangePicker } = DatePicker;


class LoginData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableList: [
        {
          key: '1',
          firstName: 'John',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          firstName: 'Jim',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          firstName: 'Joe',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    }
  }

  onChange = ( date ) => {
    console.log( date , moment );
  }
  render() {
    return(
      <div className="loginData-container">
        <div className="land-box">
          <p className="font-title">
            登录数据
          </p>
          <div className="mork">
           <RangePicker onChange={ this.onChange } />
           <Button type="primary">查询</Button>
           <Button>刷新</Button>
          </div>
        </div>
        <div className="table-content">
          <Table dataSource={ this.state.tableList }>
            <Column title="日期" dataIndex="a" key="time" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <span>
                  {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </span>
              )}
            />
          </Table>
        </div>
      </div>
    )
  }
}

export default LoginData;