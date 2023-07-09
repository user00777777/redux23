import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import s from '../../css/mashineCss/rarialka.module.css'


export default function Radialka() {
let navigate=useNavigate();




let goBack=()=>navigate(-1);


  return (
    <div className={s.father}>


<div className={s.fatherTwo}>
  <div className={s.imgContainer}>
<img src="https://lh3.googleusercontent.com/pw/AIL4fc-tjXVMtlrIk4p6DbepLFbISrMrOYwyTxjLvpEHusY1dLQertfkGi0tIHCK_sl7UkeoSvKxxM9VcP0Xes0Ff10feM91rP59ZlPYZCp8sXrZEUil1CsJ_t0jPyyYy41ggT9rCcHyy_J8Yu8I-6GsDFkIHk3zXp6I7ymcDZ6J-EYkZB0EMfFa30e1S_5aAseAk3XJMaCDrNuruWYJS9VcY1B15Hz_C40Ug6ZX2pBbHEoqJ6o1XLCmUCp932dBG1JqCjwuurMSA9izcK02fV9sQfS8OdoZHImY4Lz74mqJXvHKfZ22C3TGNHNCcqfim3Ch3ywoLMACEU4_vmogtqe3jbD3l1XWPtXWG-a6K-VqTQBu2xZsltxy0EaZiJyam1MSxgZEEUQXxzY9pYz0vGakbQNAOIZ1EBFEMdevZMOMeM6yn8FgZ4yvgu_t__Ops0TNMn9PqJyqO-O2cqDck8nTYU7DJQRSmaxzrRpHW4YUaCghPkpc0LW0vtMM6qTkYVmjEslgJ1ToYqm4_i4MDOe-mpIQxPbeYDo6wjVjWGFe9ASEh1qHphOQ9-s35yFXE4T_kWJu2hsBCJa1h7adp2nIdT_fkQatrWubSYnUSNKiOZiI8rEEbOGa3xCkS24XCgdJskpFojk9EH8rAmdPE89xzIT3YOgFMXPH8Hi6U38CevAROlox_aAB96EWy8FXZWaJkk_hlppRbaLuY3EanwZ8gwEHxho_AOJ6PlO1lQcM5Klw7cXc_vYP2XwxWudcam4pdVeGEY6xy_zQR-g9_sEA4cWw7DzoNxYPVZGPX9maDJeNQf0JmaCZZZCrdgwA3zl1lOHeB9TJiYW8KYhgEFRdpanm3a7-GjI-uRZtNyhmWFaT_TAnRAVGDCPTJd9MkvTMFezndVqJ6Hh5POTKknH_opOw4A=w954-h716-s-no?authuser=0"  />
</div>
<button className={s.button} onClick={goBack}>
Назад
<div className={s.hoverEffect}>
<div>
</div>
</div></button></div>
<div className={s.list}>
<ul>
<li><Link to='circuitDiagram'> Схема</Link></li>
<li><Link to='engine'> Двигателя</Link></li>
<li><Link to='different'> Разное</Link></li>

</ul>

</div>

    </div>
  )
}

