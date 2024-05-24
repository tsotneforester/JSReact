export const CATEGORIES = {
  biography: [<box-icon size="md" color="#444d44" type="solid" name="calendar"></box-icon>, "#926306"],
  work: [<box-icon size="md" color="#444d44" type="solid" name="briefcase-alt-2"></box-icon>, "#a303ff"],
  read: [<box-icon size="md" color="#444d44" name="book-reader"></box-icon>, "#266d55"],
  cart: [<box-icon size="md" color="#444d44" name="cart-add"></box-icon>, "#433a18"],
  watch: [<box-icon size="md" color="#444d44" name="camera-movie"></box-icon>, "#6e460f"],
};

export const EMPTYFORM = { title: "", category: "", desc: "" };

export function validateValues(inputValues, arr) {
  let errors = {};
  if (!inputValues.title.length) {
    errors.title = "please enter title";
  }
  if (!arr.includes(inputValues.category)) {
    errors.category = "choose right category";
  }

  return errors;
}
