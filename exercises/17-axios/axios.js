(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */

  const randomDogBtn = document.querySelector("#random-dog-btn");
  const image = document.querySelector("#image");

  randomDogBtn.addEventListener("click", () => {
    axios({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        image.src = response.data.message;
      })
      .catch((error) => console.error(error));
  });
})();
