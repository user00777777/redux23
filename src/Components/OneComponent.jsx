import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../sliceReduce/tableSlice';

function OneComponent() {
 const state= useSelector((state)=>state.hoist.data)
//  console.log(state);
 
  const ulRef = useRef(null); // создаем ссылку на элемент ul
  const dispatch = useDispatch();

  useEffect(() => {
    // добавляем обработчик событий после отрисовки элемента ul
    if (ulRef.current) {
     
      ulRef.current.addEventListener('click', f1);
    }

    return () => {
      // удаляем обработчик событий при размонтировании компонента
      if (ulRef.current) {
       
        ulRef.current.removeEventListener('click', f1);
      }
    };
  }, []); // зависимости пустые, поэтому эффект будет запущен только один раз

  function f1(event) {
    const hoist = event.target.dataset.hoist;
  
    state.map((el)=>{
      if (el.hoist.trim()==hoist) {
       event.target.textContent=el.avt
        
      }
      
    })
    if (hoist==state.hoist) {
      console.log('ok');
      
      event.target.textContent=`${state.avt}`
      
    }
    console.log(hoist);
    dispatch(setData(hoist));
  }

  return (
    <div>
      <ul className="wrap" ref={ulRef}> {/* используем useRef для создания ссылки на элемент */}
        <li data-hoist="52044">52044</li>
        <li data-hoist="51770">51770</li>
        <li data-hoist="51834">51834</li>
        <li data-hoist="51880">51880</li>
      </ul>
    </div>
  );
}

export default OneComponent;
