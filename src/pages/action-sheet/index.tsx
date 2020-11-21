import React, { Component } from 'react';
import { View} from '@tarojs/components'
import ActionSheet from '~/packages/action-sheet/index';


export default class Index extends Component {
     
    componentWillReceiveProps() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='Index'>
                <ActionSheet mask>hello, this is</ActionSheet>
            </View>
        )
    }

}
