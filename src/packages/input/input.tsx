import { View, Input as _Input } from "@tarojs/components";
import React, { Component } from "react";
// import { ButtonProps } from 'types/button';

export default class Input extends Component<{}, {}> {
  render() {
    return (
      <View>
        <_Input className="ol-input"></_Input>
      </View>
    );
  }
}
