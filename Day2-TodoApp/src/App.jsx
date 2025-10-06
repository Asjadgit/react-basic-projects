import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function todolist() {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]); // store as object only when try to use complete with chekcbox else use simple setTasks([...tasks,task])
    setTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleComplete(index){
    const updatedTask = tasks.map((t,i) => 
      i === index ? {...t,completed : !t.completed} : t);
    setTasks(updatedTask);
  }

   return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
          📝 Todo App
        </h1>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <button
            onClick={todolist}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "10px 16px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9f9f9",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #eee",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleComplete(index)}
                />
                <span
                  style={{
                    textDecoration: t.completed ? "line-through" : "none",
                    color: t.completed ? "#888" : "#000",
                  }}
                >
                  {t.text}
                </span>
              </div>

              <button
                onClick={() => deleteTask(index)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
