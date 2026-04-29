const dueDate = new Date("2026-03-01T18:00:00Z");

const remainingTime = document.getElementById("timeRemaining");

const toggle = document.getElementById("completeToggle");

const title = document.getElementById("title");

const status = document.getElementById("status");

// Time Calculation
function updateTime() {
    const now = new Date();
    const diff = dueDate - now;

    if (diff <=0) {
        remainingTime.textContent = "Overdue";
        return;
    }
    const hours = Math.floor(diff/(1000*60*60));
    const days = Math.floor(hours/24);

    if (days > 0) {
        remainingTime.textContent = `Due in ${days} days(s)`;
    }else if (hours > 0) {
        remainingTime.textContent = `Due in ${hours} hours(s)`;
    }else {
        remainingTime.textContent = "Due now!"
    }
    }

updateTime();

// To update time evry 60 seconds
setInterval(updateTime,60000);

// Checkbox behaviour
toggle.addEventListener("change", () =>{
    if (toggle.checked) {
        title.classList.add("completed");
        status.textContent = "Done";
    }else {
        title.classList.remove("completed");
        status.textContent = "Pending"
    }
});

//Buttons
document.querySelector('[data-testid="test-todo-edit-button"]')
.addEventListener("click", () => {
    console.log("Edit clicked");
});


document.querySelector('[data-testid="test-todo-delete-button"]')
.addEventListener("click", () => {
    alert("Delete clicked");
});