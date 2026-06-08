class TaskManager {
    constructor() {
        this.tasks = this.load() || [];
        this.list = document.getElementById("task-list");
        this.init();
    }

    async init() {
        await this.loadDefaults();
        this.render();
    }

    addRecord(task) {
        const newTask = {
            id: Date.now(),
            ...task
        };
        this.tasks.push(newTask);
        this.save();
        this.render();
    }

    deleteRecord(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.save();
        this.render();
    }

    calculateTotals() {
        return {
            total: this.tasks.length
        };
    }

    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    load() {
        return JSON.parse(localStorage.getItem("tasks"));
    }

    async loadDefaults() {
        if (this.tasks.length) return;

        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const data = await res.json();

        this.tasks = data.map(t => ({
            id: Date.now() + Math.random(),
            message: t.title,
            priority: "Середній"
        }));

        this.save();
    }

    render() {
        this.list.innerHTML = "";

        const stats = document.getElementById("task-stats");
        stats.textContent = `Всього задач: ${this.calculateTotals().total}`;

        this.tasks.forEach(task => {
            const div = document.createElement("div");

            div.className = "bg-white p-4 m-2 rounded shadow";

            div.innerHTML = `
                <p><b>Задача:</b> ${task.message || task.title}</p>
                <p><b>Пріоритет:</b> ${task.priority}</p>
                <button data-id="${task.id}" class="delete bg-red-500 text-white px-2 py-1 rounded mt-2">Видалити</button>
            `;

            this.list.appendChild(div);
        });

        document.querySelectorAll(".delete").forEach(btn => {
            btn.onclick = () => this.deleteRecord(Number(btn.dataset.id));
        });
    }
}

const taskManager = new TaskManager();