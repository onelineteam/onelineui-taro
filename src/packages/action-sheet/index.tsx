import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Position from '~/packages/position/index';
 

 
type ActionSheetProps = {
   children?:any,
   mask?: boolean
}

type ActionSheetState = {
   
}

 

export default class ActionSheet extends Component<ActionSheetProps, ActionSheetState>{
  constructor(props) {
    super(props)
    this.state = {
      name: '小红'
    }

  }
  componentWillReceiveProps() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {mask} = this.props;
    return (
      <Position place='b' mask={mask}>
        <View className='ol-bg-c_white ol-m-10 ol-br-5'>
          {this.props.children}
        </View>
      </Position>
    )
  }

}
 