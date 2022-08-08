import './App.css';

import Client from "./client";
import Comics from './views/Comics';
import NavBar from './components/navbar';
import { QueryClientProvider } from 'react-query';
import { SearchAndFilterProvider } from "./contexts/MarvelApp"

function App() {
  return (
    <QueryClientProvider client={Client}>
      <SearchAndFilterProvider>
        <div className="App">
          <NavBar />
          <Comics />
        </div>
      </SearchAndFilterProvider>
    </QueryClientProvider>
  );
}

export default App;
