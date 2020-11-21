export const days_b = [1, 3, 5, 7, 8, 10, 12]; //31天
export const days_s = [4, 6, 9, 11]; //30天
export const week_zh = ["日", "一", "二", "三", "四", "五", "六"];


export function dateData(year, month, _date) {

  if(month > 12) {year += 1, month = 1};
  if(month < 1) {year -= 1, month = 12};

  let days = 31;

  if (month == 2) {
    if (isLeapYear(year)) {
      days = 29;
    } else {
      days = 28;
    }
  } else {
    if (days_s.indexOf(month) > -1) days = 30;
  }
 

  month -= 1;
  const start = new Date(year, month, 1); //该月份开始日期 
  const date = new Date(year, month, _date || 1); //当前日期

  const no = date.getDate(); //日期
  const weekDay = date.getDay(); // 周几

  const s_lines: number[][] = [];
  let s_line: number[] = [];
  let s_i: number = start.getDay();
  let s_day: number = start.getDate();
  while (s_day <= days) {

    s_line[s_i] = s_day;
    s_i++;
    s_day++;
     
    if (s_i > 6 || s_day > days) {
      s_lines.push(s_line)
      s_i = 0;
      s_line = [];
    }

  }


  return { data: s_lines, current: { year: year, month: month+1, day: no, week: weekDay } };

}



export function yearData(year?: number, max: number= 20) {
   const years:number[] = [];
    
   if(year == undefined) {
      year = new Date().getFullYear();  
   }

   const split = max / 2;

   for(let i: number= 0; i <= max; i++) {
     if(i < split) {
       years.push(year - (split-i));
     } else {
       years.push(year + (i-split));
     }
   }

   return years;
}

/**
 * 判断是否是闰年
 * @param {number} year 年份
 */
export function isLeapYear(year: number) {
  if (year % 400 === 0) return true;
  if (year % 4 === 0 && year % 100 !== 0) return true;
  return false;
}