
import { useState } from "react";
import { useResumeInfo } from "../../context/ResumeInfo";

const ContactForm = () => {
  const { contact, setContact } = useResumeInfo()
  const [formData, setFormData] = useState({})
  const updateData = (e, propertyName) => {
    setFormData({ ...formData, [propertyName]: e })
    setContact({ ...contact, ...formData })
  }
  return (
    <div className="flex w-100 mb-3">
      <div className="flex flex-col w-1/2 pr-3">
        <span className="mb-2">Email</span>
        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'email')} type="text" placeholder="email" />
      </div>
      <div className="flex flex-col w-1/2 pr-3">
        <span className="mb-2">Phone Number</span>
        <input className="border rounded h-10 p-3" onChange={(e) => updateData(e.target.value, 'number')} type="text" placeholder="+999999999" name="lastName" />

      </div>
    </div>
  );
};

export default ContactForm;
