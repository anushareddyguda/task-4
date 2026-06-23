const API_URL = "http://localhost:5000/api/users";

async function loadUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();

  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach(user => {
    userList.innerHTML += `
      <div class="user-card">
        <div>
          <h3>${user.name}</h3>
          <span class="${
            user.available ? "available" : "unavailable"
          }">
            ${user.available ? "Available" : "Unavailable"}
          </span>
        </div>

        <input
          type="checkbox"
          ${user.available ? "checked" : ""}
          onchange="toggleAvailability('${user._id}', this.checked)"
        >
      </div>
    `;
  });
}

async function toggleAvailability(id, status) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      available: status,
    }),
  });

  loadUsers();
}

loadUsers();