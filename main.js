import './assets/style/main.css'
import './scripts/modal.js'
import './scripts/modal-teacher.js'
import './scripts/paginated.js'

document.getElementById('burger-button').addEventListener('click', function() {
  const sidePanel = document.getElementById('side-panel');
  if (sidePanel.classList.contains('-translate-x-full')) {
      sidePanel.classList.remove('-translate-x-full');
      sidePanel.classList.add('translate-x-0');
  } else {
      sidePanel.classList.remove('translate-x-0');
      sidePanel.classList.add('-translate-x-full');
  }
});

function createMarqueeText(text) {
  const marqueeText = document.getElementById('marquee-text');
  marqueeText.textContent = text.repeat(1000);
}

function createMarqueeHiddenText(text) {
  const marqueeText = document.getElementById('marquee-text-hidden');
  marqueeText.textContent = text.repeat(1000);
}

createMarqueeHiddenText('ОТКРЫТ НАБОР В 1-11 КЛАСС • 10-11 КЛАСС ЗА ГОД •');

function createMarqueeFooterText(text) {
  const marqueeText = document.getElementById('marquee-footer-text');
  marqueeText.textContent = text.repeat(1000);
}

createMarqueeText('ОТКРЫТ НАБОР В 1-11 КЛАСС • 10-11 КЛАСС ЗА ГОД •');
createMarqueeFooterText('ОТКРЫТ НАБОР В 1-11 КЛАСС • 10-11 КЛАСС ЗА ГОД •');