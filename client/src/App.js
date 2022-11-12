
import AddUser from './components/AddUser'
import NavBar from './components/NavBar'
import CodeSmashers from './components/CodeSmashers'
import AllUsres from './components/AllUsres'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<CodeSmashers /> } />
      <Route path="/add" element={<AddUser /> } />
      <Route path="/all" element={<AllUsres /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
