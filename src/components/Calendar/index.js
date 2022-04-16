import React from 'react'
import { AtCalendar, AtCard } from "taro-ui"
import { View, Text } from '@tarojs/components'
import './index.scss'
const Calendar = () => {
    return (
        <view>
            <AtCalendar />
            <AtCard
                className='card'
                note=''
                extra=''
                title='农历三月十六 第16周 白羊座'
                thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
                <View className='good'>
                    <Text className='goodIcon'>宜</Text> 沐浴 取鱼 戒网
                </View>
                <View className='bad'>
                    <Text className='badIcon'>讥</Text> 沐浴 取鱼 戒网
                </View>
            </AtCard>
        </view>
    )
}

export default Calendar;