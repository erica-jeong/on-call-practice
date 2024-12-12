const EMPTY_INPUT = '[ERROR] 공백이 입력되었습니다.';
const INVALID_MONTH_DAY = '[ERROR] 월과 요일을 입력해주세요.'
const INVALID_MONTH = '[ERROR] 1월 부터 12월을 입력해주세요.'
const INVALID_DAY = '[ERROR] 월요일부터 일요일을 입력해주세요.'


class Validate {
  isEmpty(input) {
    if (!input.trim()) {
      throw new Error(EMPTY_INPUT);
    }
  }

  monthAndDate(input) {
    this.isEmpty(input);
    const monthAndDay = input.split(',');
    if (monthAndDay.length === 1) {
      throw new Error(INVALID_MONTH_DAY);
    }
    this.isMonth(monthAndDay[0]);
    this.isDay(monthAndDay[1]);
  }

  isMonth(month) {
    if (Number(month) < 1 || Number(month) > 12) {
      throw new Error(INVALID_MONTH);
    }
  }

  isDay(day) {
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    if (!days.includes(day)) {
      throw new Error(INVALID_DAY);
    }
  }
}

export default Validate;