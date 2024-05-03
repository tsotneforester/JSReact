import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export const CATEGORIES = {
  biography: [<CalendarMonthIcon fontSize="large" />, "#926306"],
  work: [<WorkIcon fontSize="large" />, "#a303ff"],
  read: [<MenuBookIcon fontSize="large" />, "#266d55"],
  cart: [<AddShoppingCartIcon fontSize="large" />, "#433a18"],
  watch: [<LiveTvIcon fontSize="large" />, "#6e460f"],
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
