const initialValue = {
  number: 0
};

const countReducer = (state = initialValue, action) => {
  //   if (action.type === "COUNT_ADD") {
  //     return {
  //       ...state,
  //       number: number + action.payload
  //     };
  //   } else if (action.type === "COUNT_SUBSTRACT") {
  //     return {
  //       ...state,
  //       number: number - action.payload
  //     };
  //   }
  switch (action.type) {
    case "COUNT_ADD":
      return {
        ...state,
        number: state.number + action.payload
      };
    case "COUNT_SUBSTRACT":
      return {
        ...state,
        number: state.number - action.payload
      };
    default:
      return state;
  }
};

export default countReducer;
