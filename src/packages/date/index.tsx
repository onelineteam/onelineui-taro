// import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { YearPanel, DateControl, TopDateControl, DatePanel } from './date-panel';
import { dateData, yearData } from './date-fn';

import { DatePickerProps, DatePickerState } from 'types/date';



let _scrollTop: number = 0;

let timer: any = -1;
export default class DatePicker extends Component<DatePickerProps, DatePickerState> {


  constructor(props: DatePickerProps) {
    super(props);


    let { date } = props;

    if (!date) {
      date = new Date();
    }

    let now = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() }


    const dates = dateData(now.year, now.month, now.day);
    this.state = {
      dates: dates.data,
      current: dates.current,
      isYear: false,
      years: yearData(),
      keepScrollTop: 200,
    }
  }

  onControl = (type: 'back' | 'forward') => {
    this.setState({ isYear: false })
    const { current } = this.state;
    if (type === "back") {
      const dates = dateData(current.year, current.month - 1, current.day);
      this.setState({ dates: dates.data, current: dates.current })
    } else {
      const dates = dateData(current.year, current.month + 1, current.day);
      this.setState({ dates: dates.data, current: dates.current })
    }
  }


  onControlYear = () => {
    this.setState({ isYear: !this.state.isYear })
  }

  onScroll = (e) => {

    e.preventDefault();

    clearTimeout(timer);
    const { scrollHeight, scrollTop } = e.detail;

    if (scrollTop > _scrollTop) {

      const realHeight = scrollTop + 200 + 50;
      if (realHeight >= scrollHeight) {
        timer = setTimeout(() => {

          const years = this.state.years;
          const year = years[years.length - 1];
          for (let i = 1; i < 6; i++) {
            years.push(year + i);
          }
          this.setState({ years })

        }, 30);

      }

    } else {



      if (scrollTop <= 80) {
        timer = setTimeout(() => {
          const years = this.state.years;
          const year = years[0];
          for (let i = 1; i < 6; i++) {
            years.unshift(year - i);
          }

          this.setState({ years, keepScrollTop: scrollTop }, () => {

            const top = scrollTop <= 0 ? 5 * 50 : scrollTop;


            this.setState({ keepScrollTop: top });

          })



        }, 30);


      }

    }

    _scrollTop = e.detail.scrollTop;




  }

  onCommitYear = (_, item) => {
    const { data, current } = dateData(item, this.state.current.month, this.state.current.day);
    this.setState({ isYear: false, dates: data, current })
  }


  selectDate(date: number) {

    const { current } = dateData(this.state.current.year, this.state.current.month, date);
    this.setState({ current: current });
  }


  clickReturn(type: 'Clear' | 'Cancel' | 'Commit') {
    const date = type == 'Commit' ? this.state.current : ''
    this.props[`on${type}`] && this.props[`on${type}`](type, date)
  }


  render() {

    const { dates, current, isYear, years, keepScrollTop } = this.state;
    const date: any = [];


    for (let i = 0; i < dates.length; i++) {
      const days = dates[i];
      for (let j = 0; j < days.length; j++) {
        const day = days[j];
        const key = (day || 'uno') + ":" + i + Math.random();
        if (day == current.day) {
          date.push(<View onClick={this.selectDate.bind(this, day)} key={key} className=' ol-layout-h c-cent ol-p-10 ol-taro-date__active'><Text className='ol-pos-rt ol-zi-2 ol-c_white'>{day}</Text></View>);
        } else {
          date.push(<View onClick={this.selectDate.bind(this, day)} key={key} className=' ol-layout-h c-cent ol-p-10'>{day}</View>);
        }
      }
    }





    return (
      <View>

        <View>
          <TopDateControl onControl={this.onControlYear} year={current.year} month={current.month} day={current.day} week={current.week}></TopDateControl>
          <DateControl onControl={this.onControl} year={current.year} month={current.month}></DateControl>
          {!isYear && <DatePanel date={date}></DatePanel>}
          {isYear && <YearPanel scrollTop={keepScrollTop} onClick={this.onCommitYear} datas={years} onScroll={this.onScroll}> </YearPanel>}
        </View>
        <View className='ol-layout-h c-space-b ol-fs-14 ol-m-20__t ol-p-20'>

          <View className='ol-c_primary' onClick={this.clickReturn.bind(this, 'Clear')}>清除</View>

          <View className='ol-layout-h'>
            <View className='ol-c_primary ol-m-20__r' onClick={this.clickReturn.bind(this, 'Cancel')}>取消</View>
            <View className='ol-c_primary' onClick={this.clickReturn.bind(this, 'Commit')}>设置</View>
          </View>

        </View>
      </View>
    );
  }
}







