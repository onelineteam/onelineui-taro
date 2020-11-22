import { View, Input as _Input } from "@tarojs/components";
import React, { Component } from "react";
import Icon from "../icon";
// import { ButtonProps } from 'types/button';

export default class Input extends Component<any, any> {
  static defaultProps = {
    placeholder: "请输入内容",
  };
  render() {
    const { placeholder, affix, addon } = this.props;
    const input = [<InputBasic key={'input'} placeholder={placeholder}></InputBasic>];
    let element = input[0];
    if (affix) {
      
      if(affix.left) {
        affix.left.forEach( item =>{
          input.unshift(<View className='affix' key={item.name} onClick={item.action}><Icon name={item.name} ></Icon></View>)
        })
      }
 
      if(affix.right) {
        affix.right.forEach( item =>{
          input.push(<View className='affix' key={item.name} onClick={item.action}><Icon name={item.name} ></Icon></View>)
        })
      }

      element = <View className='ol-input-affix'>{input}</View>

    }
    //<InputBasic placeholder={placeholder}></InputBasic>
    // <InputAffix placeholder={placeholder}></InputAffix>

    return (
      <View>
        {element}
      </View>
    );
  }
}

function InputBasic({ placeholder }) {
  return <_Input className="ol-input" placeholder={placeholder}></_Input>;
}

function InputAffix({ placeholder }) {
  return (
    <View className="ol-input-affix">
      <View className="affix">
        <Icon name="location"></Icon>
      </View>
      <InputBasic placeholder={placeholder}></InputBasic>
      <View className="affix">
        <Icon name="location"></Icon>
      </View>
    </View>
  );
}

function InputAddon({ placeholder }) {
  return (
    <View className="ol-input-addon">
      <View className="addon">
        <Icon name="location"></Icon>
      </View>
      <InputBasic placeholder={placeholder}></InputBasic>
      <View className="addon">
        <Icon name="location"></Icon>
      </View>
    </View>
  );
}
