import './src/assets/style/main.css'
import './scripts/modal.js'

function createMarqueeText(text) {
  const marqueeText = document.getElementById('marquee-text');
  marqueeText.textContent = text.repeat(1000);
}

createMarqueeText('ОТКРЫТ НАБОР В 1-11 КЛАСС • 10-11 КЛАСС ЗА ГОД •');