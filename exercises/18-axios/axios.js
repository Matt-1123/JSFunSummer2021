(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/documentation/#get-all-characters
   * To get an individual character,, you must use this:
   * https://rickandmortyapi.com/documentation/#get-a-single-character
   *
   * Use the AXIOS library to make AJAX requests.
   */

  const dropdown = document.querySelector("#dropdown");
  const mainImg = document.querySelector("#get-schwifty");
  const photoCaption = document.querySelector("#photo-caption em");

  const updateImageAndCaption = (url, caption) => {
    mainImg.src = url;
    mainImg.alt = caption;
    photoCaption.textContent = caption;
    console.log(photoCaption);
  };

  const populateCharacterDropdown = () => {
    axios({
      url: "https://rickandmortyapi.com/api/character",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.data.results.forEach((character) => {
          // create option
          const option = document.createElement("option");
          option.text = character.name;
          // add event listener to option
          option.addEventListener("click", () => {
            updateImageAndCaption(character.image, character.name);
          });
          // add option to dropdown
          dropdown.appendChild(option);
        });
      })
      .catch((error) => console.error(error));
  };

  populateCharacterDropdown();
})();
