document.getElementById("lastModified").textContent = document.lastModified;

    // counter
    let count = Number(localStorage.getItem("reviews")) || 0;
    count++;
    localStorage.setItem("reviews", count);
    document.getElementById("counter").textContent = count;