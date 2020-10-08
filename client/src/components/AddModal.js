import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root')

export const AddModal = ({ modal, closeModal, handleConfirm }) => {
  return (
    <Modal
      isOpen={modal.isOpen}
      onRequestClose={() => closeModal('add')}
      style={{
        content: {
          height: '275px',
          left: '50%',
          top: '25%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
        }
      }}
    >
      <form
        className="modal-form flex flex--column flex--align-center flex--justify-around"
        onSubmit={(e) => handleConfirm(e)}
      >
        {modal.error ? <p className="error">{modal.error}</p> : null}
        <label htmlFor="question">Question</label>
        <textarea className="input edit-textarea" id="question" type="text" />
        <label htmlFor="answer">Answer</label>
        <textarea className="input edit-textarea" id="answer" type="text" />
        <button type="button btn outline-btn" onClick={() => closeModal('add')}>Cancel</button>
        <button className="btn cta-btn" type="submit">Add</button>
      </form>
    </Modal>
  )
}
