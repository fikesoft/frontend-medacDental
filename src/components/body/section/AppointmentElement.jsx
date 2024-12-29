import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Dialog, TextField, Button } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

const AppointmentElement = ({ appointmentData, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({ ...appointmentData });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (newDate) => {
    setEditData((prev) => ({
      ...prev,
      dateTime: newDate ? newDate.toISOString() : null, // Convert to string
    }));
  };

  const handleSave = () => {
    onEdit(editData);
    handleClose();
  };

  return (
    <div className="appointment-element">
      <div className="appointment-details">
        <p><strong>ID:</strong> {appointmentData.id}</p>
        <p><strong>Name:</strong> {appointmentData.firstName} {appointmentData.lastName}</p>
        <p><strong>Email:</strong> {appointmentData.email}</p>
        <p><strong>Phone:</strong> {appointmentData.phone}</p>
        <p><strong>Date-Time:</strong> {dayjs(appointmentData.dateTime).format('MMMM D, YYYY, h:mm A')}</p>
        <p><strong>Message:</strong> {appointmentData.message}</p>
      </div>
      <div className="appointment-actions">
        <IconButton aria-label="edit" onClick={handleOpen}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => onDelete(appointmentData.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </div>

      {/* Edit Dialog */}
      <Dialog open={open} onClose={handleClose} >
        <div className="dialog-content p-5" >
          <h3>Edit Appointment</h3>
          <TextField
            label="First Name"
            name="firstName"
            value={editData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={editData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={editData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={editData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {/* Date & Time */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Date & Time"
              value={editData.dateTime ? dayjs(editData.dateTime) : null} 
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
          </LocalizationProvider>
          <TextField
            label="Message"
            name="message"
            value={editData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

AppointmentElement.propTypes = {
  appointmentData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    dateTime: PropTypes.string, 
    message: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AppointmentElement;
