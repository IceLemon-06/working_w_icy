const appName = "Task Manager";

function greetUser(name) {
    console.log(`Welcome to ${appName}, ${name}!`);
}

function startApp() {
    console.log("Starting application...");
    greetUser("Aditya");
}

startApp();