import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/PageHeader';
import ImageOne from '../../images/image1.jpg'
import ImageTwo from '../../images/image2.jpg'
import ImageThree from '../../images/image3.jpg'
import ImageFour from '../../images/image4.jpg'
import './styles.scss'

const portfolioData = [
    {
        id: 2,
        name: "Ecommerce",
        image: ImageOne,
        link : 'https://github.com/Abh1nav004/Saga_Angular'
    },
    {
        id: 2,
        name: "SIH",
        image: ImageTwo,
        link : ''
    },
    {
        id: 2,
        name: "Discord AI Bot",
        image: ImageThree,
        link : ''
    },
    {
        id: 3,
        name: "Human-Self Development Tool",
        image: ImageFour,
        link : ''
    },
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Developement'
    },
    {
        filterId: 3,
        label: 'Design'
    },
]

const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);
  
    function handleFilter(currentId) {
      setFilteredValue(currentId);
    }
  
    function handleHover(index) {
      setHoveredValue(index);
    }
  
    console.log("====================================");
    console.log(hoveredValue);
    console.log("====================================");
  
    const filteredItems =
      filteredvalue === 1
        ? portfolioData
        : portfolioData.filter((item) => item.id === filteredvalue);
  
    console.log(filteredItems);
  
    return (
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterData.map((item) => (
              <li
                className={item.filterId === filteredvalue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio__content__cards">
            {filteredItems.map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a>
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button onClick={() => window.open(item.link, "_blank")}>Visit</button>

                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Portfolio;
