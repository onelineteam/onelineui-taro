import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Position from '../position/index';
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
export default class Popover extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            _visible: this.props.visible,
            popoverStyle: {
                left: 0,
                top: 0
            },
        };
        this.onRect = (rect) => {
            if (rect) {
                this['place_' + (this.props.place || 'b')](rect);
            }
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            _visible: nextProps.visible
        });
    }
    place_t(rect) {
        const { top, left, width } = this.props.rect;
        const _top = top - rect.height - 11;
        const _left = left + (width - rect.width) / 2;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_tl(rect) {
        const { top, left } = this.props.rect;
        const _top = top - rect.height - 11;
        const _left = left;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_tr(rect) {
        const { top, left, width } = this.props.rect;
        const _top = top - rect.height - 11;
        const _left = left + Math.abs(rect.width - width);
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_b(rect) {
        const { top, left, width, height } = this.props.rect;
        const _top = top + height + 11;
        const _left = left + (width - rect.width) / 2;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_bl(_) {
        const { top, left, height } = this.props.rect;
        const _top = top + height + 11;
        const _left = left;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_br(rect) {
        const { top, left, width, height } = this.props.rect;
        const _top = top + height + 11;
        const _left = left + Math.abs(rect.width - width);
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_l(rect) {
        const { top, left, height } = this.props.rect;
        const _top = top + (height - rect.height) / 2;
        const _left = left - rect.width - 11;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_lt(rect) {
        const { top, left } = this.props.rect;
        const _top = top;
        const _left = left - rect.width - 11;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_lb(rect) {
        const { top, left, height } = this.props.rect;
        const _top = top - Math.abs(height - rect.height);
        const _left = left - rect.width - 11;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_r(rect) {
        const { top, left, width, height } = this.props.rect;
        const _top = top + (height - rect.height) / 2;
        const _left = left + width + 11;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_rt(_) {
        const { top, left, width } = this.props.rect;
        const _top = top;
        const _left = left + width + 11;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    place_rb(rect) {
        const { top, left, width, height } = this.props.rect;
        const _top = top - Math.abs(height - rect.height);
        const _left = left + width + 11;
        this.setState({
            popoverStyle: {
                left: _left,
                top: _top
            },
        });
    }
    render() {
        const { popoverStyle, _visible } = this.state;
        const { place, scroll } = this.props;
        // console.log("我:", _visible)
        const arrowClassName = `ol-popover__arrow on-${place}`;
        return React.createElement(Position, { mask: true, visible: _visible, contentStyle: popoverStyle, onRect: this.onRect, animate: "fadeIn", scroll: scroll },
            React.createElement(View, { className: 'ol-popover' },
                React.createElement(View, { className: arrowClassName }),
                React.createElement(View, { style: 'overflow:hidden; border-radius: 13px;' },
                    this.props.children,
                    " ")));
        // return <CreatePopover place={this.props.place || 'b'} _visible={_visible} popoverStyle={popoverStyle} onRect={this.onRect}>{this.props.children}</CreatePopover>
    }
}
//# sourceMappingURL=index.js.map