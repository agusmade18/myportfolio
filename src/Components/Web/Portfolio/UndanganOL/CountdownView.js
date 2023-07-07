import React from "react";

const CountdownView = ({ waktu, interval }) => {
  if (waktu === 0 && interval === 0) {
    return (
      <>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          Hari
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          Jam
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          Menit
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          Detik
        </div>
      </>
    );
  } else {
    return (
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": waktu }}></span>
        </span>
        {interval}
      </div>
    );
  }
};

export default CountdownView;
