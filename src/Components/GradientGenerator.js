import React from 'react'
import "./GradientGenerator.css"
import Cards from './CardsTCB';

const cardTitles=["Linear","Circular","Conic"];
const cardDescs=["linear gradient with given colors","circular gradient with given colors","conic gradient with given colors"];

function GradientGenerator() {
  return (
    <div className="page-wrapper flex-column-evnly">
        <span className="page-title">Gradient Generator</span>
        <Cards cardTitles={cardTitles} cardDescs={cardDescs} />
    </div>
  )
}

export default GradientGenerator