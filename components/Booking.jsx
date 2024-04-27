import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
    licensePlate: '',
  });

  const handleServiceToggle = (service) => {
    const isSelected = selectedServices.includes(service);

    if (isSelected) {
      setSelectedServices(selectedServices.filter((selected) => selected !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo({
      ...vehicleInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle service request submission logic here
    console.log('Service request submitted:', { selectedServices, vehicleInfo });
  };

  return (
    <div className="service-container">
      <form onSubmit={handleSubmit}>
        <div className="services">
          <table className='transparent-table'>
            <tbody>
                <tc className='transparent-row'>
                    <td className='transparent-cell'>
          <label>
            <input
              type="checkbox"
              checked={selectedServices.includes('oilChange')}
              onChange={() => handleServiceToggle('oilChange')}
            />
          </label>
          </td>
          <td>

          <label>
            
            <input
              type="checkbox"
              checked={selectedServices.includes('TireRotation')}
              onChange={() => handleServiceToggle('TyreRotation')}
              />
              </label>
              </td>
          <td>
          <label>
            
            
            <input
              type="checkbox"
              checked={selectedServices.includes('TireRotation')}
              onChange={() => handleServiceToggle('TyreRotation')}
              />
              </label>
              </td>
              </tc>
              </tbody>
              </table>
          {/* Add more service options here */}
        </div>
        <div className="vehicle-info">
          <label>
            Make:
            <br></br>
            <input type="text" name="make" value={vehicleInfo.make} onChange={handleInputChange} />
          </label>
          <br></br>
          <label>
            Model:
            <br></br>
            <input type="text" name="model" value={vehicleInfo.model} onChange={handleInputChange} />
          </label>
          <br></br>
          <label>
            Year:
            <br></br>
            <input type="text" name="year" value={vehicleInfo.year} onChange={handleInputChange} />
          </label>
          <br></br>
          <label>
            <br></br>
            <input
              type="text"
              name="licensePlate"
              value={vehicleInfo.licensePlate}
              onChange={handleInputChange}
            />
          </label>
          
        </div>
        <button type="submit">Submit Service Request</button>
      </form>
    </div>
  );
};

export default Booking;