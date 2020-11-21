import React , { Component } from 'react';
import { View} from '@tarojs/components';
import DatePicker from '~/packages/date';
export default class DateDemo extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  onReturn = (type: string, date: any) => {
    console.log(type, date)
  }
   
  render() {
    return (
      <View className='ol-p-30'>
        <DatePicker date={new Date(2018, 9, 12)} onCommit={this.onReturn} onCancel={this.onReturn} onClear={this.onReturn}></DatePicker>
      </View>
    );
  }
}
 