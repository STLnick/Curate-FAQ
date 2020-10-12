import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root')

export const DeleteModal = ({ modal, closeModal, handleConfirm }) => {
  return (
    <Modal
      isOpen={modal.isOpen}
      onRequestClose={() => closeModal('delete')}
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
      <div className="modal-form flex flex--column flex--align-center flex--justify-around">
        {modal.error ? <p className="error">{modal.error}</p> : null}
        <h2 className="md-text">Are you sure you want to delete this FAQ?</h2>
        <button className="btn outline-btn primary-fill" onClick={() => closeModal('delete')}>Cancel</button>
        <button className="btn delete-btn" onClick={handleConfirm}>Delete</button>
      </div>
    </Modal>
  )
}
