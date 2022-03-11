import _ from 'lodash';
import * as d3 from "d3";

class Scenario {
  constructor(runwayNum, windKt, windDeg, approachHdg) {
    this.runwayNum = parseInt(runwayNum);
    this.windKt =parseInt( windKt);
    this.windDeg =parseInt( windDeg);
    this.approachHdg = parseInt(approachHdg);
  }

  get runwaysTxt()
  {
    let rwy = new String(this.runwayNum).padStart(2, '0');
    let rwyRecip = new String(this.runwayNum+18).padStart(2, '0');
    return rwy + "/" + rwyRecip;
  }
}

function component() {
    const element = document.createElement('div');
    element.className = 'scen';

    const p = new Scenario(
      Math.round(Math.random()*18),
      Math.round(Math.random()*15),
      Math.round(Math.random()*360),
      Math.round(Math.random()*360));

    element.innerHTML = "You're heading " +  
      new String(p.approachHdg).padStart(3, '0') + 
      "&deg; and want to land at an airport having runways "+
      p.runwaysTxt + 
      " given winds from "+ 
      new String(p.windDeg).padStart(3, '0')+ 
      "&deg; at "+ 
      p.windKt + "kt";
      
    return element;
  }
  
document.body.appendChild(component());