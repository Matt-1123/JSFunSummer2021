/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Alert Me
 * When the clicks on the button that says "Alert Me!", it should display an alert.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */
const alertBtn = document.querySelector("#alert-btn");
alertBtn.addEventListener("click", () => alert("Alert! Alert!"));

/**
 * Challenge 2: Disable a button that will charge a credit card.
 *
 * To prevent users from charging the credit card more than once:
 * 1. Disable the button when it is clicked.
 * 2. Change the text to say e.g. "Loading ..." once it is clicked.
 */
const charge = document.querySelector("#charge-card");
charge.addEventListener("click", () => {
  charge.disabled = true;
  charge.textContent = "Loading ...";
});

/**
 * Challenge 3: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden",
 * but you can switch up the HTML so that it uses inline styles if you like.
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */
const btn = document.querySelector("#toggle-comments");
const comments = document.querySelector("#comments");

btn.addEventListener("click", () => {
  comments.classList.toggle("hidden");
  comments.classList.contains("hidden")
    ? (btn.textContent = "View Comments")
    : (btn.textContent = "Hide Comments");
});

/**
 * Challenge 4: Rendering what a user is typing on the page.
 *
 * When the user types inside the textbook labeled "Enter mystery text here",
 * it should display what the user is typing in the <div></div> tags below.
 */
const mysteryTextCard = document.querySelector("#mystery-text-card");
const mysteryTextInput = document.querySelector("#mystery-text-input");

const renderText = (e) => (mysteryTextCard.textContent = e.target.value);

mysteryTextInput.addEventListener("keydown", renderText);

/**
 * Challenge 5: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
 * display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResult.textContent = `No results for ${searchInput.value} found`;
  searchInput.value = "";
});

/**
 * Challenge 6: Agree to the terms and conditions
 *
 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
 * the error "You must agree to the terms and conditions" should appear
 * and the label "I Agree to the Terms and Conditions" should turn red.
 * If she has, then display "Thank you for signing up".
 *
 * To start, you will need to hide some element on the page and change the input's classes.
 */
const terms = document.querySelector("#terms");
const termsForm = document.querySelector("#terms-form");
const termsFail = document.querySelector("#terms-fail");
const termsSuccess = document.querySelector("#terms-success");

termsForm.addEventListener("submit", (e) => {
  if (terms.checked) {
    e.preventDefault();
    terms.classList.remove("is-invalid");
    termsSuccess.classList.remove("hidden");
    termsFail.classList.add("hidden");
  } else {
    e.preventDefault();
    termsFail.classList.remove("hidden");
    termsSuccess.classList.add("hidden");
  }
});

/**
 * Challenge 7: Add pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */
const group1 = document.querySelectorAll('[data-group="1"]');
const group2 = document.querySelectorAll('[data-group="2"]');
const pageLinks = document.querySelectorAll(".page-link");

group2.forEach((student) => student.classList.add("hidden"));

const paginate = (e) => {
  if (e.target.id === "page-prev" || e.target.textContent === "1") {
    group1.forEach((student) => student.classList.remove("hidden"));
    group2.forEach((student) => student.classList.add("hidden"));
  } else if (e.target.id === "page-next" || e.target.textContent === "2") {
    group1.forEach((student) => student.classList.add("hidden"));
    group2.forEach((student) => student.classList.remove("hidden"));
  }
};

pageLinks.forEach((link) => link.addEventListener("click", paginate));
