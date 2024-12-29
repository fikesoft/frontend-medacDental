import React, { useState, useEffect } from 'react';
import AppointmentElement from './AppointmentElement';
import '../../../css/body/appointment-page/appointment.scss';

export const Appointment = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData')) || [];
    setSubmissions(savedData);
  }, []);

  const handleEdit = (updatedData) => {
    const updatedSubmissions = submissions.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem('formData', JSON.stringify(updatedSubmissions));
  };

  const handleDelete = (id) => {
    const updatedSubmissions = submissions.filter((item) => item.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('formData', JSON.stringify(updatedSubmissions));
  };

  return (
    <div className="appointment">
      <h1 className="title">Your Appointments</h1>
      <div className="appointment-container">
        {submissions.length > 0 ? (
          submissions.map((element) => (
            <AppointmentElement
              key={element.id}
              appointmentData={element}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No Appointments Found</p>
        )}
      </div>
    </div>
  );
  
};

export default Appointment;
