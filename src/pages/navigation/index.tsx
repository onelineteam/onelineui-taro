import React , { Component } from 'react';
import { View} from '@tarojs/components';
import Navigation from '~/packages/navigation/index';
import Icon from '~/packages/icon';
export default class NavigationDemo extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}
 
  render() {
    return (
      <View>
        <Navigation title='导航栏'>
          <Icon name='search'></Icon>  
          <Icon name='more_android'></Icon>  
        </Navigation> 
      </View>
    );
  }
}
 