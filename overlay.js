/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
*/
'use strict';

import React from 'react'
import { Animated, StyleSheet, View, Dimensions} from 'react-native';

const DEFAULT_ANIMATE_TIME = 300;

module.exports = React.createClass({
    getInitialState() {
        return {
            fadeAnim: new Animated.Value(0),
            overlayStyle: styles.emptyOverlay, //on android opacity=0 also can cover screen, so use overlayStyle fix it
        };
    },
    onAnimatedEnd() {
        !this.props.visible&&this.setState({overlayStyle:styles.emptyOverlay});
    },
    componentWillReceiveProps(newProps) {
        newProps.visible&&this.setState({overlayStyle: styles.fullOverlay});
        return Animated.timing(this.state.fadeAnim, {
            toValue: newProps.visible ? 1 : 0,
            duration: DEFAULT_ANIMATE_TIME
        }).start(this.onAnimatedEnd);
    },

    render() {
        return (
            <Animated.View style={[this.state.overlayStyle, {opacity: this.state.fadeAnim}]}>
                {this.props.children}
            </Animated.View>
        );
    }
});

var styles = StyleSheet.create({
    fullOverlay: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        position: 'absolute'
    },
    emptyOverlay: {
        backgroundColor: 'transparent',
        position: 'absolute'
    }
});
