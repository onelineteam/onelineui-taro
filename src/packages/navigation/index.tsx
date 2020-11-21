import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import Icon from '../icon';


export default class Navigation extends Component<NavigationProps, {}> {

  state = {
    hasBack: false
  }

  componentDidMount() {
    const pages = Taro.getCurrentPages();
    if (pages.length > 1) {
      this.setState({ hasBack: true });
    }
  }

  clickBack = () => {

    Taro.navigateBack();

  }

  render() {
    const { title } = this.props;
    const { hasBack } = this.state;
    return (
      <View className='ol-status-navigation'>
        <View className='ol-status-bar'></View>
        <View className='ol-navigation-bar'>
          {hasBack && <View className='ol-navigation-bar__back' onClick={this.clickBack}>
            <Icon name='back_light' size={20}></Icon>
          </View>}
          <View className='ol-navigation-bar__title'>
            <View className='ol-navigation-bar__title_text'>{title}</View>
          </View>
          <View className='ol-navigation-bar__action'>
            {this.props.children}
          </View>
        </View>
      </View>
    );
  }
}
