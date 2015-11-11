/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
* @providesModule ActionSheet
* @flow-weak
*/
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    View,
} = React;

var Button = require('./button.js');
var Overlay = require('./overlay.js');
var Sheet = require('./sheet.js');

module.exports =  React.createClass({
    getDefaultProps: function() {
        return {
            cancelText: 'Cancel',
        };
    },
    render() {
        return (
            <Overlay visible={this.props.visible}>
                <View style={styles.actionSheetContainer}>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={this.props.onCancel}>
                    </TouchableOpacity>
                    <Sheet visible={this.props.visible}>
                        <View style={styles.buttonContainer}>
                            {this.props.children}
                        </View>
                        <Button
                            buttonStyle={{marginTop:6, borderRadius:6}}
                            textStyle={{color:'red'}}
                            onPress={this.props.onCancel}>{this.props.cancelText}</Button>
                    </Sheet>
                </View>
            </Overlay>
        );
    },
});
module.exports.Button = Button;

var styles = StyleSheet.create({
    actionSheetContainer: {
        flex: 1,
        padding: 10,
        paddingBottom: 6,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
        borderRadius:6,
        overflow: 'hidden',
    }
});
