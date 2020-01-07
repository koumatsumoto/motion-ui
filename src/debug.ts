import {
  debug3,
  getCommandHistoryStream,
  getLastCommandStream,
} from './libs/common/deviceorientation-and-devicemotion/new-impl/get-motion-set-stream';
import { runOnDocumentReady } from './libs/common/run-on-document-ready';

export const debug = () =>
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

    let data1: unknown;
    let data2: unknown;
    let data3: unknown;
    let data4: unknown;
    getLastCommandStream().subscribe((d) => (data1 = d));
    getCommandHistoryStream().subscribe((d) => (data2 = d));
    debug3().subscribe((d) => (data3 = d));

    const loop = () => {
      if (data1) {
        updateText(JSON.stringify(data1, null, 2), 'left-top');
      }
      if (data2) {
        updateText(JSON.stringify(data2, null, 2), 'left-bot');
      }
      if (data3) {
        updateText(JSON.stringify(data3, null, 2), 'right-top');
      }
      if (data4) {
        updateText(JSON.stringify(data4, null, 2), 'right-bot');
      }

      window.requestAnimationFrame(loop);
    };
    loop();
  });
