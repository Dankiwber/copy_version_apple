document.addEventListener("DOMContentLoaded", function () {
  var storeItem = document.getElementById("store");
  var storeSubMenu = document.getElementById("storeSubMenu");
  var extension = document.getElementById("myheader");

  // Function to show the submenu
  function showSubMenu() {
    storeSubMenu.style.display = "block";
    extension.style.height = "500px";
    extension.classList.add("slide-down");
  }

  // Function to hide the submenu
  function hideSubMenu() {
    storeSubMenu.style.display = "none";
    extension.style.maxHeight = "44px";
    extension.classList.remove("slide-down");
  }

  // Show the submenu when mouse enters the 'Store' menu item
  storeItem.addEventListener("mouseenter", showSubMenu);

  // Hide the submenu when mouse leaves the 'Store' menu item
  // and when the mouse leaves the submenu itself
  extension.addEventListener("mouseleave", function (event) {
    // Check if the mouse is moving to the submenu
    if (!extension.contains(event.relatedTarget)) {
      hideSubMenu();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var storeItem = document.getElementById("mac");
  var storeSubMenu = document.getElementById("macSubMenu");
  var extension = document.getElementById("myheader");

  // Function to show the submenu
  function showSubMenu() {
    storeSubMenu.style.display = "block";
    extension.style.height = "500px";
    extension.classList.add("slide-down");
  }

  // Function to hide the submenu
  function hideSubMenu() {
    storeSubMenu.style.display = "none";
    extension.style.maxHeight = "44px";
    extension.classList.remove("slide-down");
  }

  // Show the submenu when mouse enters the 'Store' menu item
  storeItem.addEventListener("mouseenter", showSubMenu);

  // Hide the submenu when mouse leaves the 'Store' menu item
  // and when the mouse leaves the submenu itself
  extension.addEventListener("mouseleave", function (event) {
    // Check if the mouse is moving to the submenu
    if (!extension.contains(event.relatedTarget)) {
      hideSubMenu();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var storeItem = document.getElementById("ipad");
  var storeSubMenu = document.getElementById("ipadSubMenu");
  var extension = document.getElementById("myheader");

  // Function to show the submenu
  function showSubMenu() {
    storeSubMenu.style.display = "block";
    extension.style.height = "500px";
    extension.classList.add("slide-down");
  }

  // Function to hide the submenu
  function hideSubMenu() {
    storeSubMenu.style.display = "none";
    extension.style.maxHeight = "44px";
    extension.classList.remove("slide-down");
  }

  // Show the submenu when mouse enters the 'Store' menu item
  storeItem.addEventListener("mouseenter", showSubMenu);

  // Hide the submenu when mouse leaves the 'Store' menu item
  // and when the mouse leaves the submenu itself
  extension.addEventListener("mouseleave", function (event) {
    // Check if the mouse is moving to the submenu
    if (!extension.contains(event.relatedTarget)) {
      hideSubMenu();
    }
  });
});
