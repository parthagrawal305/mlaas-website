'use client';

import { useState } from 'react';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [ticketId, setTicketId] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');

    try {
      const res = await fetch('/api/notion-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          volume: formData.get('amount'),
          brief: formData.get('message')
        })
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('Submission error', data);
        setStatus('error');
        alert('Something went wrong while securing your inquiry. Please try again or contact us directly.');
        return;
      }

      setTicketId(data.ticketId || null);
      setStatus('success');
      form.reset();

      // Show modal
      const modal = document.getElementById('success-modal');
      const refIdElement = document.getElementById('ref-id');
      if (modal && refIdElement) {
        refIdElement.textContent = data.ticketId || 'N/A';
        modal.classList.add('active');
      }
    } catch (e) {
      console.error(e);
      setStatus('error');
      alert('Network issue while sending your inquiry. Please try again.');
    } finally {
      setStatus('idle');
    }
  }

  return (
    <>
      <section className="cta" id="contact">
        <div className="cta-bg">
          <div className="cta-gradient"></div>
        </div>
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Assets?</h2>
            <p className="cta-subtitle">
              Take the first step toward financial freedom. Our team is standing by
              for a confidential consultation. All inquiries are encrypted and handled
              with absolute discretion.
            </p>
            <form className="cta-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">How should we address you?</label>
                  <input type="text" id="name" name="name" placeholder="Name or alias" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Secure contact method</label>
                  <input type="email" id="email" name="email" placeholder="Email or ProtonMail" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="amount">Estimated restructuring volume</label>
                <select id="amount" name="amount" required>
                  <option value="">Select range</option>
                  <option value="$1M - $10M">$1M - $10M</option>
                  <option value="$10M - $50M">$10M - $50M</option>
                  <option value="$50M - $100M">$50M - $100M</option>
                  <option value="$100M - $500M">$100M - $500M</option>
                  <option value="$500M+">$500M+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Brief description of your situation</label>
                <textarea id="message" name="message" rows={4} placeholder="Asset types, timeline, specific concerns..."></textarea>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">
                  I understand this communication is confidential and consent to
                  secure contact from MLAAS representatives.
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-large" disabled={status === 'submitting'}>
                <span>{status === 'submitting' ? 'Processing securely...' : 'Send Secure Inquiry'}</span>
                {status !== 'submitting' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <div className="modal" id="success-modal">
        <div className="modal-overlay" onClick={() => {
          const modal = document.getElementById('success-modal');
          if (modal) modal.classList.remove('active');
        }}></div>
        <div className="modal-content">
          <div className="modal-icon">✓</div>
          <h3 className="modal-title">Inquiry Received</h3>
          <p className="modal-text">
            Your secure inquiry has been transmitted. A member of our team
            will contact you within 24-48 hours via your preferred method.
            <br /><br />
            <strong>Reference ID:</strong> <span id="ref-id"></span>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              const modal = document.getElementById('success-modal');
              if (modal) modal.classList.remove('active');
            }}
          >
            Understood
          </button>
        </div>
      </div>
    </>
  );
}
