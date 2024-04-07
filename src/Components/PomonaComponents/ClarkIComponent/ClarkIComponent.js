import React, { useState } from 'react';
import SecondFloorButton from './PomonaComponents/SecondFloorButton.png';
import FirstFloorButton from './PomonaComponents/FirstFloorButton.png';
import ClarkIFirstFloorImage from './ClarkIFirstFloor.jpg';
import ClarkISecondFloorImage from './ClarkISecondFloor.jpg';

const ClarkIComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const switchPage = () => {
    setCurrentPage(currentPage === 1 ? 2 : 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      {/* Left Column */}
      <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
        {currentPage === 1 ? (
          <div>
            <h1>ClarkI First Floor</h1>
            <button onClick={switchPage}>
              <img src={FirstFloorButton} alt="Second Floor" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
            </button>
          </div>
        ) : (
          <div>
            <h1>ClarkI Second Floor</h1>
            <button onClick={switchPage}>
              <img src={SecondFloorButton} alt="First Floor" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
            </button>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div style={{ flex: '1 1 auto' }}>
        {/* First Floor */}
        {currentPage === 1 && (
          <div>
            <h2>ClarkI First Floor</h2>
            <img src={ClarkIFirstFloorImage} alt="First Floor" style={{ width: '100%', height: 'auto' }} />
            <p>Info...</p>
          </div>
        )}

        {/* Second Floor */}
        {currentPage === 2 && (
          <div>
            <h2>ClarkI Second Floor</h2>
            <img src={ClarkISecondFloorImage} alt="Second Floor" style={{ width: '100%', height: 'auto' }} />
            <p>Info...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClarkIComponent;