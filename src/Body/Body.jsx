import React from "react";
import "../Body/Body.css";
import Blogcard from "../Blogcard/Blogcard";

const Body = () => {
  return (
    <div className="Body">
      <div className="Heading">API Blog</div>
      <div className="SubHeading">
        Learn how to build applications using Generative AI models APIs
      </div>
      <div className="Blogcards">
        <Blogcard
          imgurl="https://th.bing.com/th/id/R.39f0f545d61cd02a7973f01d475fe3aa?rik=UKX911vcmuWxrg&pid=ImgRaw&r=0"
          date="Mar 16 , 2020"
          context="Marketing"
          heading="Boost your conversion rate"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero reiciendis perferendis sed, explicabo deserunt corporis rem accusantium iusto quaerat debitis vitae ipsum dolores quia repellendus sequi placeat quo atque obcaecati!"
        />
        <Blogcard
          imgurl="https://th.bing.com/th/id/OIP.hh7kwCxDzC6nQ38_GnAm1QHaFj?pid=ImgDet&rs=1"
          date="Mar 10 , 2020"
          context="Sales"
          heading="How to use search engine optimization to drive sales"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero reiciendis perferendis sed, explicabo deserunt corporis rem accusantium iusto quaerat debitis vitae ipsum dolores quia repellendus sequi placeat quo atque obcaecati!"
        />
        <Blogcard
          imgurl="https://th.bing.com/th/id/OIP.GZn3-hpxE1VxIemWIeNQCAHaFj?pid=ImgDet&w=736&h=552&rs=1"
          date="Feb 12 , 2020"
          context="Business"
          heading="Improve your customer experience"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero reiciendis perferendis sed, explicabo deserunt corporis rem accusantium iusto quaerat debitis vitae ipsum dolores quia repellendus sequi placeat quo atque obcaecati!"
        />
      </div>
    </div>
  );
};

export default Body;
