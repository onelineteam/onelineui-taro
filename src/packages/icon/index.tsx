import React , { Component } from 'react';
import { View, Image} from '@tarojs/components';
import olicon from '@oneline/svg';
import { IconProps } from 'types/icon';
export default class Icon extends Component<IconProps, {}>{

  render() {
    const {name, size, color, direct, textSize} = this.props;
    const _icon = olicon.olSvgIcon(name, size||16, color||'', 'base64');
    const style = {width: size||16 + 'px', height: size||16 + 'px'};
    const _direct = direct || 'v'
    return (
      <View className={'ol-taro-icon ol-layout-' + _direct}>
        <Image src={_icon} mode='aspectFit' style={style}></Image>
        <View className={'ol-fs-' + (textSize || 14)}>{this.props.children}</View>
      </View>
    );
  }
}
 