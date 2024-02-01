import './App.css';
import SearchBar from './components/searchBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<SearchBar/>}/>
      </Routes>
    </div>
  );
}

export default App;
