import React, { useState } from "react";
import "./style.css";
import menuapi from "./menuapi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


import OrderNow from "./ordernow";

const uniqueList = [
  ...new Set(
    menuapi.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(menuapi);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(menuapi);
      return;
    }

    const updatedList = menuapi.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
      < OrderNow menuData={menuData} />
       
    </>
  );
};

export default Resturant;

            