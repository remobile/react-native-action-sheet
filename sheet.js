/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
*/
'use strict';

import React from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';

const DEFAULT_BOTTOM = -300;
const DEFAULT_ANIMATE_TIME = 300;

module.exports = React.createClass({
    getInitialState: function() {
        return {
            bottom: new Animated.Value(DEFAULT_BOTTOM)
        };
    },
    componentWillReceiveProps: function(newProps) {
        return Animated.timing(this.state.bottom, {
            toValue: newProps.visible ? 0 : DEFAULT_BOTTOM,
            duration: DEFAULT_ANIMATE_TIME
        }).start();
    },

    render: function() {
        return (
            <Animated.View style={{bottom: this.state.bottom}}>
                {this.props.children}
            </Animated.View>
        );
    }
});
