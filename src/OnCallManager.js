import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'

class OnCallManager {
  #inputView
  #outputView
  #validate

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validate = new Validate();
  }

  async start() {
    try {
      const monthAndDay = await this.#inputMonthAndDay();
      const month = Number(monthAndDay[0]);
      const day = monthAndDay[1];
      const weekdayMembers = await this.#inputWeekDayMembers();
    } catch (error) {
      throw error;
    }
  }

  async #inputMonthAndDay() {
    while (true) {
      try {
        const input = await this.#inputView.readMonthAndDay();
        this.#validate.monthAndDate(input);
        return input.split(',');
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async #inputWeekDayMembers() {
    while (true) {
      try {
        const input = await this.#inputView.readWeekDayMembers();
        this.#validate.weekdayMembers(input);
        return input.split(',');
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default OnCallManager;
