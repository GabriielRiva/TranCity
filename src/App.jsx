import React, { useState } from 'react';
import './App.css';

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  // Função para ir para a página de "Trajetos"
  const handleSearchClick = () => {
    setShowSearchPage(true);
  };

  // Função para voltar à home page
  const handleBackClick = () => {
    setShowSearchPage(false);
  };

  return (
    <div className="App">
      {showSearchPage ? (
        <div className="search-page">
          <button className="back-button" onClick={handleBackClick}>
            <span className="back-icon">←</span>
          </button>
          <h1 className="search-header">Trajetos</h1>
        </div>
      ) : (
        <div className="home-page">
          <header className="header">
            <h1 className="company-name">TranCity</h1>
          </header>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Para onde?"
              className="search-bar"
              onClick={handleSearchClick}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
