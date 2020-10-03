import { EDIT } from "./Types";

export const handleSubmitAction = (product) => {
  return {
    type: EDIT,
    payload: product,
  };
};
