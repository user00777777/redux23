import React from "react";
import rad from "../images/mashineFoto/rad/rad2A554.jpg";
import klepka from "../images/klepka/klepka910.jpg";
import sb973 from "../images/mashineFoto/rad/sb973/sb973.jpg";
import sm2126 from "../images/mashineFoto/rad/sm2126/sm2126.jpg";
import sb833 from "../images/mashineFoto/sb833/sb833.jpg";
import sb972 from "../images/mashineFoto/sb972/sb972.jpg";
import am from "../images/Am/am.jpg";
import sb890 from "../images/mashineFoto/sb890/cb890.jpg";
import sb832 from "../images/mashineFoto/sb832/sb832.jpg";
import vs_300 from "../images/vs300/vs_300.jpg";
import vdm from "../images/vs300/Vdm1201.jpg";
import fp from "../images/mashineFoto/fpSavelovo/Fp.jpg";
import m3048 from "../images/mashineFoto/m3048/m30_48.jpg";
import r682 from "../images/mashineFoto/6r82/6r.jpg";
export default function _foto(name) {
  console.log(name);

  switch (name) {
    case "2А554":
      return rad;

      break;
    case "2Н55":
      return rad;

      break;
    case "Клепка":
      return klepka;

      break;
    case "СБ973":
      return sb973;

      break;
    case "СМ2126":
      return sm2126;

      break;
    case "СБ833":
      return sb833;

      break;
    case "СБ972":
      return sb972;

      break;
    case "Am19176":
      return am;

      break;
    case "СБ890":
      return sb890;

      break;
    case "СБ832":
      return sb832;

      break;
    case "ВС-300":
      return vs_300;

      break;
    case "ВДМ":
      return vdm;

      break;
    case "ФП27П":
      return fp;

      break;
    case "М3048":
      return m3048;

      break;
    case "6Р82":
      return r682;

      break;

    default:
      return null;
      break;
  }
}
