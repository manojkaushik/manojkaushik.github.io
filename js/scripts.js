document.getElementById("load-more").addEventListener("click", function () {
  const galleryContainer = document.getElementById("gallery-container");
  const newImages = [
    {
      src: "gallery/airport.jpg",
      alt: "Image 13",
      description: "Image 13 Description",
    },
    {
      src: "gallery/banaras1.jpg",
      alt: "Image 14",
      description: "Image 14 Description",
    },
    {
      src: "gallery/bangalore.jpg",
      alt: "Image 15",
      description: "Image 15 Description",
    },
    {
      src: "gallery/airport.jpg",
      alt: "Image 16",
      description: "Image 16 Description",
    },
    {
      src: "gallery/banaras1.jpg",
      alt: "Image 17",
      description: "Image 17 Description",
    },
    {
      src: "gallery/bangalore.jpg",
      alt: "Image 18",
      description: "Image 18 Description",
    },
    {
      src: "gallery/airport.jpg",
      alt: "Image 19",
      description: "Image 19 Description",
    },
    {
      src: "gallery/banaras1.jpg",
      alt: "Image 20",
      description: "Image 20 Description",
    },
    {
      src: "gallery/bangalore.jpg",
      alt: "Image 21",
      description: "Image 21 Description",
    },
    {
      src: "gallery/airport.jpg",
      alt: "Image 22",
      description: "Image 22 Description",
    },
    {
      src: "gallery/banaras1.jpg",
      alt: "Image 23",
      description: "Image 23 Description",
    },
    {
      src: "gallery/bangalore.jpg",
      alt: "Image 24",
      description: "Image 24 Description",
    },
  ];

  newImages.forEach((image) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    const p = document.createElement("p");
    p.textContent = image.description;

    galleryItem.appendChild(img);
    galleryItem.appendChild(p);
    galleryContainer.appendChild(galleryItem);
  });
});
