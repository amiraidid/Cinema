import './App.css';
import {Header, Footer} from './components';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
