
import * as dayjs from 'dayjs';

export function addDate(dateStr, days): string {
    let currentDate = dayjs(dateStr, 'YYYY-MM-DD');
    let nextDate = currentDate.add(days, 'day');
    return nextDate.format('YYYY-MM-DD');
}