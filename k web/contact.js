function handleContactSubmit(e) {
  e.preventDefault();
  const note = document.getElementById("contactNote");
  note.textContent = "Thanks for reaching out — we'll reply within 1 business day. For a faster response, message us on WhatsApp.";
  e.target.reset();
}
