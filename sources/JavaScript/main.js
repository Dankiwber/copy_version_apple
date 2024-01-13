const SubMenu = document.getElementById("SubMenu");
const extension = document.querySelector("header");

function applyBlur() {
  var background = document.getElementById("background");
  background.style.zIndex = "1";
  background.style.backdropFilter = "blur(10px)"; // Apply a 10px blur
}

function removeBlur() {
  var background = document.getElementById("background");
  background.style.zIndex = "-1";
  background.style.backdropFilter = "blur(0px)"; // Remove the blur
}

document.querySelectorAll(".header_js").forEach((item) => {
  item.addEventListener("mouseover", function () {
    extension.style.backgroundColor = "rgba(22, 22, 23)";
    if (this.id == "store") {
      extension.style.height = "430px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">shop</p>' +
        "<p>Shop at Latest</p>" +
        "<p>Mac</p>" +
        "<p>iPad</p>" +
        "<p>iPhone</p>" +
        "<p>Apple Watch</p>" +
        "<p>Accessories</p>" +
        "</div>" +
        "<div id='box2'>" +
        "<p id='box-title'>Quick Links</p>" +
        "<p>Find a Store</p>" +
        "<p>Order Status</p>" +
        "<p>Apple Trade in</p>" +
        "<p>Financing</p>" +
        "</div>" +
        "<div id='box3'>" +
        "<p id='box-title'>Shop Special Stores</p>" +
        "<p>Certified Refurbished</p>" +
        "<p>Education</p>" +
        "<p>Business</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "mac") {
      extension.style.height = "540px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore Mac</p>' +
        "<p>Explore All Mac</p>" +
        "<p>MacBook Air</p>" +
        "<p>MacBook Pro</p>" +
        "<p>iMac</p>" +
        "<p>Mac mini</p>" +
        "<p>Mac Studio</p>" +
        "<p>Mac Pro</p>" +
        "<p>Display</p>" +
        '<p id="box-con">Compare Mac</p>' +
        '<p id="box-buttom">Mac Does That</p>' +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Shop Mac</p>' +
        "<p>Shop Mac</p>" +
        "<p>Mac Accessories</p>" +
        "<p>Mac Trade in</p>" +
        "<p>Financing</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p id="box-title">More from Mac</p>' +
        "<p>Mac Support</p>" +
        "<p>AppleCare+ for Mac</p>" +
        "<p>macOS Sonoma</p>" +
        "<p>Final Cut Pro</p>" +
        "<p>Logic Pro</p>" +
        "<p>Continuity</p>" +
        "<p>iCloud+</p>" +
        "<p>Mac for Business</p>" +
        "<p>Education</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "ipad") {
      extension.style.height = "510px";
      SubMenu.innerHTML =
        '<div class="sub-container">' +
        '<div id="box1">' +
        '<p id="box-title">Explore iPad</p>' +
        "<p>Explore All iPad</p>" +
        "<p>iPad Pro</p>" +
        "<p>iPad Air</p>" +
        "<p>iPad</p>" +
        "<p>iPad mini</p>" +
        "<p>Apple Pencil</p>" +
        "<p>Keyboards</p>" +
        '<p id="box-con">Compare iPad</p>' +
        '<p id="box-buttom">Why iPad</p>' +
        "</div>" +
        '<div id="box2">' +
        '<p id="box-title">Shop iPad</p>' +
        "<p>Shop iPad</p>" +
        "<p>iPad Accessories</p>" +
        "<p>iPad Trade in</p>" +
        "</div>" +
        '<div id="box3">' +
        '<p id="box-title">More from iPad</p>' +
        "<p>iPad Support</p>" +
        "<p>AppleCare+ for iPad</p>" +
        "<p>iPadOS 17</p>" +
        "<p>Final Cut Pro for iPad</p>" +
        "<p>Logic Pro for iPad</p>" +
        "<p>iCloud+</p>" +
        "<p>Education</p>" +
        "</div>" +
        "</div>";
    }
    if (this.id == "iphone") {
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
    if (this.id == "watch") {
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
    if (this.id == "airpods") {
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
    if (this.id == "tv&home") {
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
    if (this.id == "entertainment") {
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
    if (this.id == "accessories") {
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
    if (this.id == "support") {
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
