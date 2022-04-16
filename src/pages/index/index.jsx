import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'
import Taro from '@tarojs/taro'
import Calendar from '../../components/Calendar'
import User from '../../components/User'

const TITLE_MAP = {
  0: '万年历',
  1: '星座',
  // 2: '塔罗牌',
  2: '我的'
}
export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick(value) {
    Taro.setNavigationBarTitle({
      title: TITLE_MAP[value]
    })
    Taro.setNavigationBarColor({
      frontColor: value === 2 ? '#ffffff' : '#000000',
      backgroundColor: value === 2 ? '#E93B3D' : '#ffffff',
      animation: {
        duration: 200,
        timingFunc: 'easeIn'
      }
    })
    this.setState({
      current: value
    })
  }

  componentWillMount() { }

  componentDidMount() {
    console.log(Taro.getApp(), '99999999')
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        {
          this.state.current === 0 ? <Calendar /> : null
        }
        {
          this.state.current === 2 ? <User /> : null
        }
        <AtTabBar
          fixed
          tabList={[
            { title: '日历', iconType: 'home', text: '' },
            { title: '星座', iconType: 'star' },
            // { title: '塔罗牌', iconType: 'star' },
            { title: '我的', iconType: 'user', text: '100', max: 99 }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
