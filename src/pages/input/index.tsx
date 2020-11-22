import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Input from '~/packages/input/input';
export default class Index extends Component {
  
    render() {
        const leftClick = () => {
            console.log("helloo")
        }
        return <View>
            <Input affix={{left: [{name: 'location', action: leftClick}], right: []}}></Input>
        </View>
    }
}