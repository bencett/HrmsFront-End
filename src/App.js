import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './layouts/Header';
import CandidateList from './pages/CandidateList';

function App() {
  return (
    <div className="App">
      <Header/>
      <CandidateList/>
    </div>
  );
}

export default App;
