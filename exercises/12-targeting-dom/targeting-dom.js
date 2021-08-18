/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Single Elements
  console.log(document.querySelector("li"));
  console.log(document.querySelector("#myId"));

  // Groups of elements
  console.log(document.querySelectorAll("li"));
  console.log(document.querySelectorAll(".bg-warning"));

  // Nested elements
  console.log(document.querySelectorAll(".bg-success div"));

  // Using data attributes
  console.log(document.querySelectorAll("[data-target]"));
})();
