import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { findPageNode } from '~/utils';
export default class Position extends Component {
    constructor() {
        super(...arguments);
        this.scrollFn = [];
        this.state = {
            _visible: this.props.visible,
            _id: 'id' + Date.now()
        };
    }
    componentDidMount() {
        const _this = this;
        this.node = findPageNode(_this._reactInternalFiber);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            _visible: nextProps.visible
        });
    }
    componentDidUpdate() {
        if (this.scrollFn.length === 0) {
            this.scrollFn.push(this.node._debugOwner.child.stateNode.ctx.onPageScroll);
            this.scrollFn.push((e) => {
                this.hide();
            });
        }
        if (this.state._visible) {
            // node.child.stateNode.cssText = "height: 100vh; overflow: hidden;"
            Taro.nextTick(() => {
                const query = Taro.createSelectorQuery();
                query.select(`#${this.state._id}`).boundingClientRect(rect => {
                    this.props.onRect && this.props.onRect(rect);
                }).exec();
                // const root = this.node._debugOwner.child.stateNode;
                // const ctx = root.ctx;
                // console.log(root, ctx, ctx.getPageId());
                // Taro.createSelectorQuery().select('page').boundingClientRect(rect => {
                //   console.log("page:", rect);
                // }).exec();
            });
            // this.node._debugOwner.child.stateNode.__handlers["touchmove"] = [(e) => {e.stopPropagation();e.preventDefault();}]
            // this.node._debugOwner.child.stateNode.__handlers["scroll"] = [
            //   (e) => {e.preventDefault();e.preventDefault(); console.log("hello, mouse")}
            // ]
            this.node._debugOwner.child.stateNode.ctx.onPageScroll = (e) => {
                this.scrollFn.forEach(item => {
                    item(e);
                });
            };
            //  console.log(this.props.scroll)
            // this.node.child.stateNode.style.height = "100vh";
            // this.node.child.stateNode.style.position = "fixed";
            // this.node.child.stateNode.style.transform = "translateY(-" + this.props.scroll?.scrollTop + "px)";
        }
        else {
            this.node._debugOwner.child.stateNode.ctx.onPageScroll = this.scrollFn[0];
            // this.node.child.stateNode.style.height = "";
            // this.node.child.stateNode.style.position = "";
        }
    }
    hide() {
        this.setState({ _visible: false });
        this.props.onClose && this.props.onClose();
        //  this._reactInternalFiber.pendingProps.visible = false;
    }
    render() {
        // console.log(this.scrollY)
        const { place, mask, contentStyle, animate } = this.props;
        const { _visible, _id } = this.state;
        const contentClassName = ['ol-layer', 'animated', 'ol-pos-rt'];
        place && contentClassName.push('ol-layer__' + (place || 'c'));
        const maskClassName = ['ol-layer  ol-layer__f ol-taro-position__overlayer ol-bg-c_dark'];
        if (mask) {
            maskClassName.push('ol-oc-6');
        }
        else {
            maskClassName.push('ol-oc-0');
        }
        const containerClassName = ['ol-taro-position ol-layers  ol-zi-10'];
        if (!animate) {
            if (place == 'r')
                contentClassName.push('slideInRight');
            if (place == 'l')
                contentClassName.push('slideInLeft');
            if (place == 't')
                contentClassName.push('slideInDown');
            if (place == 'b')
                contentClassName.push('slideInUp');
        }
        else {
            contentClassName.push(animate);
        }
        return (_visible ?
            React.createElement(View, { className: containerClassName.join(' ') },
                React.createElement(View, { className: maskClassName.join(' '), onClick: this.hide.bind(this) }),
                React.createElement(View, { className: contentClassName.join(" "), style: contentStyle, id: _id }, this.props.children)) : '');
    }
}
Position.defaultProps = {
    onClose() {
        //这种是强制性改变状态
        this.children._owner.stateNode.setState({ _visible: false });
    }
};
//# sourceMappingURL=index.js.map