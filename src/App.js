import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
       <ToastContainer 
   position="top-right"
   autoClose={2500}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   />
      <RoutesApp/>
    </div>
  );
}

export default App;
