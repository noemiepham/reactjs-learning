import React from "react";
const Clothes = (props) => {
     console.log(props) // value of props;
     return (
          <div>
               <h1>{props.children}</h1>
               <ul>
                    <li><b>Name:</b>{props.name}</li>
                    <li><b>Type:</b>{props.type}</li>
                    <li><b>Color:</b>{props.color}</li>
                    <li><b>Size:</b>{props.size}</li>
               </ul>
          </div>
     );
};
export default Clothes;