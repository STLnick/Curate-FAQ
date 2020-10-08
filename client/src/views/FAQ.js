import React, { useEffect, useState } from 'react';

import { FAQRow } from '../components';
import api from 'api';

const faqAPI = api('faqs');

export const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    (async () => {
      setFaqs(await faqAPI.show());
    })()
  }, []);

  const renderFaqs = () => {
    return faqs.map(({ answer, question }) => <FAQRow answer={answer} question={question} />)
  }

  return (
    <div>
      <h3 className="heading">FAQs</h3>
      {renderFaqs()}
    </div>
  )
}
