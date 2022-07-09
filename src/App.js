import logo from './logo.svg';
import './App.css';
import { Header} from './components/Header'
import { Body } from './components/Body';
import { NotesPage } from './pages/NotesPage';
import notes from './assets/data';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NotePage } from './pages/NotePage';


function App() {
  return (
    <Router>

    <div className="container dark">
      <div className="app">

      <Header />
      <Routes>

      <Route element={<NotesPage notes={notes} />} path={'/'}/>
      <Route element={<NotePage />} path={'/note/:id'}/>
      </Routes>
      
      </div>
  
    </div>
    </Router>
  );
}

export default App;
