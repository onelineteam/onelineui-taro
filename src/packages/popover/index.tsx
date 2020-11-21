import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Position from '../position/index';
import {  PopoverProps } from 'types/popover';

type PopoverState = {
  popoverStyle: any,
}




// function CreatePopover(props) {
//   const { _visible, popoverStyle, onRect, place } = props;

//   const arrowClassName = `ol-popover__arrow on-${place}`

//   return <Position mask visible={_visible} contentStyle={popoverStyle} onRect={onRect} animate="fadeIn">
//     <View className='ol-popover'>

//       <View className={arrowClassName}></View>

//       <View style='overflow:hidden; border-radius: 13px;'>{props.children} </View>

//     </View>

//   </Position>
// }

export default class Popover extends Component<PopoverProps, PopoverState> {



  state = {
    popoverStyle: {
      left: 0,
      top: 0
    },

  }




  place_t(rect: any) {
    const { top, left, width } = this.props.rect;
    const _top = top - rect.height - 11;
    const _left = left + (width - rect.width) / 2;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }

  place_tl(rect: any) {
    const { top, left } = this.props.rect;
    const _top = top - rect.height - 11;
    const _left = left;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }

  place_tr(rect: any) {
    const { top, left, width } = this.props.rect;
    const _top = top - rect.height - 11;
    const _left = left + Math.abs(rect.width - width);
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }

  place_b(rect: any) {
    const { top, left, width, height } = this.props.rect;
    const _top = top + height + 11;
    const _left = left + (width - rect.width) / 2;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }



  place_bl(_: any) {
    const { top, left, height } = this.props.rect;
    const _top = top + height + 11;
    const _left = left;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }


  place_br(rect: any) {
    const { top, left, width, height } = this.props.rect;
    const _top = top + height + 11;
    const _left = left + Math.abs(rect.width - width);
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }


  place_l(rect: any) {
    const { top, left, height } = this.props.rect;
    const _top = top + (height - rect.height) / 2;
    const _left = left - rect.width - 11;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }


  place_lt(rect: any) {
    const { top, left } = this.props.rect;
    const _top = top;
    const _left = left - rect.width - 11;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }


  place_lb(rect: any) {
    const { top, left, height } = this.props.rect;
    const _top = top - Math.abs(height - rect.height);
    const _left = left - rect.width - 11;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }

  place_r(rect: any) {
    const { top, left, width, height } = this.props.rect;
    const _top = top + (height - rect.height) / 2;
    const _left = left + width + 11;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }


  place_rt(_: any) {
    const { top, left, width } = this.props.rect;
    const _top = top;
    const _left = left + width + 11;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }


  place_rb(rect: any) {
    const { top, left, width, height } = this.props.rect;
    const _top = top - Math.abs(height - rect.height);
    const _left = left + width + 11;
    this.setState({
      popoverStyle: {
        left: _left,
        top: _top
      },
    })
  }


  onRect = (rect) => {
    if (rect) {
      this['place_' + (this.props.place || 'b')](rect);
    }
  }

  hide = () => {
    this.props.onClose && this.props.onClose();
  }

  render() {
    const { popoverStyle, } = this.state;
    const { place,visible } = this.props;
    // console.log("我:", _visible)


    const arrowClassName = `ol-popover__arrow on-${place}`

    return <Position onClose={this.hide} mask visible={visible} contentStyle={popoverStyle} onRect={this.onRect} animate="fadeIn">
      <View className='ol-popover'>

        <View className={arrowClassName}></View>

        <View style='overflow:hidden; border-radius: 13px;'>{this.props.children} </View>

      </View>

    </Position>
    // return <CreatePopover place={this.props.place || 'b'} _visible={_visible} popoverStyle={popoverStyle} onRect={this.onRect}>{this.props.children}</CreatePopover>
  }
}
