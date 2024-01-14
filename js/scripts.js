window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

// Bagian Jam

function updateClock() {
  const now = new Date();
  const clockElement = document.getElementById('clock');
  clockElement.textContent = now.toLocaleTimeString();
}

// Update the clock every second
setInterval(updateClock, 1000);


// Bagian Notes 
function updateNotes() {
  const notesElement = document.getElementById('notes');
  notesElement.textContent = 'Semangat Ujiannya';
}

// Update the notes initially and whenever needed
updateNotes();


// Bagian Calendar

function updateCalendar() {
  const now = new Date();
  const calendarElement = document.getElementById('calendar');
  calendarElement.textContent = now.toLocaleDateString();
}

// Update the calendar every day
setInterval(updateCalendar, 24 * 60 * 60 * 1000);

    function updateClock() {
      const now = new Date();
      const clockElement = document.getElementById('clock');
      clockElement.textContent = now.toLocaleTimeString();
    }

    function updateCalendar() {
      const now = new Date();
      const calendarElement = document.getElementById('calendar');
      calendarElement.textContent = now.toLocaleDateString();
    }

    function updateNotes() {
      const notesElement = document.getElementById('notes');
      notesElement.textContent = 'Semangat Ujiannya Teman teman, Jangan lupa berdoa dan fokus dalam mengerjakan ujiannya';
    }

    setInterval(updateClock, 1000);
    setInterval(updateCalendar, 24 * 60 * 60 * 1000);
    updateNotes();

// Inisialisasi Dibawah
updateClock();
updateCalendar();
updateNotes();