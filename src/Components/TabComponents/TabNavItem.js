import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab, setShowPopup }) => {
 const handleClick = () => {
  console.log("TabNav clicked");
   setActiveTab(id);
   setShowPopup(false)
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default TabNavItem;