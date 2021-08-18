/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // 1.
  const div1 = document.querySelector(".alert-danger");
  div1.setAttribute("role", "alert");

  // 2.
  const link = document.querySelector(".alert-warning a");
  link.setAttribute(
    "href",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
  link.removeAttribute("target");

  // 3.
  const div3 = document.querySelector(".alert-success");
  div3.textContent = "I am victorious!";

  // 4.
  const div4 = document.querySelector(".alert-info");
  div4.style.backgroundColor = "#ccc";

  // 5.
  const div5 = document.querySelectorAll(".alert-danger");
  div5.forEach((div) => (div.style.color = "#000"));

  // 6.
  const div6 = document.querySelectorAll(".alert-warning");
  div6[1].classList.add("hidden");

  // 7.
  const div7 = document.querySelector(".alert-success.hidden");
  div7.classList.remove("hidden");

  // 8.
  const btn = document.querySelector(".alert-info button");
  const div8 = document.querySelector(".alert-info .text-dark");
  if (btn.classList.contains("btn-primary")) {
    div8.innerHTML = "&check; blue";
  }
})();
