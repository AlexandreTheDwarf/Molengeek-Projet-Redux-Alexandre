import React from 'react'
import "./Home.scss"
import MyTemplate from '../../template/MyTemplate'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'
import Carousel from "../../components/Carousel/Carousel"

function Home() {
  return (
    <MyTemplate>
        <section className='Home'>
          {/* 🎥 Fond vidéo */}
          <div className="bg-video">
            <video autoPlay loop muted playsInline className="VideoBackground">
              <source src="/video/videoplayback.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
          <div className="Overlay"></div>
          <Carousel/>
          <div className='LoreDiv'>
            <p>The world of Conquest is a new and complete fantasy experience, built on the foundations of rich lore and deep, realistic history and bringing fresh and mature takes on beloved, old tropes. With distinct species and civilizations connected by an entangled history, entwined motives and clashing goals, it is devised from conception to support rich storytelling and different narrative styles and gaming experiences. </p>
          </div>
        </section>
    </MyTemplate>
  )
}

export default Home