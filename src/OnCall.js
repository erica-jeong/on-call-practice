const NUMBER_OF_DAY = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

class OnCall {
  makeDayList(month, day) {
    const dayArray = [];
    const numberOfDays = NUMBER_OF_DAY[month];
    let startDay = DAYS.indexOf(day);
    dayArray.push(7);
    for (let i = 0; i < numberOfDays; i += 1) {
      const mark = startDay % 7;
      startDay += 1;
      dayArray.push(mark);
    }
    return dayArray;
  }
}

export default OnCall;
