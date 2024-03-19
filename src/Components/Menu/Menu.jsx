import React from "react";
import "./Menu.css";
import images from "../../constants/images";
import { Foods, Drinks } from "../../constants/data";
const Menu = () => {
  {
    document.title = "Menu | LahoriLounge";
  }
  return (
    <div className="menu_Container">
      <p>Menu That Fits You Palatte</p>
      <img src={images.spoon} alt="" className="spoon" />
      <h2 className="menu-heading">Today's Special</h2>
      <div className="menu">
        <div className="foods">
          <h3>Food</h3>
          {Foods.map((item) => (
            <div className="food" key={item.title}>
              <div className="title-price">
                <p className="food_Title">{item.title}</p>
                <hr />
                <p className="food_Price">{item.price}</p>
              </div>
              <p className="food_Tags">{item.tags}</p>
            </div>
          ))}
        </div>
        <div className="menu_img">
          <img src={images.menu} alt="" />
        </div>
        <div className="drinks">
          <h3>Drinks</h3>
          {Drinks.map((item) => (
            <div className="drink" key={item.title}>
              <div className="title-price">
                <p className="drink_Title">{item.title}</p>
                <hr />
                <p className="drink_Price">{item.price}</p>
              </div>
              <p className="drink_Tags">{item.tags}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
