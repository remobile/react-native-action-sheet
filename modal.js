import React, {Modal}  from 'react-native';

import ActionSheet from '@remobile/react-native-action-sheet';

//The idea behind this thin wrapper is that it allows you to put action sheet's anywhere in your component tree,
//not just in a component that consumes the entire screen.

export default class ModalActionSheet extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalVisible: this.props.visible || false,
      sheetVisible: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.visible && !this.props.visible) this.show();
    else if(!nextProps.visible && this.props.visible) this.hide();
  }

  show() {
    console.log('SHOW')
    this.setState({modalVisible: true});
  }
  hide() {
    this.setState({sheetVisible: false});
    //allow ActionSheet to slide down animation to be seen before hiding modal

    setTimeout(() => {
      this.setState({modalVisible: false});
    }, 300);
  }

  render() {
    return (
      <Modal
        animated={false}
        transparent={true}
        visible={this.state.modalVisible}
        onShow={() => this.setState({sheetVisible: true})}
        //onDismiss={this.onDismiss} //not working in RN 22, so timers used instead; ideally onDismiss and onCancel are used in combination similar to onShow/show; perhaps in RN 23+ when onRequestClose works
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
