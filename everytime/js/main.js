document.addEventListener("DOMContentLoaded", function () {
    const writeBtn = document.getElementById("write_btn");
    const writingArea = document.getElementById("writing_area");

    writeBtn.addEventListener("click", function () {
        writingArea.style.display = "block";
        writeBtn.style.display = "none";
    });
});