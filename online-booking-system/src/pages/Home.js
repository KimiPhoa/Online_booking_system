import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import api from '../api';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/api/cars/');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h1>Available Cars</h1>
      <div className="car-list">
        {cars.map(car => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;