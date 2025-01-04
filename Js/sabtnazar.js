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
