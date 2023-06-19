import React, { useRef, useState } from 'react'

export default function SinglTp() {
  const [isDoubleTap, setIsDoubleTap] = useState(false);
  const doubleTapTimer = useRef(null);
console.log(doubleTapTimer.current);

  const handleTouchStart = () => {
    if (doubleTapTimer.current) {
      console.log('doubleTapTimer.current');
      
      clearTimeout(doubleTapTimer.current);
      setIsDoubleTap(true);
    } else {
      console.log('no');
      
      doubleTapTimer.current = setTimeout(() => {
        console.log('time');
        
        setIsDoubleTap(false);
        doubleTapTimer.current = null;
      }, 300); // Интервал между двойными касаниями в миллисекундах
    }
  };

  const handleTouchEnd = () => {
    if (isDoubleTap) {
      console.log('Двойной клик');
      // Ваш код, который будет выполнен при двойном касании
    }
  };

  return (
    <div>
      <button onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        Двойной клик
      </button>
    </div>
  );
}
// // Сохранение информации о DOM-элементе refA2.current в localStorage
// localStorage.setItem('refA2Id', refA2.current?.id);

// // Восстановление DOM-элемента refA2.current из localStorage
// const savedRefA2Id = localStorage.getItem('refA2Id');
// const savedRefA2 = document.getElementById(savedRefA2Id);
