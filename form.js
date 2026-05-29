const form = document.getElementById("contact-form");
const messageField = document.getElementById("message");

messageField.addEventListener("input", function () {
    if (this.value.toLowerCase().includes('спам'))
    {
        this.setCustomValidity('Будь ласка, уникайте спаму у повідомленні');
    }
    else
    {
        this.setCustomValidity('');
    }
});

form.addEventListener("submit", function (event) {
    if (!form.checkValidity())
    {
        event.preventDefault();
        form.reportValidity();
        return;
    }
    event.preventDefault();

    const data = new FormData(form);
    const formObject = Object.fromEntries(data.entries());

    console.log('Дані готові до відправки на сервер:', formObject);
    alert('Повідомлення успішно відправлено!');

    form.reset();
});

