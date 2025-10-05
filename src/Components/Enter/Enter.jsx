import React, { useState } from 'react'

export default function Enter() {

        const [value, setValue] = useState('')

 
      
        const handleChange = (event) => {
          setValue(event.target.value); // получаем текст из input
        };
        const handleClick = () => {
            console.log(value);   // выводим текущее значение
            setValue('');         // очищаем input
          };

      
        return (
          <div>
            {/* <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleClick}>Отправить</button> */}
          </div>
        )
}
