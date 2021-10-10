import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./componets/Header";
import Footer from "./componets/footer";
import Main from "./componets/Main";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default App;
