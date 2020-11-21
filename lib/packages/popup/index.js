import React, { Component } from 'react';
import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import Position from '~/packages/position/index';
import classNames from 'classNames';
import olicon from '@oneline/svg';
const icon = {
    close: olicon.olSvgIcon('close', 30, '', 'base64')
};
/**
 * 值的第一个为className, 第二个为style
 */
const classNameMap = {
    r: ['ol-pos__r-0  ol-popup-r', 'left'],
    l: ['ol-pos__l-0  ol-popup-l', 'right'],
    t: ['ol-pos__t-0  ol-popup-t', 'bottom'],
    b: ['ol-pos__b-0  ol-popup-b', 'top'],
};
function sizeParse(size) {
    if (/^\d+$/.test(size + '')) {
        return size + 'px';
    }
    return size;
}
export default class Popup extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            _visible: false,
            _started: false,
            _moveParams: { start: 0, end: 0, move: 0, height: 0 }
        };
        this.updateCall = null;
        this.hide = () => {
            this.setState({ _visible: false });
        };
        this.handMove = (e) => {
            if (this.updateCall !== null) {
                cancelAnimationFrame(this.updateCall);
            }
            this.updateCall = requestAnimationFrame(this.update.bind(this, e));
        };
        this.handStart = (_) => {
            // console.log("handStart", e,)
            const query = Taro.createSelectorQuery();
            query.select('#pop').boundingClientRect((rect) => {
                // console.log("react", rect)
                // const Y = e.touches[0].clientY;
                this.setState({ _moveParams: { start: rect.top, move: rect.top, height: rect.height }, _started: true });
            }).exec();
        };
        this.handEnd = (e) => {
            console.log("handEnd", e);
            const Y = this.state._moveParams.start;
            const move = this.state._moveParams.move;
            this.setState({ _started: false });
            if ((move - Y) > (this.state._moveParams.height / 2)) {
                this.hide();
            }
            this.updateCall = null;
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            _visible: nextProps.visible
        });
    }
    clear() {
        this.setState({
            _visible: false,
            _started: false,
            _moveParams: { start: 0, end: 0, move: 0, height: 0 }
        });
        cancelAnimationFrame(this.updateCall);
        this.updateCall = null;
    }
    componentWillUnmount() {
        this.clear();
    }
    componentDidShow() { }
    componentDidHide() {
        this.clear();
    }
    update(e) {
        const Y = e.touches[0].clientY;
        const move = this.state._moveParams.move;
        if (move < this.state._moveParams.start)
            return;
        this.state._moveParams.move = +(move + (Y - move));
        this.setState({ _moveParams: this.state._moveParams });
    }
    render() {
        const { place, mask, offset, title, showClose, size, hand } = this.props;
        const { _visible } = this.state;
        const className = ['ol-pos-ab ol-bg-c_white ol-w__per-1 ol-h__per-1 ', classNameMap[place][0]];
        const contentStyle = {};
        if (!size)
            contentStyle[classNameMap[place][1]] = offset || 0;
        if (place == 'r' || place == 'l') {
            contentStyle.top = 0;
            contentStyle.bottom = 0;
            contentStyle.transform = 'translateY(0)';
            if (size) {
                contentStyle.width = sizeParse(size);
            }
        }
        if (place == 'b' || place == 't') {
            contentStyle.left = 0;
            contentStyle.right = 0;
            contentStyle.transform = 'translateX(0)';
            if (size) {
                contentStyle.height = sizeParse(size);
            }
        }
        if (this.state._started) {
            contentStyle.top = this.state._moveParams.move;
        }
        return (React.createElement(Position, { place: place, mask: mask, visible: _visible, contentStyle: contentStyle },
            React.createElement(View, { className: className.join(' '), id: 'pop' },
                (hand && place == 'b') && React.createElement(View, { className: 'ol-popup__hand', onTouchMove: this.handMove, onTouchStart: this.handStart, onClick: this.handStart, onTouchEnd: this.handEnd }),
                (title || showClose) && React.createElement(View, { className: classNames('ol-layers', { 'ol-h-40': true }) },
                    title && React.createElement(View, { style: 'position: relative', className: 'ol-layer ol-layer__c ol-fs-18 ol-line ol-w__per-1 ol-p-8 ol-ta-c' }, title),
                    showClose && React.createElement(View, { className: 'ol-layer ol-layer__r ol-pos__r-10 ol-pos__t-24 ol-hover', onClick: this.hide },
                        React.createElement(Image, { className: 'ol-w-26 ol-h-26 ol-fs-26', mode: 'aspectFit', src: icon.close }))),
                this.props.children)));
    }
}
//# sourceMappingURL=index.js.map