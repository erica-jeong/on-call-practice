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

  placementWorker(dayList, restDay, weekdayMembers, weekendMembers) {
    const schedule = []; // 이름이 들어가면 됨
    console.log(dayList)

    dayList.forEach((day, i) => {
      // 주말인지 판단
      if (this.isWeekend(day)) {
        // 주말인면
        const worker = weekendMembers.shift();
        schedule.push(worker);
        weekendMembers.push(worker);
      } else {
        // 평일이면
        // 공휴일인지 판단
        if (this.isHollyDay(i, restDay)) {
          const worker = weekendMembers.shift();
          schedule.push(worker);
          weekendMembers.push(worker);
        } else {
          const worker = weekdayMembers.shift();
          schedule.push(worker);
          weekdayMembers.push(worker);
        }
      }
    });
    return schedule;
  }

  isWeekend(day) {
    if (day === 0 || day === 6) {
      return true;
    }
    return false;
  }

  isHollyDay(i, restDay) {
    if (i + 1 === restDay) {
      return true;
    }
    return false;
  }
}

export default OnCall;
