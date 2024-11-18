// تابعی برای تغییر وضعیت دکمه‌ها
function setActiveButton(button) {
    // گرفتن همه دکمه‌ها
    const buttons = document.querySelectorAll('.prayes-buttons');

    // حذف کلاس active از همه دکمه‌ها
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // اضافه کردن کلاس active به دکمه کلیک شده
    button.classList.add('active');
}

// اضافه کردن شنونده رویداد به دکمه‌ها
document.getElementById('button1').addEventListener('click', function() {
    setActiveButton(this);
});
document.getElementById('button2').addEventListener('click', function() {
    setActiveButton(this);
});
document.getElementById('button3').addEventListener('click', function() {
    setActiveButton(this);
});