import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import Table from './component/Table';

function App() {
  const initialCargoList = [
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "Ожидает отправки",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24"
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26"
    }
  ];

  const [cargoList, setCargoList] = useState(initialCargoList);
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    destination: '',
    departureDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCargo = (e) => {
    e.preventDefault();

    const newCargo = {
      ...formData,
      id: `CARGO${cargoList.length + 1}`,
      status: "Ожидает отправки",
    };

    setCargoList((prevList) => [...prevList, newCargo]);
    setFormData({ name: '', origin: '', destination: '', departureDate: '' });
  };

  console.log(cargoList);

  return (
    <div className="App">
      <div className="container">
        <Form
          formData={formData}
          handleChange={handleChange}
          handleAddCargo={handleAddCargo} // Передаем обработчик добавления
        />
        <Table
          cargoList={cargoList}
          setCargoList={setCargoList}
        />
      </div>
    </div>
  );
}

export default App;
