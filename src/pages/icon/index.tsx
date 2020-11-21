import React , { Component } from 'react';
import { View, Text , Button} from '@tarojs/components';
import Icon from '~/packages/icon';
import "./index.scss"
export default class IconDemo extends Component {

   config = {
       navigationBarTitleText: 'ICON'
  }

  state={}


  render() {
    return (
      <View className='icon-demo'>
        <View className='ol-layout-g g-3 gap-10'>
          <Icon name='check' size={32} color='green'>check</Icon>
          <Icon name='close' size={32} color='red'>close</Icon>
          <Icon name='location_fill' size={32} color='yellow'>location_fill</Icon>
          <Icon name='location' size={32}>location</Icon>
          <Icon name='round_check_fill' size={32}>round_check_fill</Icon>
          <Icon name='round_check' size={32}>round_check</Icon>
          <Icon name='round_close_fill' size={32}>round_close_fill</Icon>
          <Icon name='round_close' size={32}>round_close</Icon>
          <Icon name='search' size={32}>search</Icon>
          <Icon name='unfold' size={32}>unfold</Icon>
          <Icon name='back' size={32}>back</Icon>
          <Icon name='right' size={32}>right</Icon>
          <Icon name='refresh' size={32}>refresh</Icon>
          <Icon name='more_android' size={32}>more_android</Icon>
          <Icon name='delete_fill' size={32}>delete_fill</Icon>
          <Icon name='delete' size={32}>delete</Icon>
          <Icon name='square_check_fill' size={32}>square_check_fill</Icon>
          <Icon name='square' size={32}>square</Icon>
          <Icon name='square_check' size={32}>square_check</Icon>
          <Icon name='fold' size={32}>fold</Icon>
          <Icon name='close_light' size={32}>close_light</Icon>
          <Icon name='add_light' size={32}>add_light</Icon>
          <Icon name='back_light' size={32}>back_light</Icon>
          <Icon name='round_close_light' size={32}>round_close_light</Icon>
          <Icon name='round_close_fill_light' size={32} color='green'>round_close_fill_light</Icon>
        </View>
      </View>
    );
  }
}
 