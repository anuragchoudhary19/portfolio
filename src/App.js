import './App.css';
import Introduction from './Introduction/Introduction';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Introduction />
      <Projects />
      {/* <Introduction />
      <Introduction /> */}
    </div>
  );
}

export default App;
