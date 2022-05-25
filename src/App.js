import React, {createContext, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./hooks/routes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import ModalContextProvider from "./context/modal-context";

import './App.scss';
import BasketContextProvider from "./context/basket-context";

export const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const route = useRoutes(isAuth);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <ModalContextProvider>
        <BasketContextProvider>
          <BrowserRouter>
            <Header />
            <main>
              { route }
            </main>
            <Footer />
          </BrowserRouter>
        </BasketContextProvider>
      </ModalContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
