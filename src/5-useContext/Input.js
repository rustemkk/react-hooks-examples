import React, { useContext, useState } from "react";

import CurrentUserContext from "./CurrentUserContext";

const Input = ({ handleBlur, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const currentUser = useContext(CurrentUserContext);

  return (
    <input
      disabled={currentUser.id !== 0}
      onBlur={e => handleBlur(value)}
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  );
};

export default Input;



// exapmle using class:
// import React, { Component } from "react";

// import CurrentUserContext from "./CurrentUserContext";

// class Input extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: props.initialValue };
//   }

//   handleChange = e => {
//     this.setState({ value: e.target.value });
//   };

//   static contextType = CurrentUserContext;

//   render() {
//     const { handleBlur } = this.props;
//     const { value } = this.state;
//     const currentUser = this.context;

//     return (
//       <input
//         disabled={currentUser.id !== 0}
//         onBlur={e => handleBlur(value)}
//         onChange={this.handleChange}
//         value={value}
//       />
//     );
//   }
// }

// export default Input;
