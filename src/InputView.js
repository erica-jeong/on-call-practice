import { Console } from "@woowacourse/mission-utils";

const MONTH_AND_DATE_MESSAGE = "비상 근무를 배정할 월과 시작 요일을 입력하세요> ";

class InputView {
  async readMonthAndDay() {
    const input = await Console.readLineAsync(MONTH_AND_DATE_MESSAGE);
    return input;
  }
}

export default InputView;
