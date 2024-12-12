import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'
import OnCall from './OnCall.js'

class OnCallManager {
  #inputView
  #outputView
  #validate
  #weekdayMembers
  #weekendMembers
  #onCall

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validate = new Validate();
    this.#onCall = new OnCall();
  }

  async start() {
    try {
      const monthAndDay = await this.#inputMonthAndDay();
      const month = Number(monthAndDay[0]);
      const day = monthAndDay[1];
      this.#weekdayMembers = await this.#inputWeekDayMembers();
      this.#weekendMembers = await this.#inputWeekendMembers();

      // 입력받는 월의 시작 요일부터 요일 배치
      const dayList = this.#onCall.makeDayList(month, day);

      // 해당 월의 공휴일 저장
      const restDay = this.#onCall.restDay(month); // 0이면 없는거거

      // 근무자 배치
      const schedule = this.#onCall.placementWorker(dayList, restDay, this.#weekdayMembers, this.#weekendMembers);
      console.log(schedule);
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
