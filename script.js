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
console.log(tasks);

const notCompleted = tasks.filter(a => !a["is completed"]);
console.log(notCompleted);

const description = notCompleted.map(t => t["task description"]);
console.log(description);

const category = [...new Set(tasks.map(task => task.meta.category))];
console.log(category);

const taskList = new Map();
tasks.forEach(t => taskList.set(t["task description"], t.deadline))
console.log("Зробити лабу -", taskList.get("Зробити лабу"));