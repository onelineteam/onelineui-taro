import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.scss'
import Navigation from '~/packages/navigation';
import Icon from '~/packages/icon';

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  go(type: string) {
    Taro.navigateTo({ url: '/pages/' + type + "/index" })
  }

  render() {
    return (
      <View className='index'>


        <View className='ol-cells__title'>基本组件</View>


        <View className="ol-cells">

          <View className='ol-cell ol-cell__access' onClick={this.go.bind(this, 'icon')}>
            <View className='ol-cell__bd'>ICON</View>
            <View className='ol-cell__ft'></View>
          </View>

          <View className='ol-cell ol-cell__access' onClick={this.go.bind(this, 'navigation')}>
            <View className='ol-cell__bd'>Navigation</View>
            <View className='ol-cell__ft'></View>
          </View>

        </View>

        <View className='ol-cells__title'>Modal</View>
        <View className='ol-cells'>

          <View className='ol-cell ol-cell__access' onClick={this.go.bind(this, 'popover')}>
            <View className='ol-cell__bd'>Popover</View>
            <View className='ol-cell__ft'></View>
          </View>

          <View className='ol-cell ol-cell__access' onClick={this.go.bind(this, 'popup')}>
            <View className='ol-cell__bd'>Popup</View>
            <View className='ol-cell__ft'></View>
          </View>

          <View className='ol-cell ol-cell__access' onClick={this.go.bind(this, 'date')}>
            <View className='ol-cell__bd'>DataPicker</View>
            <View className='ol-cell__ft'></View>
          </View>



        </View>





      </View>
    )
  }
}
