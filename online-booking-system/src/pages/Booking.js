import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Booking = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/api/cars/');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars', error);
      }
    };
    fetchCars();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingData = {
        car: selectedCar,
        customer_name: customerName,
        start_date: startDate,
        end_date: endDate
      };
      const response = await api.post('/api/bookings/', bookingData);
      navigate('/confirmation', { state: { booking: response.data } });
    } catch (error) {
      console.error('Error submitting booking', error);
    }
  };

  return (
    <div>
      <h1>Book a Car</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Car:</label>
          <select value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)} required>
            <option value="">Select a car</option>
            {cars.map(car => (
              <option key={car.id} value={car.id}>
                {car.model} - ${car.price_per_day} per day
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;
