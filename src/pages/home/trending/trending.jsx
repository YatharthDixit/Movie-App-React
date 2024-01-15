import React from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../../components/swithTabs/SwitchTabs";

const Trending = () => {

    const onTabChange = (tab) => {
        console.log(tab);
    }
  return (
    <div className="trendingPage">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange = {onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
