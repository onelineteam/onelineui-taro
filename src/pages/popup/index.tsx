import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Popup from '~/packages/popup/index';
import { default as olicon } from '@oneline/svg/dist/index.es';
import {$} from '@tarojs/extend';

type State = {
	visible: boolean,
	place: 'r' | 'l' | 't' | 'b'
}

export default class Index extends Component<{}, State> {

	state: State = {
		visible: false,
		place: 'r'
	}

	componentWillReceiveProps() { }

	componentWillUnmount() { }

	componentDidShow() { 
    $("#hello").position();
	}

	componentDidHide() { }


	onClickPop = (_: any, type: any) => {
		this.setState({ visible: true, place: type })
	}

	render() {
		const { place, visible } = this.state;

		return (
			<View className='Index' id='hello'>

				<View className='ol-cells__title'>Popup</View>




				<View className='ol-cells'>
					<View className='ol-cell ol-cell__access' onClick={(e) => { this.onClickPop(e, 'r') }}>
						<View className='ol-cell__hd'>
						<Image src={olicon.olSvgIcon('right', 16, '', 'base64')} mode='aspectFit' style='width: 16px;height: 16px;'></Image>
						</View>
						<View className='ol-cell__bd'>右边</View>
					</View>

					<View className='ol-cell' onClick={(e) => { this.onClickPop(e, 'l') }}>
						<View className='ol-cell__hd'>
						<Image src={olicon.olSvgIcon('back', 16, '', 'base64')} mode='aspectFit' style='width: 16px;height: 16px;'></Image>
						</View>
						<View className='ol-cell__bd'>左边</View>
					</View>


					<View className='ol-cell' onClick={(e) => { this.onClickPop(e, 't') }}>
						<View className='ol-cell__hd'>
						<Image src={olicon.olSvgIcon('unfold', 16, '', 'base64')} mode='aspectFit' style='width: 16px;height: 16px;'></Image>
						</View>
						<View className='ol-cell__bd'>顶部</View>
					</View>


					<View className='ol-cell' onClick={(e) => { this.onClickPop(e, 'b') }}>
						<View className='ol-cell__hd'>
							<Image src={olicon.olSvgIcon('fold', 16, '', 'base64')} mode='aspectFit' style='width: 16px;height: 16px;'></Image>
						</View>
						<View className='ol-cell__bd'>底部</View>
					</View>


				</View>


				<Popup place={place} mask visible={visible} hand offset={80} onClose={()=> {this.setState({visible: false})}}>
					<View className='ol-ta-c ol-p-20'>我是popup</View>
				</Popup>
			</View>
		)
	}

}

