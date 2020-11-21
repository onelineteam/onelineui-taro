import { View } from "@tarojs/components";
import React, { Component } from "react";
import { ButtonProps } from "types/button";
export default class Button extends Component<ButtonProps, {}> {
  static defaultProps = {
    isFill: true,
  };

  render() {
    const { isFill, children, w, block, className } = this.props;
    const cnames: any[] = [];
    const prefix = isFill ? "ol-btn" : "ol-btn-o";
    cnames.push(prefix);

    if (className) cnames.push(className);

    const style: any = {};

    if (w) {
      style.width = typeof w === "number" ? w + "px" : w;
    }

    if (block) {
      delete style.width;
      style.display = "flex";
    }

    return (
      <View className={cnames.join(" ")} style={style}>
        {children}
      </View>
    );
  }
}
