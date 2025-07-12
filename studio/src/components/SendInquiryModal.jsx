import React, { useState } from "react";

const SendInquiryModal = ({ photographerName }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = () => {
    alert(`Inquiry sent to ${photographerName}`);
    setOpen(false);
  };

  return (
    <div className="inquiry-modal">
      <button onClick={() => setOpen(true)}>Send Inquiry</button>
      {open && (
        <div className="modal-content">
          <h2>Send Inquiry to {photographerName}</h2>
          <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
          <button onClick={handleSubmit}>Send</button>
          <button onClick={() => setOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};
export default SendInquiryModal;
