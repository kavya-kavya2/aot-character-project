
const STORAGE_KEY = "customAOTMembers";
const userContainer = document.getElementById("user-cards");

// Load stored user cards on page load
window.onload = function () {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  savedData.forEach(data => {
    createUserCard(data.name, data.image, data.intro, true);
  });
};

// Handle form submission
document.getElementById("scoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const intro = document.getElementById("intro").value;
  const imageInput = document.getElementById("image");
  const file = imageInput.files[0];

  if (!file) {
    alert("Please upload an image.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    const imageData = event.target.result;

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const newEntry = { name, image: imageData, intro };
    saved.push(newEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));

    // Create card
    createUserCard(name, imageData, intro, true);

    // Reset form
    document.getElementById("scoutForm").reset();
  };

  reader.readAsDataURL(file); // Convert image to base64
});

// Function to create a card
function createUserCard(name, image, intro, isDeletable = false) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${image}" alt="${name}" />
      </div>
      <div class="card-back">
        <h3>${name}</h3>
        <p>${intro}</p>
        ${isDeletable ? `<button class="delete-btn">🗑️ Delete</button>` : ""}
      </div>
    </div>
  `;

  // Add delete functionality
  if (isDeletable) {
    card.querySelector(".delete-btn").addEventListener("click", function () {
      let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      data = data.filter(item => !(item.name === name && item.intro === intro && item.image === image));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      userContainer.removeChild(card);
    });
  }

  userContainer.appendChild(card);
}
