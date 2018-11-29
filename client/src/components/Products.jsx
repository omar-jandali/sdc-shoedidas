import React, { Component } from 'react';
import style from '../css/Products.css';
import SvgStar from '../components/starSvg.jsx';
import EmptySvgStar from '../components/emptystarSvg.jsx';
import ReactSVG from 'react-svg';
import Favorite from './Favorite';
import { ratingToStarTranslation } from '../../../helpers/helperFuncs.js';

const Products = function(props) {
  const images = props.products.image;
  const imagesArr = images;

  const price = props.products.price.toString();

  const correctPrice = function(str) {
    return str.length === 5 ? '$' + str.slice(0, 3) : '$' + str.slice(0, 2);
  };

  const randomRating = () => Math.floor(Math.random() * 100);
  const randomId = () => Math.random() * 0.9999;
  const randomStars = () => Math.random() * (5 - 3) + 3;

  return (
    <div className={style.hockeyCard}>
      <span className={style.productContainer}>
        <div className={style.productCard}>
          <div className={style.productInfo}>
            <img
              className={style.img}
              src={`https://s3.amazonaws.com/adidas-fake-api/images/dw106f49c3/BQ8484_31_detail_1024.jpg`}
            />
            <div className={style.favorite}>
              <div className={style.toggleWishList}>
                <Favorite id={props.id} favClick={props.favClick} fav={props.fav} />
              </div>
            </div>
            <div className={style.productDetails}>
              <div className={style.productName}>{props.products.item_name}</div>
              <div className={style.productPrice}>{correctPrice(price)}</div>
            </div>
            <div className={style.timRating}>
              {ratingToStarTranslation(randomStars()).map((value, index) => (
                <SvgStar index={randomId()} value={value} />
              ))}
              <div className={style.numbersOfRaters}>{randomRating()}</div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Products;
