import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab, setShowPopup, setActiveFloor }) => {
 const handleClick = () => {
  setActiveTab(id);
  setShowPopup(false);
  setActiveFloor(1);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default TabNavItem;