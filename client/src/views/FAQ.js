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
    return faqs.map(({ answer, question }, i) => <FAQRow key={i} answer={answer} question={question} />)
  }

  return (
    <>
      <h3 className="heading">FAQs</h3>
      {user
        ? <button onClick={() => setEditModal(prevModal => ({ ...prevModal, isOpen: true }))}>Add New FAQ</button>
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
