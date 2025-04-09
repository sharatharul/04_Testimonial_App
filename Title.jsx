import React from "react";

export default function Title({ classes, text }) {
  return (
    <div>
      <h1 className={!classes ? "title" : classes || "title text center"}>
        {!text ? "Title" : text}
      </h1>
    </div>
  );
}
