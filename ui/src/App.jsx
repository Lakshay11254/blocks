//App.jsx


import Blocks from './components/blocks'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme'; 
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import TransactionForm from './components/TransactionForm';

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
          <CssBaseline /> 
                  <BrowserRouter>
                      <Routes>
                          <Route path="/" element={<Blocks />} />
                          <Route path="/transactionhistory" element={<TransactionForm />} />
                      </Routes>
                  </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
