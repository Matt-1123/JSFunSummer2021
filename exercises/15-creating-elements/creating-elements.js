const addPostForm = document.querySelector("#add-post-form");
const postsContainer = document.querySelector("#posts");
const toggleForm = document.querySelector("#toggle-form");
const addPostModal = document.querySelector("#add-post-modal");

const postsData = [
  {
    name: "Adam Bolivo",
    date: "Aug 29, 2021",
    title: "Post 1",
    description: "lorem ipsum dolor",
  },
  {
    name: "Chelsea Denver",
    date: "Aug 29, 2021",
    title: "Post 2",
    description: "lorem ipsum dolor",
  },
  {
    name: "Eleanor Farkel",
    date: "Aug 29, 2021",
    title: "Post 3",
    description: "lorem ipsum dolor",
  },
];

let postsStr = "";
const loadPosts = (posts) => {
  let postsStr = "";

  posts.forEach((post) => {
    postsStr += `
      <li class="list-group-item">
        <div class="post-head">
          <img src="./img/user.png" alt="user" class="user-img">
          <p class="name">${post.name}</p>
        </div>
        <div class="post-body">
          <h2>${post.title}</h2>
          <p>${post.description}</p>
        </div>
      </li>
    `;
  });

  postsContainer.innerHTML = postsStr;
};

loadPosts(postsData);

addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let postObj = {};
  postObj.name = document.querySelector("#name").value;
  postObj.title = document.querySelector("#title").value;
  postObj.description = document.querySelector("#description").value;
  addPost(postObj);

  // reset form
  document.querySelector("#name").value = "";
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
});

const addPost = (post) => {
  postsData.push(post);
  loadPosts(postsData);
};

// EVENT LISTENERS
toggleForm.addEventListener("click", () => {
  if (addPostForm.classList.contains("d-none")) {
    addPostForm.classList.remove("d-none");
    toggleForm.classList.remove("btn-primary");
    toggleForm.classList.add("btn-secondary");
    toggleForm.textContent = "Cancel";
  } else {
    addPostForm.classList.add("d-none");
    toggleForm.classList.remove("btn-secondary");
    toggleForm.classList.add("btn-primary");
    toggleForm.textContent = "Add Post";
  }
});
