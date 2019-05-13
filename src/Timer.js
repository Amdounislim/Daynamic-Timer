import React from 'react'

let t=366060;
let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let secs = Math.floor((t % (1000 * 60)) / 1000);
if (hours<10) {hours="0"+hours}
if (mins<10) {mins="0"+mins}
if (secs<10) {secs="0"+secs}
export default function Timer() {
  return (
    <div className="contour">
      <div className="header"></div>
      <div className="main">
        <h1>{hours}:{mins}:{secs}</h1>
        <div className="unite">
          <span>Hour</span>
          <span>Minute</span>
          <span>Second</span>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  )
}
