import { getActionStream } from './libs/common/deviceorientation-and-devicemotion/new-impl/get-motion-set-stream';
import { runOnDocumentReady } from './libs/common/run-on-document-ready';

runOnDocumentReady(() => {
  const colLeftTop = document.getElementById('left-top')!;
  const colLeftBot = document.getElementById('left-bot')!;
  const colRightTop = document.getElementById('right-top')!;
  const colRightBot = document.getElementById('right-bot')!;
  const updateText = (text: string, col?: 'left-top' | 'left-bot' | 'right-top' | 'right-bot') => {
    let elem: HTMLElement;
    switch (col) {
      case 'left-top': {
        elem = colLeftTop;
        break;
      }
      case 'left-bot': {
        elem = colLeftBot;
        break;
      }
      case 'right-top': {
        elem = colRightTop;
        break;
      }
      case 'right-bot': {
        elem = colRightBot;
        break;
      }
      default: {
        elem = colLeftTop;
        break;
      }
    }

    elem.textContent = text;
  };

  getActionStream().subscribe((data) => updateText(JSON.stringify(data)));
});
