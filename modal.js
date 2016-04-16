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
    this.setState({modalVisible: true});
  }
  hide() {
    this.setState({sheetVisible: false});
    //allow ActionSheet to slide down animation to be seen before hiding modal

    setTimeout(() => {
      this.setState({modalVisible: false}, () => {
        //If props.onCancel sets this.props.visible === false, this.hide() will be called 2x, but it doesn't really matter, since the sheet is already hidden.
        //I was tempted to set the onCancel prop of <ActionSheet /> to: onCancel={this.props.onCancel || this.hide.bind(this)}
        //but I rather just provide stable somewhat imperative behavior where it always closes when you press the Cancel button, whether you provide
        //onCancel as a prop or not, as it's unknown whether the user will use onCancel to actually toggle the ActionSheet's visibilty or perhaps
        //only for other application-specific purposes. So this.hide() potentially being called twice is the tradeoff for guaranteeing it closes as user's
        //still coming from the imperative style will often expect.
        this.props.onCancel && this.props.onCancel();
      });
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
            onCancel={this.hide.bind(this)}
            cancelText={this.props.cancelText}
          >
            {this.props.children}
          </ActionSheet>
      </Modal>
    );
  }
}

ModalActionSheet.Button = ActionSheet.Button;
