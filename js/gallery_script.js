// Utility function to generate photo data
function generatePhotos(count) {
  return Array.from({ length: count }, (_, index) => ({
    name: `${index + 1}.jpg`,
    type: "photo",
  }));
}

const folderData = {
  "": [
    { name: "Conferences", type: "folder" },
    { name: "Events", type: "folder" },
    { name: "Field Trips", type: "folder" },
    { name: "Places", type: "folder" },
  ],
  Conferences: [
    { name: "2023_MIGARSS_Hyderabad", type: "folder" },
    { name: "2023_IGARSS_USA", type: "folder" },
    { name: "2024_InGARSS_Goa", type: "folder" }, // Ensure this matches the path
    { name: "2025_IGARSS_Australia", type: "folder" },
  ],
  "Conferences/2024_InGARSS_Goa": generatePhotos(2), // Correct the path here
  "Conferences/2023_MIGARSS_Hyderabad": generatePhotos(2),
  "Conferences/2023_IGARSS_USA": generatePhotos(2),
  "Conferences/2025_IGARSS_Australia": generatePhotos(2),
  Events: [
    { name: "2022 04(April) Geoinnovation", type: "folder" },
    { name: "2022 09(Sept) Onam Celebration", type: "folder" },
    { name: "2022 11(Nov) IEEE-GRSS HandsOn Workshop", type: "folder" },
    { name: "2023 03(Mar) DST Winter Training Program", type: "folder" },
    { name: "2023 10(Oct) IEEE Day - i3 Event", type: "folder" },
    { name: "2023 12(Dec) 18Dec GIS Day", type: "folder" },
  ],
  "Field Trips": [
    { name: "2022 10(Oct) Tumkur University", type: "folder" },
    { name: "2023 10(Oct) Kolar", type: "folder" },
    { name: "Date(3)_place", type: "folder" },
  ],
  Places: [
    { name: "Agra", type: "folder" },
    { name: "Bengaluru", type: "folder" },
    { name: "Bhopal", type: "folder" },
    { name: "Delhi", type: "folder" },
    { name: "Goa", type: "folder" },
    { name: "Gwalior", type: "folder" },
    { name: "Hampi", type: "folder" },
    { name: "Hogenakkal", type: "folder" },
    { name: "Indore", type: "folder" },
    { name: "Jhansi", type: "folder" },
    { name: "Kanyakumari", type: "folder" },
    { name: "Kedarnath", type: "folder" },
    { name: "Kernal", type: "folder" },
    { name: "Kolar", type: "folder" },
    { name: "Lepakshi", type: "folder" },
    { name: "Lucknow", type: "folder" },
    { name: "Madurai", type: "folder" },
    { name: "Nainital", type: "folder" },
    { name: "Nandi Hills", type: "folder" },
    { name: "Nepal", type: "folder" },
    { name: "Orchha", type: "folder" },
    { name: "Ponmudi", type: "folder" },
    { name: "Rameshwaram", type: "folder" },
    { name: "Sultanpur", type: "folder" },
    { name: "Thiruvananthapuram", type: "folder" },
    { name: "Varanasi", type: "folder" },
  ],
  "Field Trips/2022 10(Oct) Tumkur University": generatePhotos(10),
  "Field Trips/2023 10(Oct) Kolar": generatePhotos(58),
  "Field Trips/Date(2)_place": generatePhotos(2),
  "Events/2022 04(April) Geoinnovation": generatePhotos(13),
  "Events/GRSS_Workshop_Nov_2022": generatePhotos(10),
  "Events/2022 09(Sept) Onam Celebration": generatePhotos(11),
  "Events/2022 11(Nov) IEEE-GRSS HandsOn Workshop": generatePhotos(10),
  "Events/2023 03(Mar) DST Winter Training Program": generatePhotos(74),
  "Events/2023 10(Oct) IEEE Day - i3 Event": generatePhotos(11),
  "Events/2023 12(Dec) 18Dec GIS Day": generatePhotos(4),
  "Places/Agra": generatePhotos(2),
  "Places/Bengaluru": generatePhotos(2),
  "Places/Bhopal": generatePhotos(2),
  "Places/Delhi": generatePhotos(2),
  "Places/Goa": generatePhotos(2),
  "Places/Gwalior": generatePhotos(2),
  "Places/Hampi": generatePhotos(133),
  "Places/Hogenakkal": generatePhotos(10),
  "Places/Indore": generatePhotos(2),
  "Places/Jhansi": generatePhotos(4),
  "Places/Kanyakumari": generatePhotos(2),
  "Places/Kedarnath": generatePhotos(7),
  "Places/Kernal": generatePhotos(2),
  "Places/Kolar": generatePhotos(2),
  "Places/Lepakshi": generatePhotos(2),
  "Places/Lucknow": generatePhotos(3),
  "Places/Madurai": generatePhotos(2),
  "Places/Nainital": generatePhotos(13),
  "Places/Nandi Hills": generatePhotos(7),
  "Places/Nepal": generatePhotos(2),
  "Places/Orchha": generatePhotos(4),
  "Places/Ponmudi": generatePhotos(14),
  "Places/Rameshwaram": generatePhotos(3),
  "Places/Sultanpur": generatePhotos(3),
  "Places/Thiruvananthapuram": generatePhotos(2),
  "Places/Varanasi": generatePhotos(2),
};

