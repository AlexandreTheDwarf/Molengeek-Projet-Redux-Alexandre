import React from 'react';
import "./OldDominion.scss"
import MyTemplate from '../../../template/MyTemplate';
import ArticleContainer from '../../../components/ArticleContainer/ArticleContainer';

function OldDominion() {
  return (
    <MyTemplate>
      <section className='OldDominion'>
        <h1>Old Dominion</h1>
        <ArticleContainer category="OldDominion" />
      </section>
    </MyTemplate>
  );
}

export default OldDominion;
