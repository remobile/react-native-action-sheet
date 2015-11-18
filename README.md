# React Native ActionSheet (remobile)
A pure js ActionSheet like ios ActionSheet, support ios and android

## Installation
```sh
npm install @remobile/react-native-action-sheet --save
```

## Usage

### Example
```js
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    View,
} = React;

var ActionSheet = require('@remobile/react-native-action-sheet');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    getInitialState() {
        return {
            show: false
        };
    },
    onCancel() {
        this.setState({show:false});
    },
    onOpen() {
        this.setState({show:true});
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.onOpen}>Photo</Button>
                <ActionSheet
                    visible={this.state.show}
                    onCancel={this.onCancel} >
                    <ActionSheet.Button>Capture</ActionSheet.Button>
                    <ActionSheet.Button>Photo</ActionSheet.Button>
                    <ActionSheet.Button>Camera</ActionSheet.Button>
                </ActionSheet>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});
```

## Screencasts

![loading](https://github.com/remobile/react-native-action-sheet/blob/master/screencasts/demo.gif)

##ActionSheet
#### Props
- `visible : PropTypes.boolean.isRequired` - must use state to control ActionSheet visible
- `onCancel : PropTypes.func.isRequired` - use to hide ActionSheet
- `cancelText : PropTypes.string` - default is 'Cancel'

##ActionSheet.Button
#### Props
- `buttonStyle : TouchableOpacity.propTypes.style` - set button style
- `textStyle : Text.propTypes.style` - set button text style
- `onPress : PropTypes.func` - callback for button click
