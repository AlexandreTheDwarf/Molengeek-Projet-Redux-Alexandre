import React from 'react'
import "./HundredKingdoms.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function HundredKingdoms() {
  return (
    <MyTemplate>
      <section className='HundredKingdoms'>
        {/* 🎥 Fond vidéo */}
        <div className="bg-video">
            <video autoPlay loop muted playsInline className="VideoBackground">
              <source src="/video/hundred.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
          <div className="Overlay"></div>
        <h1 data-aos="zoom-out-down">Hundred Kingdoms</h1>
        <img src="/separator.png" alt="" className='separator' data-aos="zoom-out-down"/>
        <p data-aos="fade-down">Forged by descendants of the refugee masses of the Old Dominion, the Hundred Kingdoms stand divided in borders, but united as a bastion of humanity’s spirit, grit and honor.</p>
        <ArticleContainer category="HundredKingdoms" />
      </section>
    </MyTemplate>
  );
}


export default HundredKingdoms