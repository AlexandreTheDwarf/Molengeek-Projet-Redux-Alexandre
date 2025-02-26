import { useState, useEffect } from 'react';
import figurinesData from '../../data/figurine.json';
import './Carousel.scss'; 

function Carousel() {
  const [index, setIndex] = useState(0);
  const [figurines, setFigurines] = useState([]);

  useEffect(() => {
    // Flatten the figurines array from all categories
    const allFigurines = figurinesData.flatMap(category =>
      Object.values(category).flatMap(group => group.figurines)
    );

    // Shuffle the array and select the first four figurines
    const shuffled = allFigurines.sort(() => 0.5 - Math.random());
    const selectedFigurines = shuffled.slice(0, 4);

    setFigurines(selectedFigurines);
  }, []);

  const goToPrevious = () => {
    const newIndex = (index - 1 + figurines.length) % figurines.length;
    setIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (index + 1) % figurines.length;
    setIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {figurines.map((figurine, idx) => (
          <div
            key={idx}
            className={`carousel-item ${index === idx ? 'active' : ''}`}
          >
            <img
              className="carousel-image"
              src={figurine.Images[0]}
              alt={`Slide ${idx + 1}`}
            />
            <div className="carousel-caption">
              <h3>{figurine.name}</h3>
              <p>{figurine.price} €</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
}

export default Carousel;

