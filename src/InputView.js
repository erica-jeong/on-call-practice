import { Console } from "@woowacourse/mission-utils";

const MONTH_AND_DATE_MESSAGE = "비상 근무를 배정할 월과 시작 요일을 입력하세요> ";
const WEEKDAY_MEMBER_MESSAGE = "평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ";
const WEEKEND_MEMBER_MESSAGE = "휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ";

class InputView {
  async readMonthAndDay() {
    const input = await Console.readLineAsync(MONTH_AND_DATE_MESSAGE);
    return input;
  }

  async readWeekDayMembers() {
    const input = await Console.readLineAsync(WEEKDAY_MEMBER_MESSAGE);
    return input;
  }

  async readWeekendMembers() {
    const input = await Console.readLineAsync(WEEKEND_MEMBER_MESSAGE);
    return input;
  }
}

export default InputView;
