import React from 'react'

function FAQ() {
  return (
    <section className="bg-white">
      FAQ
      <div className="eyes-wrapper aspect-square w-72 pl-1">


      <svg className="bg-primary " id="svg" viewBox="0 0 1000 1000">
        <g id="left-eye">
          <circle
            className="eye-outer"
            cx="350"
            cy="500"
            r="150"
            stroke="#1f0018"
            strokeWidth="2"
            fill="#fff"
          />
          <circle
            className="eye-inner"
            cx="450"
            cy="500"
            r="40"
            fill="#1f0018"
          />
        </g>
        <g id="right-eye">
          <circle
            className="eye-outer"
            cx="660"
            cy="500"
            r="150"
            stroke="#1f0018"
            strokeWidth="2"
            fill="#fff"
          />
          <circle
            className="eye-inner"
            cx="760"
            cy="500"
            r="40"
            fill="#1f0018"
          />
        </g>
      </svg>
      </div>
    </section>
  );
}

export default FAQ