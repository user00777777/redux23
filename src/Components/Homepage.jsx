import React, { useState } from 'react';

export  default function Homepage() {
  const [attribut, setAttributes] = useState([]);

  const handleChildClick = (event) => {
    const element = event.target;
    const elementAttributes = Array.from(element.attributes).map((attribute) => ({
      name: attribute.name,
      value: attribute.value,
    }));
    setAttributes((prevAttributes) => [...prevAttributes, ...elementAttributes]);
  };
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Вывод значений
// alert("Ширина экрана: " + screenWidth + "px");
// alert("Высота экрана: " + screenHeight + "px");

  return (
    <div onClick={handleChildClick}>
      <ChildComponent name="Alice" age={30} />
      <ChildComponent name="Bob" age={35} occupation="Engineer" />
      <ChildComponent name="Charlie" age={40} occupation="Designer" hobby="Drawing" />
      <ul>
        {attribut.map((attribute, index) => (
          <li key={index}>
            {attribute.name}={attribute.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChildComponent(props) {
console.log();


  return <div {...props}>Click me to see my attributes</div>;
}
