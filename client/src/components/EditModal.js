import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root')

export const EditModal = ({ modal, closeModal, handleConfirm }) => {
  return (
    <Modal
      isOpen={modal.isOpen}
      onRequestClose={() => closeModal('edit')}
      style={{
        content: {
          height: '375px',
          left: '50%',
          top: '25%',
          transform: 'translate(-50%, -50%)',
          width: '250px',
        }
      }}
    >
      <form
        className="modal-form flex flex--column flex--align-center flex--justify-around"
        onSubmit={(e) => handleConfirm(e)}
      >
        {modal.error ? <p className="error">{modal.error}</p> : null}
        <label htmlFor="question">Question</label>
        <textarea
          className="input edit-textarea"
          defaultValue={modal.currentItemToEdit?.question}
          id="question"
          type="text"
        />
        <label htmlFor="answer">Answer</label>
        <textarea
          className="input edit-textarea"
          defaultValue={modal.currentItemToEdit?.answer}
          id="answer"
          type="text"
        />
        <button className="btn outline-btn primary-fill" type="button" onClick={() => closeModal('edit')}>Cancel</button>
        <button className="btn cta-btn" type="submit">Confirm Changes</button>
      </form>
    </Modal>
  )
}
