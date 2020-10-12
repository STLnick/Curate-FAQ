import React from 'react'

export const FAQRow = ({ answer, question }) => {
  return (
    <div className="faq-row">
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </div>
  )
}
