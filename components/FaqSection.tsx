'use client';

import { useState } from 'react';

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you ensure complete confidentiality?",
      answer: "Our infrastructure is built on zero-knowledge architecture. Client identities are compartmentalized — no single team member has access to complete information. Communications are end-to-end encrypted with automatic deletion. We operate from jurisdictions with no information sharing agreements. In 37 years, we have never had a breach or disclosure — this is our core competency."
    },
    {
      question: "What is the minimum amount you handle?",
      answer: "Our services begin at $1M USD equivalent. This threshold ensures our full infrastructure and expertise can be properly deployed for your situation. For amounts below this, the fixed costs of proper structuring would result in unfavorable economics. We're happy to discuss timing if you anticipate reaching this threshold."
    },
    {
      question: "How long does the process typically take?",
      answer: "Standard restructuring takes 2-8 weeks depending on volume and complexity. Rush services are available for qualified amounts at premium rates. We can process up to $50M within 72 hours for emergency situations. Cryptocurrency conversions can complete in as little as 48 hours for smaller amounts."
    },
    {
      question: "What forms of initial assets do you accept?",
      answer: "We handle all major forms: physical cash (any currency), cryptocurrency (BTC, ETH, and privacy coins), wire transfers, existing business revenue, and high-value physical assets (art, precious metals, etc.). Our intake procedures vary by type — physical assets require in-person coordination with our logistics team."
    },
    {
      question: "What happens if there's an investigation?",
      answer: "Our structures are designed to withstand scrutiny. Each layer is a legitimate entity in a sovereign jurisdiction with no obligation to share information. Your restructured assets come with comprehensive documentation explaining their legitimate origins. Enterprise and Sovereign tier clients receive legal defense consultation as part of their package. We've successfully defended our structures against inquiries from multiple international agencies."
    },
    {
      question: "How do I know this isn't a trap or scam?",
      answer: "We understand your caution — it's warranted in this industry. We operate exclusively on referral and verified inquiry. Initial consultations involve mutual verification. We never request asset transfer until trust is established. Our 37-year track record speaks for itself. We can provide references from existing clients in similar situations upon verified inquiry."
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">Your Concerns, Addressed</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
