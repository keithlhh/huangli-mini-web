import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'
import Calendar from '../../components/Calendar'
import Taro from '@tarojs/taro'

const TITLE_MAP = {
  0: '万年历',
  1: '星座',
  2: '我的'
}
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    Taro.setNavigationBarTitle({
      title: TITLE_MAP[value]
    })
    this.setState({
      current: value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {
          this.state.current === 0 ? <Calendar /> : null
        }
        <AtTabBar
          fixed
          tabList={[
            { title: '日历', iconType: 'home', text: '' },
            { title: '星座', iconType: 'star' },
            { title: '我的', iconType: 'user', text: '100', max: 99 }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
