import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { AddModal, DeleteModal, EditModal, FAQRow } from '../components';
import { UserContext } from 'UserContext';
import api from 'api';

const faqAPI = api('faqs');

Modal.setAppElement('#root')

export const FAQ = () => {
  const [addModal, setAddModal] = useState({
    isOpen: false,
    error: ''
  })
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    currentIdToDelete: null,
    error: ''
  })
  const [editModal, setEditModal] = useState({
    isOpen: false,
    currentItemToEdit: {},
    error: ''
  })
  const [faqs, setFaqs] = useState([]);

  const { user } = useContext(UserContext);


  useEffect(() => {
    (async () => {
      setFaqs(await faqAPI.show());
    })()
  }, []);

  const closeModal = (option) => {
    switch (option) {
      case 'add':
        setAddModal(prevModal => ({ ...prevModal, isOpen: false }))
        break;
      case 'delete':
        setDeleteModal(prevModal => ({ ...prevModal, isOpen: false }))
        break;
      case 'edit':
        setEditModal(prevModal => ({ ...prevModal, isOpen: false }))
        break;
    }
  }

  const handleAddFaqSubmit = async (e) => {
    e.preventDefault();

    // Get info from fields
    const newFaq = Array.from(e.target.elements).filter(el => el.id).reduce((acc, el) => {
      acc[el.id] = el.value;
      return acc;
    }, {})

    try {
      // Add FAQ to database
      const response = await faqAPI.create(newFaq);
      // Attach MongoDB _id to FAQ object
      newFaq._id = response.insertedId;
      // Add FAQ to local state
      setFaqs(prevFaqs => [...prevFaqs, newFaq]);
      // Close Modal
      setAddModal(prevModal => ({ ...prevModal, error: '', isOpen: false }));
    } catch (err) {
      setAddModal(prevModal => ({ ...prevModal, error: err }));
    }
  }

  const handleDeleteClick = (e) => {
    const targetId = e.target.closest('button').dataset.id;
    setDeleteModal(prevModal => ({ currentIdToDelete: targetId, isOpen: true }));
  }

  const handleDeleteConfirm = async () => {
    try {
      // Delete from db
      await faqAPI.delete({ _id: deleteModal.currentIdToDelete });
      // Remove from state
      setFaqs(prevFaqs => prevFaqs.filter(faq => faq._id !== deleteModal.currentIdToDelete))
      // Close Modal
      setDeleteModal(prevModal => ({ ...prevModal, error: '', isOpen: false }))
    } catch (err) {
      setDeleteModal(prevModal => ({ ...prevModal, error: err }))
    }
  }

  const handleEditClick = (e) => {
    const targetId = e.target.closest('button').dataset.id;
    const clickedItemToEdit = faqs.find(faq => faq._id === targetId);
    setEditModal({ isOpen: true, currentItemToEdit: clickedItemToEdit });
  }

  const handleEditFaqSubmit = async (e) => {
    e.preventDefault();

    // Get info from fields
    const updatedFaq = Array.from(e.target.elements).filter(el => el.id).reduce((acc, el) => {
      acc[el.id] = el.value;
      return acc;
    }, {})
    // Attach MongoDB _id
    updatedFaq._id = editModal.currentItemToEdit._id;

    try {
      // Update in database
      await faqAPI.update(updatedFaq);
      // Update in state
      setFaqs(prevFaqs => prevFaqs.map(faq => faq._id === updatedFaq._id ? updatedFaq : faq))
      // Close Modal
      setEditModal(prevModal => ({ ...prevModal, error: '', isOpen: false }))
    } catch (err) {
      setEditModal(prevModal => ({ ...prevModal, error: err }))
    }
  }

  const renderFaqs = () => {
    return faqs.map(({ _id, answer, question }, i) => <div key={i} className="faqs flex flex--align-center">
      <FAQRow answer={answer} question={question} />
      {user
        ? <div className="faq-btns flex flex--column flex--align-center flex--justify-center">
          <button
            className="btn outline-btn primary-fill small-btn fixed-btn"
            data-id={_id}
            onClick={(e) => handleEditClick(e)}
          >
            Edit
          </button>
          <button
            className="btn delete-btn small-btn fixed-btn"
            data-id={_id}
            onClick={(e) => handleDeleteClick(e)}
          >
            Delete
          </button>
        </div>
        : null}
    </div>)
  }

  return (
    <>
      <h3 className="heading">FAQs</h3>
      {user
        ? <button
          className="btn cta-btn add-btn"
          onClick={() => setAddModal(prevModal => ({ ...prevModal, isOpen: true }))}
        >
          Add New FAQ
        </button>
        : null}
      <Modal
        isOpen={addModal.isOpen}
        onRequestClose={() => setAddModal(prevModal => ({ ...prevModal, isOpen: false }))}
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
          onSubmit={(e) => handleAddFaqSubmit(e)}
        >
          {addModal.error ? <p className="error">{addModal.error}</p> : null}
          <label htmlFor="question">Question</label>
          <textarea className="input edit-textarea" id="question" type="text" />
          <label htmlFor="answer">Answer</label>
          <textarea className="input edit-textarea" id="answer" type="text" />
          <button type="button btn outline-btn" onClick={() => setAddModal(prevModal => ({ ...prevModal, isOpen: false }))}>Cancel</button>
          <button className="btn cta-btn" type="submit">Add</button>
        </form>
      </Modal>
      <Modal
        isOpen={editModal.isOpen}
        onRequestClose={() => setEditModal(prevModal => ({ ...prevModal, isOpen: false }))}
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
          onSubmit={(e) => handleEditFaqSubmit(e)}
        >
          {editModal.error ? <p className="error">{editModal.error}</p> : null}
          <label htmlFor="question">Question</label>
          <textarea
            className="input edit-textarea"
            defaultValue={editModal.currentItemToEdit?.question}
            id="question"
            type="text"
          />
          <label htmlFor="answer">Answer</label>
          <textarea
            className="input edit-textarea"
            defaultValue={editModal.currentItemToEdit?.answer}
            id="answer"
            type="text"
          />
          <button className="btn outline-btn primary-fill" type="button" onClick={() => setEditModal(prevModal => ({ ...prevModal, isOpen: false }))}>Cancel</button>
          <button className="btn cta-btn" type="submit">Confirm Changes</button>
        </form>
      </Modal>
      <DeleteModal modal={deleteModal} closeModal={closeModal} handleConfirm={handleDeleteConfirm} />
      <div>
        {renderFaqs()}
      </div>
    </>
  )
}
