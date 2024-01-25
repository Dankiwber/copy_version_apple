const SubMenu = document.getElementById("SubMenu");
const extension = document.querySelector("header");

function applyBlur() {
  var background = document.getElementById("background");
  background.style.width = "100%";
  background.style.height = "100%";
  background.style.backdropFilter = "blur(10px)"; // Apply a 10px blur
}

function removeBlur() {
  var background = document.getElementById("background");
  background.style.width = "0%";
  background.style.height = "0%";
  background.style.backdropFilter = "blur(0px)"; // Remove the blur
}
current = "";
document.querySelectorAll(".header_js").forEach((item) => {
  item.addEventListener("mouseover", function () {
    extension.style.backgroundColor = "rgba(22, 22, 23)";
    if (this.id == "store" && this.id != current) {
      current = this.id;
      extension.style.height = "430px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p class="animated-text" style="--delay: 0s;" id="box-title">shop</p>' +
        "<p class='animated-text' style='--delay: 0.04s;'>Shop at Latest</p>" +
        "<p class='animated-text' style='--delay: 0.08s;'>Mac</p>" +
        "<p class='animated-text' style='--delay: 0.12s;'>iPad</p>" +
        "<p class='animated-text' style='--delay: 0.16s;'>iPhone</p>" +
        "<p class='animated-text' style='--delay: 0.2s;'>Apple Watch</p>" +
        "<p class='animated-text' style='--delay: 0.24s;'>Accessories</p>" +
        "</div>" +
        "<div id='box2'>" +
        "<p class='animated-text' style='--delay: 0.1s;' id='box-title'>Quick Links</p>" +
        "<p class='animated-text' style='--delay: 0.16s;' >Find a Store</p>" +
        "<p class='animated-text' style='--delay: 0.22s;' >Order Status</p>" +
        "<p class='animated-text' style='--delay: 0.28s;' >Apple Trade in</p>" +
        "<p class='animated-text' style='--delay: 0.34s;' >Financing</p>" +
        "</div>" +
        "<div id='box3'>" +
        "<p  class='animated-text' style='--delay: 0.1s;' id='box-title'>Shop Special Stores</p>" +
        "<p class='animated-text' style='--delay: 0.16s;' >Certified Refurbished</p>" +
        "<p class='animated-text' style='--delay: 0.22s;' >Education</p>" +
        "<p class='animated-text' style='--delay: 0.28s;'>Business</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "mac" && this.id != current) {
      current = this.id;
      extension.style.height = "540px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p class="animated-text" style="--delay: 0s;" id="box-title">Explore Mac</p>' +
        "<p class='animated-text' style='--delay: 0.04s;'>Explore All Mac</p>" +
        "<p class='animated-text' style='--delay: 0.08s;'>MacBook Air</p>" +
        "<p class='animated-text' style='--delay: 0.12s;'>MacBook Pro</p>" +
        "<p class='animated-text' style='--delay: 0.16s;'>iMac</p>" +
        "<p class='animated-text' style='--delay: 0.2s;'>Mac mini</p>" +
        "<p class='animated-text' style='--delay: 0.24s;'>Mac Studio</p>" +
        "<p class='animated-text' style='--delay: 0.28s;'>Mac Pro</p>" +
        "<p class='animated-text' style='--delay: 0.32s;'>Display</p>" +
        "<p class='animated-text' style='--delay: 0.36s;' id='box-con'>Compare Mac</p>" +
        "<p class='animated-text' style='--delay: 0.4s;' id='box-buttom'>Mac Does That</p>" +
        "</div>" +
        '<div id="box2">' +
        '<p class="animated-text" style="--delay: 0s;" id="box-title">Shop Mac</p>' +
        "<p class='animated-text' style='--delay: 0.04s;'>Shop Mac</p>" +
        "<p class='animated-text' style='--delay: 0.08s;'>Mac Accessories</p>" +
        "<p class='animated-text' style='--delay: 0.12s;'>Mac Trade in</p>" +
        "<p class='animated-text' style='--delay: 0.16s;'>Financing</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p class="animated-text" style="--delay: 0s;" id="box-title">More from Mac</p>' +
        "<p class='animated-text' style='--delay: 0.04s;'>Mac Support</p>" +
        "<p class='animated-text' style='--delay: 0.08s;'>AppleCare+ for Mac</p>" +
        "<p class='animated-text' style='--delay: 0.12s;'>macOS Sonoma</p>" +
        "<p class='animated-text' style='--delay: 0.16s;'>Final Cut Pro</p>" +
        "<p class='animated-text' style='--delay: 0.2s;'>Logic Pro</p>" +
        "<p class='animated-text' style='--delay: 0.24s;'>Continuity</p>" +
        "<p class='animated-text' style='--delay: 0.28s;'>iCloud+</p>" +
        "<p class='animated-text' style='--delay: 0.32s;'>Mac for Business</p>" +
        "<p class='animated-text' style='--delay: 0.36s;'>Education</p>" +
        "</div>" +
        "</div>";
    }

    if (this.id == "ipad" && this.id != current) {
      current = this.id;
      extension.style.height = "510px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p class="animated-text" style="--delay: 0s;" id="box-title">Explore iPad</p>' +
        "<p class='animated-text' style='--delay: 0.04s;'>Explore All iPad</p>" +
        "<p class='animated-text' style='--delay: 0.08s;'>iPad Pro</p>" +
        "<p class='animated-text' style='--delay: 0.12s;'>iPad Air</p>" +
        "<p class='animated-text' style='--delay: 0.16s;'>iPad</p>" +
        "<p class='animated-text' style='--delay: 0.2s;'>iPad mini</p>" +
        "<p class='animated-text' style='--delay: 0.24s;'>Apple Pencil</p>" +
        "<p class='animated-text' style='--delay: 0.28s;'>Keyboards</p>" +
        "<p class='animated-text' style='--delay: 0.32s;' id='box-con'>Compare iPad</p>" +
        "<p class='animated-text' style='--delay: 0.36s;' id='box-buttom'>Why iPad</p>" +
        "</div>" +
        '<div id="box2">' +
        '<p class="animated-text" style="--delay: 0s;" id="box-title">Shop iPad</p>' +
        "<p class='animated-text' style='--delay: 0.04s;'>Shop iPad</p>" +
        "<p class='animated-text' style='--delay: 0.08s;'>iPad Accessories</p>" +
        "<p class='animated-text' style='--delay: 0.12s;'>iPad Trade in</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p class="animated-text" style="--delay: 0s;" id="box-title">More from iPad</p>' +
        "<p class='animated-text' style='--delay: 0.04s;'>iPad Support</p>" +
        "<p class='animated-text' style='--delay: 0.08s;'>AppleCare+ for iPad</p>" +
        "<p class='animated-text' style='--delay: 0.12s;'>iPadOS 17</p>" +
        "<p class='animated-text' style='--delay: 0.16s;'>Final Cut Pro for iPad</p>" +
        "<p class='animated-text' style='--delay: 0.2s;'>Logic Pro for iPad</p>" +
        "<p class='animated-text' style='--delay: 0.24s;'>iCloud+</p>" +
        "<p class='animated-text' style='--delay: 0.28s;'>Education</p>" +
        "</div>" +
        "</div>";
    }

    if (this.id == "iphone" && this.id != current) {
      current = this.id;
      extension.style.height = "480px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore All iPhone</p>' +
        "<p>iPhone 15 Pro</p>" +
        "<p>iPhone 15</p>" +
        "<p>iPhone 14</p>" +
        "<p>iPhone 13</p>" +
        "<p>iPhone SE</p>" +
        '<p id="box-con">Compare iPhone</p>' +
        '<p id="box-buttom">Switch from Andriod</p>' +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Shop iPhone</p>' +
        "<p>Shop iPhone</p>" +
        "<p>iPhone Accessories</p>" +
        "<p>Apple Trade in</p>" +
        "<p>Financing</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p id="box-title">More from iPhone</p>' +
        "<p>iPhone Support</p>" +
        "<p>AppleCare+ for iPhone</p>" +
        "<p>iOS 17</p>" +
        "<p>iPhone Privacy</p>" +
        "<p>iCloud+</p>" +
        "<p>Wallet Pay</p>" +
        "<p>Siri</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "watch" && this.id != current) {
      current = this.id;
      extension.style.height = "480px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore Watch</p>' +
        "<p>Explore All Apple Watch</p>" +
        "<p>Apple Watch Series 9</p>" +
        "<p>Apple Watch Ultra 2</p>" +
        "<p>Apple Watch SE</p>" +
        "<p>Apple Watch Nike</p>" +
        "<p>Apple Watch Hermès</p>" +
        '<p id="box-con">Compare Watch</p>' +
        '<p id="box-buttom">Why Apple Watch</p>' +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Shop Watch</p>' +
        "<p>Shop Apple Watch</p>" +
        "<p>Apple Watch Studio</p>" +
        "<p>Apple Watch Bands</p>" +
        "<p>Apple Watch Accessories</p>" +
        "<p>Apple Trade in</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p id="box-title">More from Watch</p>' +
        "<p>Apple Watch Support</p>" +
        "<p>AppleCare+</p>" +
        "<p>watchOS 10</p>" +
        "<p>Apple Fitness+</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "airpods" && this.id != current) {
      current = this.id;
      extension.style.height = "400px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore AirPods</p>' +
        "<p>Explore All AirPods</p>" +
        "<p>AirPods Pro 2nd generation</p>" +
        "<p>AirPods 2nd generation</p>" +
        "<p>AirPods 3nd generation</p>" +
        "<p>AirPods Max</p>" +
        '<p id="box-con">Compare AirPods</p>' +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Shop AirPods</p>' +
        "<p>Shop AirPods</p>" +
        "<p>AirPods Accessories</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p id="box-title">More from AirPods</p>' +
        "<p>AirPods Support</p>" +
        "<p>AppleCare+ for Headphones</p>" +
        "<p>Apple Music</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "tv&home" && this.id != current) {
      current = this.id;
      extension.style.height = "380px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore TV & Home</p>' +
        "<p>Explore TV & Home</p>" +
        "<p>Apple TV 4K</p>" +
        "<p>HomePod</p>" +
        "<p>Homepod mini</p>" +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Shop TV & Home</p>' +
        "<p>Shop Apple TV 4K</p>" +
        "<p>Shop HomePod</p>" +
        "<p>Shop HomePod mini</p>" +
        "<p>Shop Siri Remote</p>" +
        "<p>TV & Home Accessories</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p id="box-title">More from TV & Home</p>' +
        "<p>Apple TV Support</p>" +
        "<p>HomePod Support</p>" +
        "<p>AppleCare+ for</p>" +
        "<p>Apple TV app</p>" +
        "<p>Apple TV+</p>" +
        "<p>Home app</p>" +
        "<p>Apple Music</p>" +
        "<p>Siri</p>" +
        "<p>AirPlay</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "entertainment" && this.id != current) {
      current = this.id;
      extension.style.height = "570px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore Entertainment</p>' +
        "<p>Apple One</p>" +
        "<p>Apple TV+</p>" +
        "<p>Apple Music</p>" +
        "<p>Apple Arcade</p>" +
        "<p>Apple Fitness+</p>" +
        "<p>Apple News+</p>" +
        "<p>Apple Podcats</p>" +
        "<p>Apple Book</p>" +
        "<p>App Store</p>" +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Support</p>' +
        "<p>Apple TV+ Support</p>" +
        "<p>Apple Music Support</p>" +
        "</div>";
    }
    if (this.id == "accessories" && this.id != current) {
      current = this.id;
      extension.style.height = "470px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Shop Accessories</p>' +
        "<p>Shop All Accessories</p>" +
        "<p>Mac</p>" +
        "<p>iPad</p>" +
        "<p>iPhone</p>" +
        "<p>Apple Watch</p>" +
        "<p>AirPods</p>" +
        "<p>TV & Home</p>" +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Explore Accessories</p>' +
        "<p>Made by Apple</p>" +
        "<p>eats by Dr. Dre</p>" +
        "<p>AirTag</p>" +
        "</div>";
    }
    if (this.id == "support" && this.id != current) {
      current = this.id;
      extension.style.height = "500px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore Support</p>' +
        "<p>iPhone</p>" +
        "<p>Mac</p>" +
        "<p>iPad</p>" +
        "<p>Watch</p>" +
        "<p>AirPods</p>" +
        "<p>Music</p>" +
        "<p>TV</p>" +
        '<p id="box-con">Explore Support</p>' +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Get Help</p>' +
        "<p>Community</p>" +
        "<p>Check Coverage</p>" +
        "<p>Repair</p>" +
        "<p>Contact Us</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p id="box-title">Helpful Topics</p>' +
        "<p>Get AppleCare+</p>" +
        "<p>Apple ID & Password</p>" +
        "<p>Billing & Subscriptions</p>" +
        "<p>Find My</p>" +
        "<p>Accessibility</p>" +
        "</div>" +
        "</div>";
    }
    applyBlur();
    SubMenu.style.display = "block";
  });
  // Function to hide the submenu
  function hideSubMenu() {
    SubMenu.style.display = "none";
    extension.style.height = "44px";
    extension.style.backgroundColor = "rgba(22, 22, 23, 0.8)";
  }
  extension.addEventListener("mouseout", function () {
    if (!extension.contains(event.relatedTarget)) {
      removeBlur();
      hideSubMenu();
    }
  });
});

let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;

function changeImage() {
  images[currentImageIndex].classList.remove("active");

  currentImageIndex = (currentImageIndex + 1) % totalImages;

  images[currentImageIndex].classList.add("active");
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
