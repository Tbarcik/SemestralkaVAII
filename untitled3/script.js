document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const categories = document.querySelector('.categories');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
        categories.classList.toggle('show-category');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 600) {
            hideCategories();
        }
    });

    var imageSlider = document.querySelector(".image-slider");
    var images = ["CPU.JPG", "322445444.jpg"];
    var currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageSlider.querySelector("img").src = images[currentImageIndex];
    }

    setInterval(changeImage, 5000);

    var reviewsContainer = document.querySelector(".reviews");
    var reviews = ["Review 1", "Review 2", "Review 3"];
    var currentReviewIndex = 0;

    function changeReview() {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        reviewsContainer.textContent = "Recenzia: " + reviews[currentReviewIndex];
    }

    setInterval(changeReview, 5000);

    function hideCategories() {
        categories.classList.remove('show-category');
    }

    var blogSlider = document.querySelector(".blog-slider");
    var blogBoxes = document.querySelectorAll(".blog-box");
    var currentBlogIndex = 0;

    function changeBlogBox() {
        blogBoxes[currentBlogIndex].classList.remove('active');
        currentBlogIndex = (currentBlogIndex + 1) % blogBoxes.length;
        blogBoxes[currentBlogIndex].classList.add('active');
    }

    setInterval(changeBlogBox, 5000);
});
