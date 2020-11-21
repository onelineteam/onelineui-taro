import React, { Component } from 'react';
import { View } from '@tarojs/components';
import ActionSheet from '~/packages/action-sheet/index';
export default class Index extends Component {
    componentWillReceiveProps() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        return (React.createElement(View, { className: 'Index' },
            React.createElement(ActionSheet, { mask: true }, "hello, this is")));
    }
}
//# sourceMappingURL=index.js.map