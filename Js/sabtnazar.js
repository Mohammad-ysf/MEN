document.addEventListener("DOMContentLoaded", function () {
  // عنصر مورد نظر که می‌خواهیم موقعیت آن تغییر کند
  const myItem = document.querySelector(".sabtnazar");
  // عنصر هدفی که می‌خواهیم تا قبل از رسیدن به آن پوزیشن تغییر کند
  const target = document.querySelector(".target");
  const target2 = document.querySelector(".rel-footer");

  // اگر عناصر مورد نظر در صفحه پیدا شدند، عملیات را انجام می‌دهیم
  if (myItem && target) {
    // گرفتن موقعیت عنصر هدف از بالای صفحه
    const targetPosition = target.offsetTop;
    const targetPosition2 = target2.offsetTop;

    window.addEventListener("scroll", function () {
      // گرفتن موقعیت اسکرول فعلی صفحه
      const scrollPosition = window.scrollY;

      // اگر اسکرول صفحه به قبل از موقعیت عنصر هدف رسیده باشد
      if (scrollPosition < targetPosition) {
        myItem.style.position = "absolute"; // موقعیت دوم
        myItem.style.top = targetPosition + "px" + "45px"; // بعد از رسیدن به آیتم
        myItem.style.left = "12px";
      } else if (scrollPosition > targetPosition2) {
        myItem.style.position = "absolute"; // موقعیت دوم
        myItem.style.top = targetPosition2 + "px" + "45px"; // بعد از رسیدن به آیتم
        myItem.style.left = "12px";
      } else {
        myItem.style.position = "fixed"; // موقعیت اول
        myItem.style.top = "70px";
        myItem.style.left = "12px"; // به عنوان مثال پوزیشن ثابت
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("like");
  const dislikeBtn = document.getElementById("dislike");
  const likeIcon = document.getElementById("like-icon");
  const dislikeIcon = document.getElementById("dislike-icon");

  let likeCount = 0;
  let dislikeCount = 0;
  let isLiked = false;
  let isDisliked = false;

  likeBtn.addEventListener("click", () => {
    if (!isLiked) {
      // Add like
      likeCount++;
      likeBtn.innerHTML = `${likeCount} <i id="like-icon" class="fas fa-thumbs-up fa-2x"></i>`;
      isLiked = true;

      // Remove dislike if exists
      if (isDisliked) {
        dislikeCount--;
        dislikeBtn.innerHTML = `${dislikeCount} <i id="dislike-icon" class="far fa-thumbs-down fa-2x"></i>`;
        isDisliked = false;
      }
    } else {
      // Remove like
      likeCount--;
      likeBtn.innerHTML = `${likeCount} <i id="like-icon" class="far fa-thumbs-up fa-2x"></i>`;
      isLiked = false;
    }
  });

  dislikeBtn.addEventListener("click", () => {
    if (!isDisliked) {
      // Add dislike
      dislikeCount++;
      dislikeBtn.innerHTML = `${dislikeCount} <i id="dislike-icon" class="fas fa-thumbs-down fa-2x"></i>`;
      isDisliked = true;

      // Remove like if exists
      if (isLiked) {
        likeCount--;
        likeBtn.innerHTML = `${likeCount} <i id="like-icon" class="far fa-thumbs-up fa-2x"></i>`;
        isLiked = false;
      }
    } else {
      // Remove dislike
      dislikeCount--;
      dislikeBtn.innerHTML = `${dislikeCount} <i id="dislike-icon" class="far fa-thumbs-down fa-2x"></i>`;
      isDisliked = false;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the submit button
  const submitBtn = document.querySelector(".submit-btn");
  const feedbackModal = new bootstrap.Modal(
    document.getElementById("feedbackModal")
  );
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );

  // Show feedback modal when submit button is clicked
  submitBtn.addEventListener("click", function () {
    feedbackModal.show();
  });

  // Handle sending feedback
  document
    .getElementById("sendFeedback")
    .addEventListener("click", function () {
      const comment = document.getElementById("comment").value;

      if (comment.trim() !== "") {
        // Here you can add code to send the feedback to your server

        // Close feedback modal
        feedbackModal.hide();

        // Clear the form
        document.getElementById("comment").value = "";

        // Show success modal
        successModal.show();
      }
    });
});
