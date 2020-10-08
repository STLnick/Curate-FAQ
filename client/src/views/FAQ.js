import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { FAQRow } from '../components';
import { UserContext } from 'UserContext';
import api from 'api';

const faqAPI = api('faqs');

Modal.setAppElement('#root')

export const FAQ = () => {
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

  const handleAddFaq = async (e) => {
    e.preventDefault();

    // Get info from fields
    const newFaq = Array.from(e.target.elements).filter(el => el.id).reduce((acc, el) => {
      acc[el.id] = el.value;
      return acc;
    }, {})

    // Add FAQ to database
    try {
      const response = await faqAPI.create(newFaq);
      // Attach MongoDB _id to FAQ object
      newFaq._id = response.insertedId;

      // Add FAQ to local state
      setFaqs(prevFaqs => [...prevFaqs, newFaq]);

      // Close Modal
      setEditModal(prevModal => ({ ...prevModal, isOpen: false }))
    } catch (err) {
      setEditModal(prevModal => ({ ...prevModal, error: err }));
    }
  }

  const renderFaqs = () => {
    return faqs.map(({ answer, question }, i) => <div key={i} className="faqs flex flex--align-center">
      <FAQRow answer={answer} question={question} />
      {user
        ? <div className="faq-btns flex flex--column flex--align-center flex--justify-center">
          <button className="btn outline-btn primary-fill small-btn fixed-btn">Edit</button>
          <button className="btn delete-btn small-btn fixed-btn">Delete</button>
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
          onClick={() => setEditModal(prevModal => ({ ...prevModal, isOpen: true }))}
        >
          Add New FAQ
        </button>
        : null}
      <Modal
        isOpen={editModal.isOpen}
        onRequestClose={() => setEditModal(prevModal => ({ ...prevModal, isOpen: false }))}
      >
        <form onSubmit={(e) => handleAddFaq(e)}>
          {editModal.error ? <p className="error">{editModal.error}</p> : null}
          <label htmlFor="question">Question</label>
          <input className="input" id="question" type="text" />
          <label htmlFor="answer">Answer</label>
          <input className="input" id="answer" type="text" />
          <button className="btn cta-btn" type="submit">Add</button>
        </form>
      </Modal>
      <div>
        {renderFaqs()}
      </div>
    </>
  )
}
