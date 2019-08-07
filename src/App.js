import React from 'react';

import Header from './components/header';
import RepositoryList from './components/listRepositorys'

function App() {
  return (
    <div className="App">
      <Header title="Repo List"/>
      <RepositoryList />
    </div>
  );
}

export default App;
