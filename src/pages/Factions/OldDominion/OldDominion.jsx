import React from 'react';
import "./OldDominion.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function OldDominion() {
  return (
    <MyTemplate>
      <section className='OldDominion'>
        {/* 🎥 Fond vidéo */}
        <div className="bg-video">
            <video autoPlay loop muted playsInline className="VideoBackground">
              <source src="/video/old.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
          <div className="Overlay"></div>
        <h1>Old Dominion</h1>
        <img src="/separator.png" alt="" className='separator'/>
        <p>Few, if any, have ever truly understood what happened to Hazlia when he Fell. What is known is that Humanity’s Allfather fell into the prison of Death – but was not stopped. And, like those sworn to him in life, Hazlia returned, as did his Dominion.</p>
        <ArticleContainer category="OldDominion" />
      </section>
    </MyTemplate>
  );
}

export default OldDominion;
