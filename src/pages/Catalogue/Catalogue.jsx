import React from 'react'
import "./Catalogue.scss"
import MyTemplate from '../../template/MyTemplate'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'

function Catalogue() {
  return (
    <MyTemplate>
        <section className='Catalogue'>
          <ArticleContainer/>
        </section>
    </MyTemplate>
  )
}

export default Catalogue