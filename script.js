const tasks = [
{ id: 1, "task description": "Вивчити масиви", meta: { category: "Навчання",
priority: 1 }, deadline: "2026-04-20", "is completed": true },
{ id: 2, "task description": "Зробити лабу", meta: { category: "Навчання",
priority: 1 }, deadline: "2026-04-22", "is completed": false },
{ id: 3, "task description": "Купити продукти", meta: { category: "Побут",
priority: 2 }, deadline: "2026-04-18", "is completed": true },
{ id: 4, "task description": "Прибрати в кімнаті", meta: { category: "Побут",
priority: 3 }, deadline: "2026-04-19", "is completed": false },
{ id: 5, "task description": "Зарядити ноутбук", meta: { category: "Робота",
priority: 2 }, deadline: "2026-04-17", "is completed": true }
];

const tableBody = document.getElementById("tasks-table");
const categorySelect = document.getElementById("category-filter");
const searchInput = document.getElementById("search-task");
const output = document.getElementById("deadline-output");

const taskList = new Map();
tasks.forEach(t => taskList.set(t["task description"], t.deadline));

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();

    if (taskList.has(value)) {
        output.textContent = `Дедлайн: ${taskList.get(value)}`;
    } else {
        output.textContent = "";
    }
});


const categories = [...new Set(tasks.map(task => task.meta.category))];
categories.forEach(category => {
    const option = document.createElement("option");
    option.textContent = category;
    option.value = category;
    categorySelect.appendChild(option);
});

tasks.forEach(task => {
    const row = document.createElement("tr");
    row.className = "border-b hover:bg-gray-50";

    const id = document.createElement("td");
    id.className = "p-4";
    id.textContent = task.id;

    const desc = document.createElement("td");
    desc.className = "p-4";
    desc.textContent = task["task description"];

    const category = document.createElement("td");
    category.className = "p-4";
    category.textContent = task.meta.category;

    const priority = document.createElement("td");
    priority.className = "p-4";
    priority.textContent = task.meta.priority;

    const deadline = document.createElement("td");
    deadline.className = "p-4";
    deadline.textContent = task.deadline;

    const status = document.createElement("td");
    status.className = "p-4 font-semibold";

    if (task["is completed"])
    {
        status.textContent = "Виконано";
        status.classList.add("text-green-600");
    }
    else
    {
        status.textContent = "Не виконано";
        status.classList.add("text-red-600");
    }

    const button = document.createElement("td");

    const btn = document.createElement("button");
    btn.textContent = "Детальніше";
    btn.className = "bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700";
    btn.dataset.id = task.id



    row.appendChild(id);
    row.appendChild(desc);
    row.appendChild(category);
    row.appendChild(priority);
    row.appendChild(deadline);
    row.appendChild(status);
    button.appendChild(btn);
    row.appendChild(button);
    tableBody.appendChild(row);

});
document.getElementById("total-tasks").textContent = `Усього завдань: ${tasks.length}`;

tableBody.addEventListener("click", function (event){
    if (event.target.tagName === "BUTTON") {
        const taskId = event.target.dataset.id;
        const task = tasks.find(t => t.id == taskId);
        alert(task["task description"]);
        event.target.classList.toggle("bg-green-600");
    }
});





// console.log(tasks);

// const notCompleted = tasks.filter(a => !a["is completed"]);
// console.log(notCompleted);
//
// const description = notCompleted.map(t => t["task description"]);
// console.log(description);
//
// const category = [...new Set(tasks.map(task => task.meta.category))];
// console.log(category);
//
// const taskList = new Map();
// tasks.forEach(t => taskList.set(t["task description"], t.deadline))
// console.log("Зробити лабу -", taskList.get("Зробити лабу"));

