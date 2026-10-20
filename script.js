function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contactInfo").value.trim();
  const plan = document.getElementById("plan").value;
  const message = document.getElementById("message").value.trim();

  // Developer ka WhatsApp number
  // Country code likho WITHOUT +
  const developerNumber = "923001234567";

  const bookingText =
`🔔 NEW BOOKING ORDER

👤 Name: ${name}
📞 Contact: ${contact}
📦 Package: ${plan}
📝 Details: ${message || "No additional details"}

Website: Mueed XXX Miner`;

  const whatsappURL =
    "https://wa.me/" +
    developerNumber +
    "?text=" +
    encodeURIComponent(bookingText);

  // Website notification
  showNotification("✅ Booking ready! Opening WhatsApp...");

  // Developer ko booking bhejo
  setTimeout(() => {
    window.open(whatsappURL, "_blank");
  }, 800);

  // Form clear
  document.getElementById("bookingForm").reset();
}

function showNotification(message) {
  const notification = document.getElementById("notification");

  notification.innerText = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 4000);
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

function selectPlan(plan) {
  document.getElementById("plan").value = plan;

  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
const developerNumber = "923001234567";
function selectProduct(product) {
  const plan = document.getElementById("plan");

  if (plan) {
    plan.value = product;
  }

  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}