let currentPath = ""; // Keeps track of the current path
let folderHistory = []; // To keep track of folder navigation

function renderContent(path, containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found!`);
    return;
  }

  console.log(`Rendering content for path: "${path}"`); // Debugging log
  console.log("Folder data for path:", folderData[path]); // Debugging log
  container.innerHTML = ""; // Clear existing content

  const items = folderData[path] || [];
  if (!items.length) {
    console.warn(`No items found for path: "${path}"`); // Debugging log
    container.innerHTML = "<p>No folders or photos found.</p>";
    return;
  }

  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add(item.type === "folder" ? "folder-item" : "photo-item");

    if (item.type === "folder") {
      const folderIcon = document.createElement("img");
      folderIcon.src = "images/icons/folder-icon.png";
      folderIcon.alt = `${item.name} Icon`;
      folderIcon.onerror = () => (folderIcon.src = "images/icons/default-folder-icon.png");

      const folderName = document.createElement("p");
      folderName.textContent = item.name;

      itemElement.appendChild(folderIcon);
      itemElement.appendChild(folderName);
      itemElement.addEventListener("click", () => {
        folderHistory.push(currentPath);
        currentPath = path ? `${path}/${item.name}` : item.name;
        console.log("Navigating to folder:", currentPath); // Debugging log
        renderContent(currentPath, containerId);
        updateBreadcrumb();
      });
    } else if (item.type === "photo") {
      const photo = document.createElement("img");
      photo.src = `gallery/${path}/${item.name}`;
      photo.alt = item.name;
      photo.onerror = () => (photo.src = "images/icons/default-photo.png");

      itemElement.appendChild(photo);
    }

    container.appendChild(itemElement);
  });

  updateBreadcrumb();
}

// Back button functionality
function goBack() {
  if (folderHistory.length > 0) {
    currentPath = folderHistory.pop(); // Get the previous path
    renderContent(currentPath, "folder-container");

    if (folderHistory.length === 0) {
      document.getElementById("back-button").style.display = "none"; // Hide back button if at root
    }
    updateBreadcrumb(); // Update breadcrumb
  }
}

// Add event listener for the back button
document.getElementById("back-button").addEventListener("click", goBack);

// Add event listener for the keyboard backspace key
document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    event.preventDefault(); // Prevent default browser back navigation
    goBack();
  }
});

// Function to initialize the lightbox functionality
function initializeLightbox() {
  // Create the lightbox container
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  // Add an image element to the lightbox
  const lightboxImage = document.createElement("img");
  lightbox.appendChild(lightboxImage);

  // Add a close button to the lightbox
  const closeButton = document.createElement("button");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;"; // Close icon
  lightbox.appendChild(closeButton);

  // Add left and right navigation arrows
  const leftArrow = document.createElement("button");
  leftArrow.classList.add("arrow", "left-arrow");
  leftArrow.innerHTML = "&#10094;"; // Left arrow symbol
  lightbox.appendChild(leftArrow);

  const rightArrow = document.createElement("button");
  rightArrow.classList.add("arrow", "right-arrow");
  rightArrow.innerHTML = "&#10095;"; // Right arrow symbol
  lightbox.appendChild(rightArrow);

  // Append the lightbox to the body
  document.body.appendChild(lightbox);

  // Track the currently displayed image and all images
  let currentImageIndex = -1;
  let images = [];

  // Function to update the lightbox image
  function updateLightboxImage(index) {
    if (index >= 0 && index < images.length) {
      currentImageIndex = index;
      lightboxImage.src = images[currentImageIndex].src;
      lightbox.style.display = "flex"; // Show the lightbox
    }
  }

  // Add event listener to close the lightbox
  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Add event listener to close the lightbox when clicking outside the image
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Add event listeners for navigation arrows
  leftArrow.addEventListener("click", () => {
    updateLightboxImage(
      (currentImageIndex - 1 + images.length) % images.length
    );
  });

  rightArrow.addEventListener("click", () => {
    updateLightboxImage((currentImageIndex + 1) % images.length);
  });

  // Add keyboard navigation for lightbox
  document.addEventListener("keydown", (event) => {
    if (lightbox.style.display === "flex") {
      if (event.key === "ArrowRight") {
        // Show the next image
        updateLightboxImage((currentImageIndex + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        // Show the previous image
        updateLightboxImage(
          (currentImageIndex - 1 + images.length) % images.length
        );
      } else if (event.key === "Escape") {
        // Close the lightbox
        lightbox.style.display = "none";
      }
    }
  });

  // Add click event to all images
  images = document.querySelectorAll(".photo-item img");
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      updateLightboxImage(index); // Open the clicked image in the lightbox
    });
  });
}

// Enable keyboard navigation for the photo and folder grid
function enableKeyboardNavigation(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn(`Container with ID "${containerId}" not found!`); // Log a warning if the container doesn't exist
    return;
  }

  const items = Array.from(
    container.querySelectorAll(".folder-item, .photo-item")
  ); // Get all folder and photo items
  let currentIndex = 0; // Track the currently focused item

  // Function to update focus on the current item
  function updateFocus(index) {
    if (items[currentIndex]) {
      items[currentIndex].classList.remove("focused"); // Remove focus from the previous item
    }
    currentIndex = index;
    if (items[currentIndex]) {
      items[currentIndex].classList.add("focused"); // Add focus to the current item
      items[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      }); // Scroll into view
    }
  }

  // Add keyboard event listener
  container.addEventListener("keydown", (event) => {
    const columns = Math.floor(container.offsetWidth / items[0].offsetWidth); // Calculate the number of columns
    if (event.key === "ArrowRight") {
      // Move to the next item
      updateFocus((currentIndex + 1) % items.length);
      event.preventDefault(); // Prevent default scrolling
    } else if (event.key === "ArrowLeft") {
      // Move to the previous item
      updateFocus((currentIndex - 1 + items.length) % items.length);
      event.preventDefault(); // Prevent default scrolling
    } else if (event.key === "ArrowDown") {
      // Move down in the grid
      updateFocus((currentIndex + columns) % items.length);
      event.preventDefault(); // Prevent default scrolling
    } else if (event.key === "ArrowUp") {
      // Move up in the grid
      updateFocus((currentIndex - columns + items.length) % items.length);
      event.preventDefault(); // Prevent default scrolling
    } else if (event.key === "Enter") {
      // Trigger click on the focused item
      items[currentIndex].click();
    }
  });

  // Initialize focus on the first item
  if (items.length > 0) {
    items[0].setAttribute("tabindex", "0"); // Make the first item focusable
    items[0].focus(); // Set focus to the first item
    updateFocus(0); // Highlight the first item
  }
}

// Enable touch navigation for the photo and folder grid
function enableTouchNavigation(containerId) {
  const container = document.getElementById(containerId);
  let startX = 0;

  // Add touchstart event listener
  container.addEventListener("touchstart", (event) => {
    if (event.touches.length === 1) {
      startX = event.touches[0].clientX; // Record the starting touch position
    }
  });

  // Add touchend event listener
  container.addEventListener("touchend", (event) => {
    if (event.changedTouches.length === 1) {
      const endX = event.changedTouches[0].clientX; // Record the ending touch position
      const deltaX = endX - startX;

      if (Math.abs(deltaX) > 50) {
        // Swipe threshold
        if (deltaX > 0) {
          // Swipe right
          container.dispatchEvent(
            new KeyboardEvent("keydown", { key: "ArrowLeft" })
          );
        } else {
          // Swipe left
          container.dispatchEvent(
            new KeyboardEvent("keydown", { key: "ArrowRight" })
          );
        }
      }
    }
  });
}

// Initialize the lightbox functionality after the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeLightbox);

// Initialize the gallery and enable keyboard navigation
document.addEventListener("DOMContentLoaded", () => {
  renderContent("", "folder-container");
  enableKeyboardNavigation("folder-container");
  enableKeyboardNavigation("photo-container"); // Enable navigation for the photo grid
});

// Initialize touch navigation for folder and photo grids
document.addEventListener("DOMContentLoaded", () => {
  enableTouchNavigation("folder-container");
  enableTouchNavigation("photo-container");
});

// Initialize the gallery and render the root folder
document.addEventListener("DOMContentLoaded", () => {
  renderContent("", "folder-container");
});

document.addEventListener("DOMContentLoaded", () => {
  renderContent("", "folder-container"); // Render the root folder

  // Enable navigation for folder-container
  enableKeyboardNavigation("folder-container");
  enableTouchNavigation("folder-container");

  // Check if photo-container exists before enabling navigation
  const photoContainer = document.getElementById("photo-container");
  if (photoContainer) {
    enableKeyboardNavigation("photo-container");
    enableTouchNavigation("photo-container");
  }
});

// Update breadcrumb navigation
function updateBreadcrumb() {
  const breadcrumbContainer = document.getElementById("breadcrumb");

  if (!breadcrumbContainer) {
    console.error("Breadcrumb container not found!");
    return;
  }

  // Clear existing breadcrumb
  breadcrumbContainer.innerHTML = "";

  // If at the root folder, hide the breadcrumb and return
  if (currentPath === "") {
    breadcrumbContainer.style.display = "none";
    return;
  }

  // Show the breadcrumb if not at the root folder
  breadcrumbContainer.style.display = "flex";

  const pathParts = currentPath.split("/").filter((part) => part !== "");
  let accumulatedPath = "";

  // Add "Gallery" link
  const galleryLink = document.createElement("a");
  galleryLink.textContent = "Gallery";
  galleryLink.href = "#";
  galleryLink.addEventListener("click", () => {
    currentPath = "";
    folderHistory = [];
    renderContent(currentPath, "folder-container");
    updateBreadcrumb();
  });
  breadcrumbContainer.appendChild(galleryLink);

  // Add ">" separator and folder links
  pathParts.forEach((part, index) => {
    accumulatedPath += (index > 0 ? "/" : "") + part;

    const separator = document.createElement("span");
    separator.textContent = " > ";
    breadcrumbContainer.appendChild(separator);

    const folderLink = document.createElement("a");
    folderLink.textContent = part;
    folderLink.href = "#";
    folderLink.addEventListener("click", () => {
      currentPath = accumulatedPath;
      folderHistory = folderHistory.slice(0, index); // Adjust history
      renderContent(currentPath, "folder-container");
      updateBreadcrumb();
    });
    breadcrumbContainer.appendChild(folderLink);
  });

  // Show or hide the Back button
  const backButton = document.getElementById("back-button");
  if (folderHistory.length > 0) {
    backButton.style.display = "inline-block";
  } else {
    backButton.style.display = "none";
  }
}
