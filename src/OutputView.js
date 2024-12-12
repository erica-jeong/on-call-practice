import { Console } from "@woowacourse/mission-utils";

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
class OutputView {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printEmergencySchedule(month, dayList, restDay, schedule) {
    dayList.forEach((day, i) => {
      if (Array.isArray(restDay) && restDay.includes(i + 1)) {
        Console.print(`${month}월 ${i + 1}일 ${DAYS[day]}(휴일) ${schedule[i]}`);
      }
      if (!Array.isArray(restDay) && i + 1 === restDay) {
        Console.print(`${month}월 ${i + 1}일 ${DAYS[day]}(휴일) ${schedule[i]}`);
      } else {
        Console.print(`${month}월 ${i + 1}일 ${DAYS[day]} ${schedule[i]}`);
      }
    })
  }
}

export default OutputView;
