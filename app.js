let users = [];
let currentIndex = -1;


function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            users = data; 
            currentIndex = 0;
            renderUser();
        })
        .catch(error => console.error("Error fetching users:", error));
}


function renderUser() {
    if (users.length > 0 && currentIndex >= 0 && currentIndex < users.length) {
        const userName = users[currentIndex].name;
        document.getElementById("user-name").textContent = `User: ${userName}`;
        document.getElementById("prev-btn").disabled = currentIndex === 0;
        document.getElementById("next-btn").disabled = currentIndex === users.length - 1;
    }
}

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentIndex < users.length - 1) {
        currentIndex++;
        renderUser();
    }
});

document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderUser();
    }
});

fetchUsers();