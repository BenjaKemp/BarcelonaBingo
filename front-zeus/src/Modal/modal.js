import React from 'react';
import Modal from 'react-modal';
import { connect } from "react-redux";
import {closeModal} from '../actions'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement(root)


 class myModal extends React.Component {
  constructor(props) {
    super();



    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }




  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.close()
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.props.close}>close</button>
        <h1>{this.props.message}</h1>
          <form>
            <input />
          </form>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {

    modalIsOpen: state.modalInfo.modalIsOpen,
    message: state.modalInfo.message

  };
}

export default connect(mapStateToProps)(myModal)
