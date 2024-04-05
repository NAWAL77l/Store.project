//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import CardDetails from './components/Pages/CardDetails';
import NewProductForm from './components/Pages/NewProductForm';
function App() {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path="/card/:id" element={<CardDetails />} />
  <Route path="/new-product" element={<NewProductForm />} />
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;
