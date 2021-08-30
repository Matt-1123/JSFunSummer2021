const toggleForm = document.querySelector("#toggle-form");
const addPostForm = document.querySelector("#add-post-form");
const postsContainer = document.querySelector("#posts");

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

const loadPosts = (posts) => {
  postsStr = "";

  posts.forEach((post) => {
    postsStr += `
      <li class="list-group-item my-1 rounded">
        <div class="post-head d-flex align-items-center">
          <img src="./img/user.png" alt="user" class="user-img mr-2" style="width: 30px; height: 30px;">
          <p class="name">${post.name}</p>
        </div>
        <div class="post-body">
          <h3>${post.title}</h3>
          <p>${post.description}</p>
        </div>
      </li>
    `;
  });

  postsContainer.innerHTML = postsStr;
};

const addPost = (post) => {
  postsData.push(post);
  loadPosts(postsData);
};

loadPosts(postsData);

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

  // close form and change toggle button
  addPostForm.classList.add("d-none");
  toggleForm.classList.remove("btn-secondary");
  toggleForm.classList.add("btn-primary");
  toggleForm.textContent = "Add Post";
});
