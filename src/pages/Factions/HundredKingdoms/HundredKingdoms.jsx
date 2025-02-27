import React from 'react'
import "./HundredKingdoms.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function HundredKingdoms() {
  return (
    <MyTemplate>
      <section className='HundredKingdoms'>
        <h1>Hundred Kingdoms</h1>
        <ArticleContainer category="HundredKingdoms" />
      </section>
    </MyTemplate>
  );
}


export default HundredKingdoms