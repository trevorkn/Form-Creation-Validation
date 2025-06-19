async function fetchUserData() {

  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

   try {
    const response = await fetch(apiUrl);
    const users =await response.json();

    // ✅ Clear "Loading user data..." message
  dataContainer.innerHTML = ""; //clear loading page

  const userList = document.createElement("ul");

  users.forEach(user => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    userList.appendChild(listItem);
  });

  dataContainer.appendChild(userList);

    //We'll display users later
   } catch (error) {
    console.error("Error fetching user data.", error);
    dataContainer.innerHTML = "";           // Clear existing content (like loading message)
    dataContainer.textContent = "Failed to load user data";
   }
}
// Run fetchUserData only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
fetchUserData();
});