import React from 'react';
import "./Dweghom.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function Dweghom() {
  return (
    <MyTemplate>
      <section className='Dweghom'>
        {/* 🎥 Fond vidéo */}
        <div className="bg-video">
            <video autoPlay loop muted playsInline className="VideoBackground">
              <source src="/video/Dweghom.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
          <div className="Overlay"></div>
        <h1 data-aos="zoom-out-down">Dweghom</h1>
        <img src="/separator.png" alt="" className='separator' data-aos="zoom-out-down"/>
        <p data-aos="fade-down">With souls and bodies shaped by Fire, Earth and War, the Dweghom have driven the Dragons to extinction and broken the world to become masters of their own destiny – just to then disagree on what that destiny should be…</p>
        <ArticleContainer category="Dweghom" />
      </section>
    </MyTemplate>
  );
}

export default Dweghom;
