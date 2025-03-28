import React from 'react'

export default function NewsCard(props) {
  return (
    <div className="news-card">
        <video  autoplay loop muted playsinline>
            <source src={props.video} type="video/mp4"/>
        </video>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}
