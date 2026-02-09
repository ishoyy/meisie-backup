document.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Waitlist form submission
  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (!res.ok) throw new Error('Submission failed');

        alert("Your submission was successful. Thank you!");


      } catch (err) {
        console.error(err);
        alert('Something went wrong. Please try again.');
      }
    });
  }

  // 2️⃣ Back to home button on thank-you page
  const backBtn = document.getElementById('backHomeButton');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = '/';
    });
  }
});
