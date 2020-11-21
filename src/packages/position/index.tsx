import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';
// import { findPageNode } from '~/utils';
import { PositionProps } from 'types/position';





type PositionState = {
  _id: string
}





export default class Position extends Component<PositionProps, PositionState> {
 
 
  state: PositionState = {
   
    _id: 'id' + Date.now()
  }



  componentDidUpdate() {

    if (this.props.visible) {

      Taro.nextTick(() => {
        const query = Taro.createSelectorQuery();
        console.log(this.state._id)
        query.select(`#${this.state._id}`).boundingClientRect(rect => {
          this.props.onRect && this.props.onRect(rect);
        }).exec();

      })

    }  
  }




  hide() { 
    this.props.onClose && this.props.onClose();
  }

  render() {
    // console.log(this.scrollY)
    const { place, mask, contentStyle, animate, visible } = this.props;
    const { _id } = this.state;
    const contentClassName = ['ol-layer', 'animated', 'ol-pos-rt'];
    place && contentClassName.push('ol-layer__' + (place || 'c'));

    const maskClassName = ['ol-layer  ol-layer__f ol-taro-position__overlayer ol-bg-c_dark']
    if (mask) {
      maskClassName.push('ol-oc-6')
    } else {
      maskClassName.push('ol-oc-0')
    }

    const containerClassName = ['ol-taro-position ol-layers  ol-zi-10'];

    if (!animate) {
      if (place == 'r') contentClassName.push('slideInRight')
      if (place == 'l') contentClassName.push('slideInLeft')
      if (place == 't') contentClassName.push('slideInDown')
      if (place == 'b') contentClassName.push('slideInUp');
    } else {
      contentClassName.push(animate);
    }
 

    return (visible ?
      <View className={containerClassName.join(' ')}>
        <View className={maskClassName.join(' ')} onClick={this.hide.bind(this)}></View>

        <View className={contentClassName.join(" ")} style={contentStyle} id={_id}>
          {this.props.children}
        </View>

      </View> : ''
    )
  }

} 