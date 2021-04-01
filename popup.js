let locationsList = document.getElementById("gymLocations");

chrome.storage.sync.get("locations", ({ locations }) => {
  for (const location of locations) {
    const title = document.createElement("h3");
    title.innerText = location["name"];
    
    const iframe = document.createElement("iframe");
    iframe.src = location["url"];
    iframe.width = "90%";
    iframe.height = "100%";
    
    const div = document.createElement("div");
    div.classList.add("gym-item");
    div.appendChild(title);
    div.appendChild(iframe);

    locationsList.appendChild(div);
  }
});
