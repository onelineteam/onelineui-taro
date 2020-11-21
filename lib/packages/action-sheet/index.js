import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Position from '~/packages/position/index';
export default class ActionSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '小红'
        };
    }
    componentWillReceiveProps() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        const { mask } = this.props;
        return (React.createElement(Position, { place: 'b', mask: mask },
            React.createElement(View, { className: 'ol-bg-c_white ol-m-10 ol-br-5' }, this.props.children)));
    }
}
//# sourceMappingURL=index.js.map