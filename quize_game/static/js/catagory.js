document.addEventListener("DOMContentLoaded", function() {
    const categoryList = document.getElementById("category-list");
    const nextButton = document.getElementById("next-button");

    // Function to handle category selection
    function handleCategorySelection(event) {
        // Remove 'active' class from all category items
        const categoryItems = categoryList.querySelectorAll("li");
        categoryItems.forEach((item) => {
            item.classList.remove("active");
        });

        // Add 'active' class to the selected category item
        const selectedCategory = event.target.getAttribute("data-category");
        event.target.classList.add("active");

        // Enable the "Next" button
        nextButton.removeAttribute("disabled");
        // Change background color of the enabled button
        nextButton.style.backgroundColor = ""; // Reset background color
    }

    // Add click event listeners to category items
    categoryList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            handleCategorySelection(event);
        }
    });

    // Check the initial state of the button and set its background color accordingly
    if (nextButton.disabled) {
        nextButton.style.backgroundColor = "#888888"; // Set the background color for disabled state
    }
});
