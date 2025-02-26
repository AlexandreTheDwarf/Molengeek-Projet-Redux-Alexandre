import React from 'react';
import "./Dweghom.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function Dweghom() {
  return (
    <MyTemplate>
      <section className='Dweghom'>
        <h1>Dweghom Page</h1>
        <ArticleContainer category="Dweghom" />
      </section>
    </MyTemplate>
  );
}

export default Dweghom;
