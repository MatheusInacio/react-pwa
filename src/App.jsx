import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NotificationButton from "./components/NotificationButton";
import { requestToken, onMessageListener } from "./firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    onMessageListener();
  }, []);
  return (
    <>
      <Header />
      <NotificationButton action={requestToken} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
