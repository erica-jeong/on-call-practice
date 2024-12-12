import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'

class OnCallManager {
  #inputView
  #outputView
  #validate
  #weekdayMembers
  #weekendMembers

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
      this.#weekdayMembers = await this.#inputWeekDayMembers();
      this.#weekendMembers = await this.#inputWeekendMembers();
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

  async #inputWeekendMembers() {
    while (true) {
      try {
        const input = await this.#inputView.readWeekendMembers();
        this.#validate.weekendMembers(input);
        this.#validate.checkSameMember(this.#weekdayMembers, input.split(','));
        return input.split(',');
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default OnCallManager;
