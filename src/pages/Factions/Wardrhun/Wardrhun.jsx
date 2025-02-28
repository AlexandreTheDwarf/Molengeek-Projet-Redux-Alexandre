import React from 'react'
import "./Wardrhun.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function Wardrhun() {
  return (
    <MyTemplate>
      <section className='Wardrhun'>
        {/* 🎥 Fond vidéo */}
        <div className="bg-video">
            <video autoPlay loop muted playsInline className="VideoBackground">
              <source src="/video/wadrun.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
          <div className="Overlay"></div>
        <h1>W’adrhŭn</h1>
        <img src="/separator.png" alt="" className='separator'/>
        <p>Tailored to wage war and tamers of the wildest beasts the world has ever known, the budding civilization of the tribes of the W’adrhŭn is claiming its stake in the world – and they have the means to do so.</p>
        <ArticleContainer category="Wadrhun" />
      </section>
    </MyTemplate>
  );
}

export default Wardrhun
