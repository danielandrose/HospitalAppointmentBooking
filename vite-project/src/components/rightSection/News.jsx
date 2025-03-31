import React from "react";
import './news.css'
import NewsCard from "./NewsCard";
import heartSurgery from '../../imgs/heartSurgery.mp4'

const newsArticles = [
  {
    img: heartSurgery ,
    title: "New Heart Surgery Procedure Approved",
    description: "A groundbreaking minimally invasive heart surgery has been approved by the FDA, promising faster recovery.",
  },
  {
    img:"https://videos.pexels.com/video-files/3191289/3191289-uhd_2732_1440_25fps.mp4",
    title: "Tips for a Healthy Lifestyle",
    description: "Drink plenty of water, eat a balanced diet, and exercise regularly to maintain good health.",
  },
  {
    img:"https://videos.pexels.com/video-files/8375431/8375431-uhd_2732_1440_25fps.mp4",
    title: "Seasonal Flu Awareness",
    description: "Get your flu shots early this year to stay protected against the upcoming flu season.",
  },
  {
    title: "Mental Health Matters",
    description: "Experts emphasize the importance of mental well-being and daily stress management.",
  }
];

export default function News() {
  return (
    <div className="news-container">
      {
        newsArticles.map((val,ind)=>
            <NewsCard key={ind} video={val.img} title={val.title} description={val.description}/>
        )
      }
    </div>
  );
}
