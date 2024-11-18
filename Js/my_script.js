        // تابعی برای نمایش فرم مربوطه و پنهان کردن دیگر فرم‌ها
        function showForm(formId) {
            // گرفتن همه فرم‌ها و دکمه‌ها
            const forms = document.querySelectorAll('.form-container');
            const buttons = document.querySelectorAll('.buttons');

            // پنهان کردن همه فرم‌ها و حذف کلاس active از همه دکمه‌ها
            forms.forEach(form => {
                form.classList.remove('active');
            });
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            // نمایش فرم انتخاب شده و تنظیم دکمه به عنوان فعال
            document.getElementById(formId).classList.add('active');
            document.getElementById(formId.replace('form', 'button')).classList.add('active');
        }

        // اضافه کردن شنونده رویداد به دکمه‌ها
        document.getElementById('showFormButton').addEventListener('click', () => showForm('formContainer'));
        document.getElementById('identitybutton').addEventListener('click', () => showForm('formIdentity'));
        document.getElementById('ordersButton').addEventListener('click', () => showForm('formOrders'));
        document.getElementById('historyButton').addEventListener('click', () => showForm('formHistory'));

const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // غیرفعال کردن همه دکمه‌ها
        buttons.forEach(btn => {
            btn.classList.remove('active'); // حذف کلاس active از همه دکمه‌ها
        });
        
        // فعال کردن دکمه کلیک شده
        this.classList.add('active'); // اضافه کردن کلاس active به دکمه کلیک شده
    });
});
