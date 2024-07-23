const imgContainer = document.getElementById("img-container");

async function getImages() {
  const res = await fetch("https://unsplash-demo-server-1.onrender.com/");

  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    img.src = data[i];
    imgContainer.appendChild(img);
  }
}

getImages();
