const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");

// toastDetails
const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa fa-check",
    text: "Hello World: This is a success toast.",
  },
  error: {
    icon: "fa fa-exclamation-circle",
    text: "Hello World: This is an error toast.",
  },
  warning: {
    icon: "fa fa-warning",
    text: "Hello World: This is a warning toast.",
  },
  info: {
    icon: "fa fa-info-circle",
    text: "Hello World: This is an information toast.",
  },
};

// removeToast
const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

// createToast
const createToast = (id) => {
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `
  <div class="column">
      <i class="fa-solid ${icon}"></i>
      <span>${text}</span>
  </div>
    `;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

// buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
