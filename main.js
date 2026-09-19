const appName = "Task Manager";

function greetUser(name) {
    console.log(`Hello ${name}, welcome back to ${appName}!`);
}

function startApp() {
    console.log("Launching application...");
    greetUser("Student");
}

startApp();