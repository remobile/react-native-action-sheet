/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
*/
'use strict'

var React = require('react');
var ReactNative = require('react-native');
var { StyleSheet, Text, TouchableOpacity, View } = ReactNative;

module.exports = React.createClass({
    render: function() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.button, this.props.buttonStyle]}
                onPress={this.props.onPress}>
                <Text style={[styles.buttonText, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
});

var styles = StyleSheet.create({
    buttonText: {
        color: '#0069d5',
        alignSelf: 'center',
        fontSize: 18
    },
    button: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});
