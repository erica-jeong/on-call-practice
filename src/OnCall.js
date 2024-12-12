const NUMBER_OF_DAY = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const HOLLY_DAYS = [
  { month: 1, date: 1 },
  { month: 3, date: 1 },
  { month: 5, date: 5 },
  { month: 6, date: 6 },
  { month: 8, date: 15 },
  { month: 10, date: [3, 9] },
  { month: 12, date: 25 }
]

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

  restDay(month) {
    const hollyDayMonth = HOLLY_DAYS.map(hollyDay => hollyDay.month)
    if (hollyDayMonth.includes(month)) {
      return HOLLY_DAYS.find(hollyDay => hollyDay.month === month).date;
    }
    return 0;
  }
}

export default OnCall;
