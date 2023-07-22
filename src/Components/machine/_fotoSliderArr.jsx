import React from "react";
import { useSelector } from "react-redux";
import cK from "../images/klepka/circuitKlupka.jpg";
import shedule from "../images/SheduleDistrict23.jpg";

export default function _fotoSliderArr({ machine, idMachine }) {
  console.log(machine);
  const arrFoto = [];



  function createObj(ar, n) {
    return {
      ar,
      n,
    };
  }
  switch (machine||idMachine) {
    case "Клепка":
      arrFoto.length=0;
      arrFoto.push(cK);
      const obj = createObj(
        arrFoto,
        ` <li>${machine} ${idMachine}</li> <li >установлено первое положение</li>  `
      );
      return obj;
   
  

    default:
      arrFoto.splice(0,arrFoto.length)
      arrFoto.push(shedule);
    const  objdef = createObj(arrFoto, `Схема участка Другой информации не найдено`);
      return objdef;
      break;
  }

}
