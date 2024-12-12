const EMPTY_INPUT = '[ERROR] 공백이 입력되었습니다.';
const INVALID_MONTH_DAY = '[ERROR] 월과 요일을 입력해주세요.'
const INVALID_MONTH = '[ERROR] 1월 부터 12월을 입력해주세요.'
const INVALID_DAY = '[ERROR] 월요일부터 일요일을 입력해주세요.'
const INVALID_NAME = '[ERROR] 이름이 5자 이상입니다'
const INVALID_MEMBER_COUNT = '[ERROR] 근무자는 최소 5명 최대 35명까지 입력 가능합니다.'
const MEMBER_DUPLICATE = '[ERROR] 근무자는 평일 순번, 휴일 순번에 각각 1회만 가능합니다'
const NOT_SAME_MEMBER = '[ERROR] 근무자는 평일 근무자와 같은 근무자여야 합니다.'


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

  weekdayMembers(input) {
    this.isEmpty(input)
    const members = input.split(',');
    members.forEach(member => {
      this.checkNameRange(member);
    })
    this.checkMembersCount(members);
    this.checkDuplicateMember(members);
  }

  checkNameRange(name) {
    if (name.length > 5) {
      throw new Error(INVALID_NAME);
    }
  }

  checkMembersCount(members) {
    if (members.length < 5 || members.length > 35) {
      throw new Error(INVALID_MEMBER_COUNT);
    }
  }

  checkDuplicateMember(members) {
    const newMembers = [...new Set(members)];
    if (newMembers.length !== members.length) {
      throw new Error(MEMBER_DUPLICATE);
    }
  }

  weekendMembers(input) {
    this.isEmpty(input)
    const members = input.split(',');
    members.forEach(member => {
      this.checkNameRange(member);
    })
    this.checkMembersCount(members);
    this.checkDuplicateMember(members);
  }

  checkSameMember(dayMembers, endMembers) {
    const same = endMembers.every(member => dayMembers.includes(member));
    if (!same) {
      throw new Error(NOT_SAME_MEMBER);
    }
  }
}

export default Validate;