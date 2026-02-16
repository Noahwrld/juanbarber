// Replace the DOMContentLoaded event with a direct check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRobot);
} else {
  initRobot();
}

function initRobot() {
  const canvas = document.getElementById('robotCanvas');
  if (!canvas) {
    console.error('Robot canvas not found');
    return;
  }
  // ... rest of the Three.js code
}
