// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// jquery, lodash
Promise.all([
  import(
    /* webpackChunkName: "jquery" */
    "jquery"
  ),
  import(
    /* webpackChunkName: "lodash" */
    "lodash"
  ),
]).then(([{ default: $ }, { default: _ }]) => {
  $(".jquery").css("color", "red");
  const lodash = document.querySelector(".lodash");
  lodash.textContent = _.upperFirst(lodash.textContent);
});
