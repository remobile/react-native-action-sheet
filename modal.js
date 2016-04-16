import React, {Modal}  from 'react-native';
import ActionSheet from './sheet.js';


/**
The idea behind this thin wrapper is that it allows you to put action sheet's anywhere in your component tree,
not just in a component that consumes the entire screen. It's supposed to be a drop-in replacement for plain
ActionSheet. 
**/

export default class ModalActionSheet extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalVisible: this.props.visible || false,
      sheetVisible: false,
    }
  }

  show() {
    this.setState({modalVisible: true});
  }
  hide() {
    this.setState({modalVisible: false});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.visible && !this.props.visible) this.show();
    else if(!nextProps.visible && this.props.visible) this.hide();
  }

  render() {
    return (
      <Modal
        animated={false}
        transparent={true}
        visible={this.state.modalVisible}
        onShow={() => this.setState({sheetVisible: true})}
        onDismiss={() => this.setState({sheetVisible: false})}
      >
          <ActionSheet
            visible={this.state.sheetVisible}
            onCancel={this.props.onCancel}
            cancelText={this.props.cancelText}
          >
            {this.props.children}
          </ActionSheet>
      </Modal>
    );
  }
}

ModalActionSheet.Button = ActionSheet.Button;
