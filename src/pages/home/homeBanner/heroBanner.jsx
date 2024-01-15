import React, { useState, useEffect } from "react";
import "./heroBanner.scss";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/img";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
const HeroBanner = () => {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  console.log(data);
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);

  return (
    <div className="heroBanner">
      {
        <div className="backdrop-img">
          {!loading && <Img src={backGround} />}
        </div>
      }
      <div className="opacity-layer"></div>
      <ContentWrapper className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search for a movie, tv show, person......"
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
