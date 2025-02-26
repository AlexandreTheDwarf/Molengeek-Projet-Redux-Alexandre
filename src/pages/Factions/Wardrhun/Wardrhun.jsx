import React from 'react'
import "./Wardrhun.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function Wardrhun() {
  return (
    <MyTemplate>
      <section className='Wardrhun'>
        <h1>W’adrhŭn Page</h1>
        <ArticleContainer category="Wadrhun" />
      </section>
    </MyTemplate>
  );
}

export default Wardrhun
