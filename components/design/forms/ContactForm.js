
import { useState } from "react";
import { useResumeInfo } from "../../../context/ResumeInfo";

const ContactForm = () => {
  const { contact, setContact } = useResumeInfo()

  const updateData = (e, propertyName) => {
    setContact({ ...contact, [propertyName]: e })

  }
  return (
    <div className="flex w-100 mb-3">
      <div className="flex flex-col w-1/2 pr-3">
        <span className="mb-2">Email</span>
        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'email')} value={contact.email} type="text" placeholder="email" />
      </div>
      <div className="flex flex-col w-1/2 pr-3">
        <span className="mb-2">Phone Number</span>
        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'number')} value={contact.number} type="text" placeholder="+999999999" />

      </div>
    </div>
  );
};

export default ContactForm;
