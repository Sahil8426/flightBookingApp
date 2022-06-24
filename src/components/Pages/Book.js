import React from "react";
import "./Book.css"
export const Book = () => {
  return (
    <div>
     <table>
      <tr>
<th><h1>✈ Indigo Airlines A-900</h1></th>
<th> <h2 id="ti">Wednesday </h2>  </th>
<th><h2 id="ti">18 Aug 2022</h2></th>
<th><h2 id="ti">2:00 hrs</h2></th>
<th><button className="btn">Book Now!</button></th>
      </tr>
      <tr>
<th><h1>✈ Spice Jet C-700</h1></th>
<th> <h2 id="ti">Wednesday </h2>  </th>
<th><h2 id="ti">18 Aug 2022</h2></th>
<th><h2 id="ti">22:00 hrs</h2></th>
<th><button className="btn">Book Now!</button></th>
      </tr>
      <tr>
<th><h1>✈ GoAir B-8900</h1></th>
<th> <h2 id="ti">Wednesday </h2>  </th>
<th><h2 id="ti">18 Aug 2022</h2></th>
<th><h2 id="ti">16:00 hrs</h2></th>
<th><button className="btn" >Book Now!</button></th>
      </tr>
     </table>
    </div>
  );
};
