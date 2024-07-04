import './assets/style/main.css'
import './scripts/modal.js'
import './scripts/modal-teacher.js'
import './scripts/paginated.js'

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