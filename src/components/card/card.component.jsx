import { Component } from "react";
import "../card/card.style.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        className="monster-img"
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}set=set2&size=80x80`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           className="monster-img"
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}set=set2&size=80x80`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
