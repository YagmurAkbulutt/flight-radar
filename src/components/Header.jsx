import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isLoading, error, flights } = useSelector((state) => state.flight);

  return (
    <header>
      <div>
        <img src="/plane-logo.png" alt="Plane Logo" />
        <h3>Uçuş Radarı</h3>
      </div>

      {isLoading ? (
        <p>Uçuşlar Hesaplanıyor</p>
      ) : error ? (
        <p className="error">Üzgünüz bir sorun oluştu: {error}</p>
      ) : (
        <p>{flights.length} Uçuş Bulundu</p>
      )}
    </header>
  );
};

export default Header;

