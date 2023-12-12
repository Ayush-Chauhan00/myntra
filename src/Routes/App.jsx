import { Outlet } from "react-router-dom"
import Footer from "../component/Footer"
import Header from "../component/Header"
import FetchItems from "../component/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../component/LoadingSpinner"
import "bootstrap/dist/css/bootstrap.min.css";
//{FetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

function App() {
  const FetchStatus = useSelector(store => store.fetchStatus)


  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
