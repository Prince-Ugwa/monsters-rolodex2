import { Component } from "react";
import "./search-box.style.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={` search-box ${className}`}
    placeholder={placeholder}
    type="search"
    onChange={onChangeHandler}
  ></input>
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={` search-box ${this.props.className}`}
//         placeholder={this.props.placeholder}
//         type="search"
//         onChange={this.props.onChangeHandler}
//       ></input>
//     );
//   }
// }

export default SearchBox;
