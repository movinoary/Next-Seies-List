import React from "react";

const ListParagraf = ({ title, data }) => {
  return (
    <p className="text-gray-600 text-sm">
      {title} : <span className="font-bold">{data}</span>
    </p>
  );
};

export default ListParagraf;
