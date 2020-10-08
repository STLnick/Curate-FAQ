import React from 'react';

import api from 'api';

const faqAPI = api('faqs');

export const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    (async () => {
      setFaqs(await faqAPI.show());
    })()
  }, []);

export const FAQ = () => {
  return (
    <div>
      FAQs here...
    </div>
  )
}
