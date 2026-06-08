const form = document.getElementById("contact-form");
const messageField = document.getElementById("message");

messageField.addEventListener("input", function () {
    if (this.value.toLowerCase().includes("спам")) {
        this.setCustomValidity("Спам заборонено");
    }
    else {
        this.setCustomValidity("");
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = new FormData(form);

    const task = {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        message: data.get("message"),
        priority: data.get("priority"),
        category: data.get("category"),
        tags: data.getAll("tags")
    };

    taskManager.addRecord(task);

    form.reset();
});

