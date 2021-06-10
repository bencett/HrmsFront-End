import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './layouts/Header';
import CandidateList from './pages/CandidateList';
import EmployerList from './pages/EmployerList';
import JobAdvertList from './pages/JobAdvertList';

function App() {
  return (
    <div className="App">
      <Header/>
      <CandidateList/>
      <EmployerList/>
      <JobAdvertList/>
    </div>
  );
}

export default App;
