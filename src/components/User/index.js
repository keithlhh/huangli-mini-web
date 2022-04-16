import React from 'react'
import { AtAvatar } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'
const User = () => {
    return (
        <View className='userContainer'>
            <View className='header'>
                <AtAvatar size='large' className='avatar' circle image='https://jdc.jd.com/img/200'></AtAvatar>
                <View className='userName'>微信用户</View>
            </View>
            <View className='listWrapper'>
                <AtList>
                    <AtListItem
                        hasBorder={false}
                        title='添加到我的小程序'
                        arrow='right'
                        iconInfo={{ size: 25, color: '#78A4FA', value: 'add-circle', }}
                    />
                    <AtListItem
                        hasBorder={false}
                        title='推荐给好友'
                        note='描述信息'
                        arrow='right'
                        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                    />
                    <AtListItem
                        hasBorder={false}
                        title='意见反馈'
                        note='描述信息'
                        extraText='详细信息'
                        arrow='right'
                        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                    />
                    <AtListItem
                        hasBorder={false}
                        title='标题文字'
                        note='描述信息'
                        extraText='详细信息'
                        arrow='right'
                        iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
                    />
                </AtList>
            </View>
        </View>
    )
}

export default User;