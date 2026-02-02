import React from 'react';

const faqs = [
  {
    question: "Is the upgrade price valid for ChessBase 17 users?",
    answer: "No. The special upgrade price is exclusively available for owners of ChessBase 18. Owners of ChessBase 17 and older versions must purchase the CB'26 single program or a CB'26 program package."
  },
  {
    question: "What does the 1-Year Premium Account include?",
    answer: "The Premium Account included with ChessBase '26 is valid for 1 full year. It gives you access to the free 4-CPU remote engine, Playchess server, Tactics training, Cloud databases, and the video portal with thousands of training videos."
  },
  {
    question: "What are the system requirements?",
    answer: "Minimum: Desktop PC or Notebook, 4 Threads, 8 GB RAM, Windows 11, Internet access. Recommended: Intel core i7 or AMD Ryzen Processor with 8 Threads, 16 GB RAM, Windows 11, full HD Monitor and Internet access."
  },
  {
    question: "Does Consult AI require an internet connection?",
    answer: "Yes. Consult AI uses cloud-based models powered by Fritz engine technology for verbal explanations. Standard engine analysis runs locally and offline."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__header">
          <h2 className="faq__title">
            Frequently Asked Questions
            <div className="faq__title-underline"></div>
          </h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details key={index} className="faq__item">
              <summary className="faq__summary">
                <span className="faq__question">{faq.question}</span>
                <span className="faq__icon">▼</span>
              </summary>
              <div className="faq__answer">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
