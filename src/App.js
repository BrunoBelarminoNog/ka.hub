import Header from "./components/Header";
import Routes from "./Routes";
import { GlobalStyles,  StyledToastContainer} from "./styles/GlobalStyles";

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    const id = JSON.parse(localStorage.getItem("@KenzieHub:id"));

    if (token) {
      setAuthenticated(true);
    }

    if (id) {
      setUserId(id)
    }
  }, [authenticated]);


  return (
    <div className="App">
      <Header  authenticated={authenticated} userId={userId} setAuthenticated={setAuthenticated}/>
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
      <Routes authenticated={authenticated} setAuthenticated={setAuthenticated} userId={userId} />
      <GlobalStyles />
    </div>
  );
}

export default App;
