import OnCallManager from './OnCallManager.js'

class App {
  async run() {
    const onCallManager = new OnCallManager();
    await onCallManager.start();
  }
}

export default App;
