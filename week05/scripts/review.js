const reviewCountElem = document.getElementById("review-count");
const reviewCount = parseInt(localStorage.getItem("review-count") || 0) + 1;
reviewCountElem.innerText = reviewCount;
localStorage.setItem("review-count", reviewCount);