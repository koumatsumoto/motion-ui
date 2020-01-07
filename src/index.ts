import { getActionStream } from './libs/common/deviceorientation-and-devicemotion/new-impl/get-motion-set-stream';
import { runOnDocumentReady } from './libs/common/run-on-document-ready';

runOnDocumentReady(() => {
  const debugboard = document.getElementById('debugboard')!;
  const updateText = (text: string) => (debugboard.textContent = text);

  updateText('ready');
  getActionStream().subscribe((data) => updateText(JSON.stringify(data)));
});
