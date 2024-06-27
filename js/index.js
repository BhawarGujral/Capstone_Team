document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if(box.querySelector('h3').textContent == "Bhawar Gujral"){
                window.location.href = "https://bhawargujral.github.io/Portolio-Website/";
            }
        });
    });
});