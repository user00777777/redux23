import { useState } from "react";
import { Link } from "react-router-dom";

function First() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="burger-page">
        <div className="burger-menu" onClick={handleMenuToggle}>l
     
        </div>
        {isMenuOpen && (
          <div className="burger-menu-dropdown">
            <ul>
              <li>Главная</li>
              <li>О нас</li>
              <li>Меню</li>
              <li><Link to='/workers' >Home</Link></li>
            </ul>
          </div>
        )}
        <div className="burger-page-content">
          <h1>Добро пожаловать на наш сайт!</h1>
          <p>Здесь вы можете ознакомиться с нашим меню и связаться с нами.</p>
        </div>
      </div>
    );
  }
  
  export default First