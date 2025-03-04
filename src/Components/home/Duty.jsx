// import React from 'react'
// import getDuty from './_dutyWorkers'
// import s from './duty.module.css'

// function Duty({duty}) {
// 	// console.log(duty);
	

  
// 	return (
// 		<><div className={s.wrapHeader}><h2>Дежурные на Март</h2></div>
// 			{duty && <div className={s.dutyContainer}>{getDuty(...duty)}</div>}
   
// 		</>
// 	)
// }
// export default Duty
import React, { useEffect,useState } from 'react';
import getDuty from './_dutyWorkers';
import s from './duty.module.css';

function Duty({ duty }) {
  // Встроенный компонент для определения бренда или типа устройства
  function DeviceBrand() {
    const [deviceBrand, setDeviceBrand] = useState('');

    useEffect(() => {
      const ua = navigator.userAgent.toLowerCase();
      let brand = '';

      // Определение для мобильных устройств
      if (ua.indexOf("iphone") !== -1) {
        brand = "Apple (iPhone)";
      } else if (ua.indexOf("samsung") !== -1 || ua.indexOf("sm-") !== -1) {
        brand = "Samsung";
      } else if (ua.indexOf("huawei") !== -1) {
        brand = "Huawei";
      } else if (ua.indexOf("xiaomi") !== -1) {
        brand = "Xiaomi";
      } else if (ua.indexOf("oppo") !== -1) {
        brand = "Oppo";
      } else if (ua.indexOf("vivo") !== -1) {
        brand = "Vivo";
      } else if (ua.indexOf("oneplus") !== -1) {
        brand = "OnePlus";
      }
      // Определение для десктопов
      else if (ua.indexOf("windows") !== -1) {
        brand = "Desktop (Windows)";
      } else if (ua.indexOf("macintosh") !== -1 || ua.indexOf("mac os x") !== -1) {
        brand = "Desktop (Mac)";
      } else if (ua.indexOf("linux") !== -1) {
        brand = "Desktop (Linux)";
      } else {
        brand = "Не удалось определить бренд или тип устройства";
      }

      // Вывод результата в консоль
      console.log("Определённое устройство:", brand);
      setDeviceBrand(brand);
    }, []);

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>Информация об устройстве</h2>
        <p><strong>Устройство:</strong> {deviceBrand}</p>
      </div>
    );
  }

  return (
    <>
      <div className={s.wrapHeader}>
        <h2>Дежурные на Март</h2>
      </div>
      {duty && (
        <div className={s.dutyContainer}>
          {getDuty(...duty)}
        </div>
      )}
      {/* Встраиваем компонент DeviceBrand для вывода информации об устройстве */}
      <DeviceBrand />
    </>
  );
}

export default Duty;

