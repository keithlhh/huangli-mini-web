import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Calendar from '../../components/Calendar'
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Calendar /> 
      </View>
    )
  }
}
