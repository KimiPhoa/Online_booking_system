import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirm = () => {
  const location = useLocation();
  const { booking } = location.state || {};

  if (!booking) {
    return <div>No booking details available.</div>;
  }

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Your booking has been confirmed!</p>
      <div>
        <h3>Booking Details</h3>
        <p><strong>Booking Number:</strong> {booking.booking_no}</p>
        <p><strong>Customer Name:</strong> {booking.customer_name}</p>
        <p><strong>Vehicle Number:</strong> {booking.plate_no}</p>
        <p><strong>Specifications:</strong> {booking.specifications}</p>
        <p><strong>Rental Rate:</strong> {booking.start_date}</p>
        <p><strong>Rental Period:</strong> {booking.start_date} - {booking.end_date}</p>
      </div>
    </div>
  );
};

export default Confirm;
