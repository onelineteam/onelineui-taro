import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import Popover from '~/packages/popover/index';
import olicon from '@oneline/svg';
export default class PopoverDemo extends Component {
    constructor() {
        super(...arguments);
        this.config = {
            navigationBarTitleText: 'Popover'
        };
        this.state = {
            visible: false,
            place: 'b',
            rect: {
                top: 0,
                left: 0,
                width: 0,
                height: 0
            },
            scroll: { scrollTop: 0, scrollLeft: 0, scrollWidth: 0, scrollHeight: 0 }
        };
        this._top = 0;
        this._left = 0;
        this.onClickBasic = (e, place) => {
            e.stopPropagation();
            e.preventDefault();
            const query = Taro.createSelectorQuery();
            query.select('#' + e.currentTarget.id).boundingClientRect().selectViewport().scrollOffset().exec(result => {
                const res = result[0];
                const scroll = result[1];
                this.setState({
                    visible: true,
                    scroll: Object.assign({}, scroll),
                    rect: {
                        left: res.left,
                        top: res.top,
                        width: res.width,
                        height: res.height
                    },
                    place: place
                });
            });
        };
    }
    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    onPageScroll() {
        console.log("页面滚动");
    }
    render() {
        const { rect, visible } = this.state;
        return (React.createElement(View, { onTouchMove: (e) => { e.stopPropagation(); e.preventDefault(); } },
            React.createElement(View, { className: 'ol-cells__title' }, "Popover: \u9ED8\u8BA4(\u5E95\u90E8)"),
            React.createElement(View, { className: "ol-cells" },
                React.createElement(View, { className: 'ol-cell ol-cell_access', onClick: (e) => this.onClickBasic(e, 'b') },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u57FA\u672C"),
                    React.createElement(View, { className: 'ol-cell__ft' })),
                React.createElement(View, { className: 'ol-cell ol-cell_access', onClick: (e) => this.onClickBasic(e, 'bl') },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u57FA\u672C-\u5DE6\u8FB9"),
                    React.createElement(View, { className: 'ol-cell__ft' })),
                React.createElement(View, { className: 'ol-cell ol-cell_access', onClick: (e) => this.onClickBasic(e, 'br') },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u57FA\u672C-\u53F3\u8FB9"),
                    React.createElement(View, { className: 'ol-cell__ft' }))),
            React.createElement(View, { className: 'ol-cells__title' }, "Popover: \u9876\u90E8"),
            React.createElement(View, { className: 'ol-cells' },
                React.createElement(View, { className: 'ol-cell ol-cell_access', onClick: (e) => this.onClickBasic(e, 't') },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u9876\u90E8"),
                    React.createElement(View, { className: 'ol-cell__ft' })),
                React.createElement(View, { className: 'ol-cell ol-cell_access', onClick: (e) => this.onClickBasic(e, 'tl') },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u9876\u90E8-\u5DE6\u8FB9"),
                    React.createElement(View, { className: 'ol-cell__ft' })),
                React.createElement(View, { className: 'ol-cell ol-cell_access', onClick: (e) => this.onClickBasic(e, 'tr') },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u9876\u90E8-\u53F3\u8FB9"),
                    React.createElement(View, { className: 'ol-cell__ft' }))),
            React.createElement(View, { className: 'ol-bg-c_light ol-p-10' },
                React.createElement(View, { className: 'ol-layout-h c-right' },
                    React.createElement(View, { className: 'ol-m-100__t ol-b-danger_1 ol-p-8 ', onClick: (e) => this.onClickBasic(e, 'l') }, "\u5DE6\u8FB9")),
                React.createElement(View, { className: 'ol-layout-h c-right' },
                    React.createElement(View, { className: 'ol-m-100__t ol-b-danger_1 ol-p-8', onClick: (e) => this.onClickBasic(e, 'lt') }, "\u5DE6\u8FB9\u9876\u90E8")),
                React.createElement(View, { className: 'ol-layout-h c-right' },
                    React.createElement(View, { className: 'ol-m-100__t ol-b-danger_1 ol-p-8', onClick: (e) => this.onClickBasic(e, 'lb') }, "\u5DE6\u8FB9\u5E95\u90E8"))),
            React.createElement(View, { className: 'ol-bg-c_light ol-p-10 ol-m-20__t' },
                React.createElement(View, { className: 'ol-layout-h c-left' },
                    React.createElement(View, { className: 'ol-m-100__t ol-b-danger_1 ol-p-8', onClick: (e) => this.onClickBasic(e, 'r') }, "\u53F3\u8FB9")),
                React.createElement(View, { className: 'ol-layout-h c-left' },
                    React.createElement(View, { className: 'ol-m-100__t ol-b-danger_1 ol-p-8', onClick: (e) => this.onClickBasic(e, 'rt') }, "\u53F3\u8FB9\u9876\u90E8")),
                React.createElement(View, { className: 'ol-layout-h c-left' },
                    React.createElement(View, { className: 'ol-m-100__t ol-b-danger_1 ol-p-8', onClick: (e) => this.onClickBasic(e, 'rb') }, "\u53F3\u8FB9\u5E95\u90E8"))),
            React.createElement(View, { className: 'ol-p-20' },
                "\u6211\u662F\u526F\u9A7E\u9A76\u7684\u79EF\u5206\u53D1\u751F\u5730\u65B9\u90FD\u662F\u653E\u5230\u53D1\u9001\u5230f",
                React.createElement(View, { className: 'ol-inline ol-c_primary', onClick: (e) => this.onClickBasic(e, 'tl') }, "jdsklfjsdl"),
                "\u653E\u5F97\u5F00\u8BBE\u8BA1\u8D39\u7984\u53E3\u8857\u9053"),
            React.createElement(Popover, { rect: rect, visible: visible, place: this.state.place, scroll: this.state.scroll },
                React.createElement(View, { className: '' },
                    React.createElement(View, { className: 'ol-cells ol-w-200' },
                        React.createElement(View, { className: 'ol-cell ol-cell_access' },
                            React.createElement(View, { className: 'ol-cell__hd' },
                                React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                            React.createElement(View, { className: 'ol-cell__bd' }, "\u57FA\u672C"),
                            React.createElement(View, { className: 'ol-cell__ft' })),
                        React.createElement(View, { className: 'ol-cell ol-cell_access' },
                            React.createElement(View, { className: 'ol-cell__hd' },
                                React.createElement(Image, { mode: 'aspectFit', style: 'width: 16px; height: 16px; font-size: 16px;', src: olicon.olSvgIcon('check', 32, '', 'base64'), className: 'ol-cell__icon' })),
                            React.createElement(View, { className: 'ol-cell__bd' }, "\u57FA\u672C"),
                            React.createElement(View, { className: 'ol-cell__ft' })))))));
    }
}
//# sourceMappingURL=index.js.map