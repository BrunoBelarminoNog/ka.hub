import Header from "./components/Header";
import Routes from "./Routes";
import { GlobalStyles,  StyledToastContainer} from "./styles/GlobalStyles";

import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className="App">
      <Header />
      <StyledToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
