import React, { Component } from 'react';
import Taro, { } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import Popover from '~/packages/popover/index';
import olicon from '@oneline/svg';

export default class PopoverDemo extends Component {

  config = {
    navigationBarTitleText: 'Popover'
  }

  state = {
    visible: false,
    place: 'b',
    rect: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    },
    scroll: { scrollTop: 0, scrollLeft: 0, scrollWidth: 0, scrollHeight: 0 }
  }

  _top: number = 0;
  _left: number = 0;

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }


  onPageScroll() {
    console.log("页面滚动")
  }


  onClickBasic = (e, place) => {
    e.stopPropagation();
    e.preventDefault();

    const query = Taro.createSelectorQuery();
    console.log(e.currentTarget.id)
    query.select('#' + e.currentTarget.id).boundingClientRect().selectViewport().scrollOffset().exec(result => {
    
      const res = result[0];
      const scroll = result[1];
      this.setState({
        visible: true,
        scroll: { ...scroll },
        rect: {
          left: res.left,
          top: res.top,
          width: res.width,
          height: res.height

        },
        place: place
      });
    });
  }



  render() {
    const { rect, visible } = this.state;
    return (
      <View onTouchMove={(e) => { e.stopPropagation(); e.preventDefault() }}>



        <View className='ol-cells__title'>Popover: 默认(底部)</View>
        <View className="ol-cells">

          <View className='ol-cell ol-cell_access' onClick={(e) => this.onClickBasic(e, 'b')}>
            <View className='ol-cell__hd'>
              <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
            </View>
            <View className='ol-cell__bd' >基本</View>
            <View className='ol-cell__ft'></View>
          </View>

          <View className='ol-cell ol-cell_access' onClick={(e) => this.onClickBasic(e, 'bl')}>
            <View className='ol-cell__hd'>
              <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
            </View>
            <View className='ol-cell__bd' >基本-左边</View>
            <View className='ol-cell__ft'></View>
          </View>

          <View className='ol-cell ol-cell_access' onClick={(e) => this.onClickBasic(e, 'br')}>
            <View className='ol-cell__hd'>
              <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
            </View>
            <View className='ol-cell__bd' >基本-右边</View>
            <View className='ol-cell__ft'></View>
          </View>

        </View>


        <View className='ol-cells__title'>Popover: 顶部</View>
        <View className='ol-cells'>



          <View className='ol-cell ol-cell_access' onClick={(e) => this.onClickBasic(e, 't')} >
            <View className='ol-cell__hd'>
              <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
            </View>
            <View className='ol-cell__bd' >顶部</View>
            <View className='ol-cell__ft'></View>
          </View>

          <View className='ol-cell ol-cell_access' onClick={(e) => this.onClickBasic(e, 'tl')} >
            <View className='ol-cell__hd'>
              <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
            </View>
            <View className='ol-cell__bd' >顶部-左边</View>
            <View className='ol-cell__ft'></View>
          </View>


          <View className='ol-cell ol-cell_access' onClick={(e) => this.onClickBasic(e, 'tr')} >
            <View className='ol-cell__hd'>
              <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
            </View>
            <View className='ol-cell__bd' >顶部-右边</View>
            <View className='ol-cell__ft'></View>
          </View>


        </View>


        <View className='ol-bg-c_light ol-p-10'>

          <View className='ol-layout-h c-right'>
            <View className='ol-m-100__t ol-b-danger_1 ol-p-8 ' onClick={(e) => this.onClickBasic(e, 'l')}>左边</View>
          </View>
          <View className='ol-layout-h c-right'>
            <View className='ol-m-100__t ol-b-danger_1 ol-p-8' onClick={(e) => this.onClickBasic(e, 'lt')}>左边顶部</View>

          </View>
          <View className='ol-layout-h c-right'>
            <View className='ol-m-100__t ol-b-danger_1 ol-p-8' onClick={(e) => this.onClickBasic(e, 'lb')}>左边底部</View>

          </View>

        </View>

        <View className='ol-bg-c_light ol-p-10 ol-m-20__t'>

          <View className='ol-layout-h c-left'>
            <View className='ol-m-100__t ol-b-danger_1 ol-p-8' onClick={(e) => this.onClickBasic(e, 'r')}>右边</View>
          </View>
          <View className='ol-layout-h c-left'>
            <View className='ol-m-100__t ol-b-danger_1 ol-p-8' onClick={(e) => this.onClickBasic(e, 'rt')}>右边顶部</View>

          </View>
          <View className='ol-layout-h c-left'>
            <View className='ol-m-100__t ol-b-danger_1 ol-p-8' onClick={(e) => this.onClickBasic(e, 'rb')}>右边底部</View>

          </View>

        </View>



        <View className='ol-p-20'>我是副驾驶的积分发生地方都是放到发送到f<View className='ol-inline ol-c_primary' onClick={(e) => this.onClickBasic(e, 'tl')} >jdsklfjsdl</View>放得开设计费禄口街道</View>





        <Popover rect={rect} visible={visible} place={this.state.place} scroll={this.state.scroll} onClose={()=>this.setState({visible: false})}>
          <View className=''>
            <View className='ol-cells ol-w-200'>

              <View className='ol-cell ol-cell_access'>
                <View className='ol-cell__hd'>
                  <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
                </View>
                <View className='ol-cell__bd'>基本</View>
                <View className='ol-cell__ft'></View>
              </View>
              <View className='ol-cell ol-cell_access'>
                <View className='ol-cell__hd'>
                  <Image mode='aspectFit' style='width: 16px; height: 16px; font-size: 16px;' src={olicon.olSvgIcon('check', 32, '', 'base64')} className='ol-cell__icon'></Image>
                </View>
                <View className='ol-cell__bd'>基本</View>
                <View className='ol-cell__ft'></View>
              </View>
            </View>
          </View>
        </Popover>

      </View>
    );
  }
}
