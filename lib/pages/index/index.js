import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import Position from '~/packages/position/index';
import './index.scss';
export default class Index extends Component {
    componentWillMount() { }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        return (React.createElement(View, { className: 'index' },
            React.createElement(Text, null, "Hello world!"),
            React.createElement(Position, { place: 'l', mask: true }, "\u6211\u662F\u5BFC\u5165")));
    }
}
//# sourceMappingURL=index.js.map