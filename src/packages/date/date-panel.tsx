import React from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import Icon from "../icon";
import { week_zh } from "./date-fn";


/**
 * 年份面板, 目前使用scrollView, 后期可能改为PickerView
 * @param props 
 */
export function YearPanel(props: any) {

  
  const { datas, onScroll, onClick, scrollTop } = props;

  const items = datas.map((item, index) => {

    const click = (e) => {
      onClick(e, item, index);
    };
    return <View key={item}  className='ol-ta-c ol-m-10__t ol-p-8' onClick={click}>{item}</View>

  })


  return (
    <View className='ol-h-200 '>
      <ScrollView  scrollTop={scrollTop} scrollY style='height: 100%;' scrollWithAnimation onScroll={onScroll}>
        {items}
      </ScrollView>
    </View>
  )

}




/**
 * 日期控制组件
 * @param props 
 */
export function DateControl(props: any) {
  const { onControl, year, month } = props;
  return <View className='ol-layout-h ol-p-20 ol-fs-14'>
    <View className='c-flex' onClick={onControl.bind({}, 'back')}>
      <Icon name='back'></Icon>
    </View>
    <Text >{year}年{month}月</Text>
    <View className='c-flex' onClick={onControl.bind({}, 'forward')}>
      <Icon name='right'></Icon>
    </View>
  </View>
}

/**
 * 顶部组件
 * @param props 
 */
export function TopDateControl(props: any) {
  const { year, month, day, week, onControl } = props;
  return (
    <View className='ol-bg-c_primary ol-c_white ol-p-20'>
      <View className='ol-fs-14' onClick={onControl.bind({})}>{year}年</View>
      <View className='ol-fs-20'>{month}月{day}日 周{week_zh[week]}</View>
    </View>
  )
}


/**
 * 月日期面板
 * @param props 
 */
export function DatePanel(props) {
  const { date } = props;
  return <View>
    <View className='ol-layout-g g-7 ol-ta-c ol-fs-12 ol-c_muted'>
      <Text>日</Text>
      <Text>一</Text>
      <Text>二</Text>
      <Text>三</Text>
      <Text>四</Text>
      <Text>五</Text>
      <Text>六</Text>
    </View>
    <View className='ol-layout-g g-7 ol-ta-c ol-fs-12 ol-m-20__t ol-h-200'>
      {date}
    </View>
  </View>
}