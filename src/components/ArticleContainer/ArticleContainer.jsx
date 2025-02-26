import React from 'react';
import "./ArticleContainer.scss";
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import figurinesData from '../../data/figurine.json';

function ArticleContainer({ category }) {
  return (
    <div className='ArticleContainer'>
      {figurinesData.map((categoryData, categoryIndex) => (
        Object.entries(categoryData).map(([categoryName, figurineList]) => (
          figurineList.figurines
            .filter((figurine) => !category || category === categoryName)
            .map((figurine) => (
              <ShoppingCard
                key={`${categoryIndex}-${categoryName}-${figurine.name}`}
                figurine={figurine}
              />
            ))
        ))
      ))}
    </div>
  );
}

export default ArticleContainer;
