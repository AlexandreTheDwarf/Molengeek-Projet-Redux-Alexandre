import React from 'react'
import "./Home.scss"
import MyTemplate from '../../template/MyTemplate'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'
import Carousel from "../../components/Carousel/Carousel"

function Home() {
  return (
    <MyTemplate>
        <section className='Home'>
          <Carousel/>
        </section>
    </MyTemplate>
  )
}

export default Home