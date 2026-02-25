/* ============================================
   MealWise - Shared JavaScript
   ============================================ */

/* ----- TOAST NOTIFICATION ----- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ----- NAVBAR: highlight active link ----- */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop(); // e.g. "home.html"
  document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.page === page) btn.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

/* ----- REUSABLE: inject navbar into every page ----- */
function renderNavbar() {
  const nav = `
    <nav>
      <a href="index.html" class="logo">
        <div class="logo-icon">🍽️</div>
        <div class="logo-text">
          <strong>MealWise</strong>
          <span>Smart Eating Choices</span>
        </div>
      </a>
      <div class="nav-links">
        <a href="index.html"      class="nav-btn ghost" data-page="index.html">🎓 Student</a>
        <a href="menu.html"      class="nav-btn ghost" data-page="menu.html">✅ Easy Meal Booking</a>
        <a href="poll.html"      class="nav-btn ghost" data-page="poll.html">📊 Mess Poll</a>
        <a href="feedback.html"  class="nav-btn ghost" data-page="feedback.html">💬 Feedback</a>
        <a href="admin.html"     class="nav-btn ghost" data-page="admin.html">🔧 Admin</a>
        <a href="signup.html"    class="nav-btn primary" data-page="signup.html">SIGN UP</a>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', nav);
  setActiveNav();
}

/* ----- REUSABLE: inject toast container ----- */
function renderToast() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="toast" id="toast">✅ <span id="toast-msg">Done!</span></div>
  `);
}
