import navbar from "../components/navbar.js";

window.onload = () => {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforebegin", navbar());
};
