import { useState, useEffect } from 'react';
import './PositionSvg.css';

export function PositionSvg ({ id, size})  {
  let [svg, setSvg] = useState('');

  async function importSvg() {
    let importedSvg = await import(`../../assets/posesAll/${id}.svg`);
    setSvg(importedSvg.default);
  }
  
  useEffect(()=> {
     importSvg();
  })
  
  return <img className={size? "svg__pose" : "position__svg"}  src={svg} alt='Position'/>;
};