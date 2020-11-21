import React, { Component } from "react";
import { View } from "@tarojs/components";
import Button from "~/packages/button/index";
export default class Index extends Component {
  render() {
    return (
      <View className='ol-p-10'>
        <View className="ol-layout-g g-3 gap-10">
          <Button isFill={false}>取消订单</Button>
          <Button>立即支付</Button>
        </View>
        <Button block className='ol-btn_primary'>确认</Button>
      </View>
    );
  }
}
