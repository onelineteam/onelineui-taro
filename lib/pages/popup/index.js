import React, { Component } from 'react';
import { View, Image } from '@tarojs/components';
import Popup from '~/packages/popup/index';
import { default as olicon } from '@oneline/svg/dist/index.es';
export default class Index extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: false,
            place: 'r'
        };
        this.onClickPop = (_, type) => {
            this.setState({ visible: true, place: type });
        };
    }
    componentWillReceiveProps() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        const { place, visible } = this.state;
        return (React.createElement(View, { className: 'Index' },
            React.createElement(View, { className: 'ol-cells__title' }, "Popup"),
            React.createElement(View, { className: 'ol-cells' },
                React.createElement(View, { className: 'ol-cell ol-cell__access', onClick: (e) => { this.onClickPop(e, 'r'); } },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { src: olicon.olSvgIcon('right', 16, '', 'base64'), mode: 'aspectFit', style: 'width: 16px;height: 16px;' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u53F3\u8FB9")),
                React.createElement(View, { className: 'ol-cell', onClick: (e) => { this.onClickPop(e, 'l'); } },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { src: olicon.olSvgIcon('back', 16, '', 'base64'), mode: 'aspectFit', style: 'width: 16px;height: 16px;' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u5DE6\u8FB9")),
                React.createElement(View, { className: 'ol-cell', onClick: (e) => { this.onClickPop(e, 't'); } },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { src: olicon.olSvgIcon('unfold', 16, '', 'base64'), mode: 'aspectFit', style: 'width: 16px;height: 16px;' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u9876\u90E8")),
                React.createElement(View, { className: 'ol-cell', onClick: (e) => { this.onClickPop(e, 'b'); } },
                    React.createElement(View, { className: 'ol-cell__hd' },
                        React.createElement(Image, { src: olicon.olSvgIcon('fold', 16, '', 'base64'), mode: 'aspectFit', style: 'width: 16px;height: 16px;' })),
                    React.createElement(View, { className: 'ol-cell__bd' }, "\u5E95\u90E8"))),
            React.createElement(Popup, { place: place, mask: true, visible: visible, hand: true, offset: 80 },
                React.createElement(View, { className: 'ol-ta-c ol-p-20' }, "\u6211\u662Fpopup"))));
    }
}
//# sourceMappingURL=index.js.map