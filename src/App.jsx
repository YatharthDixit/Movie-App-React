import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SearchResult from "./pages/searchResult/searchResult";
import Details from "./pages/details/details";
import Page404 from "./pages/404/404";
function App() {
  const dispatch = useDispatch();

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((data) => {
        // console.log(data);

        const url = {
          backdrop: data.images.secure_base_url + "original",
          poster: data.images.secure_base_url + "original",
          profile: data.images.secure_base_url + "original",
        };

        dispatch(getApiConfiguration(url));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/mediaType/:id" element={<Details />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/explore/:mediaType" element={<Explore />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
