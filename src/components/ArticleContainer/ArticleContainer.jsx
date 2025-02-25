import React from 'react';
import "./ArticleContainer.scss";
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import figurinesData from '../../data/figurine.json';

function ArticleContainer() {
  return (
    <div className='ArticleContainer'>
      {figurinesData.map((category, categoryIndex) => (
        Object.values(category).map((figurineList, listIndex) => (
          figurineList.figurines.map((figurine) => (
            <ShoppingCard
              key={`${categoryIndex}-${listIndex}-${figurine.name}`}
              figurine={figurine}
            />
          ))
        ))
      ))}
    </div>
  );
}

export default ArticleContainer;
