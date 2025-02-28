import React from 'react'
import "./Catalogue.scss"
import MyTemplate from '../../template/MyTemplate'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'

function Catalogue() {
  return (
    <MyTemplate>
        <section className='Catalogue'>
          <h1 data-aos="zoom-out-down">Tous Nos Produits :</h1>
          <img src="/separator.png" alt="" className='separator' data-aos="zoom-out-down"/>
          <ArticleContainer/>
        </section>
    </MyTemplate>
  )
}

export default Catalogue