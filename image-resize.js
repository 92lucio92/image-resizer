document.addEventListener("DOMContentLoaded", function () {
    function setEqualHeight() {
        var referenceColumn = document.querySelector('.reference-column');
        var imageColumn = document.querySelector('.image-column');

        if (referenceColumn && imageColumn) {
            var height = referenceColumn.offsetHeight; // Calculate reference column height
            imageColumn.style.height = height + 'px'; // Apply height to the image column
        }
    }

    // Execute the calculation on startup
    setEqualHeight();

    // Add a listener for window resizing (for responsive devices)
    window.addEventListener('resize', setEqualHeight);
});
