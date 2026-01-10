import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home';
import Form from './Forms';
import AiChat from './components/AiChat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <AiChat />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form/survey/token/:id" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

