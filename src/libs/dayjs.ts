/* eslint-disable @typescript-eslint/naming-convention */
import Dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'

Dayjs.locale(ja)
Dayjs.extend(utc)
Dayjs.extend(relativeTime)

export const dayjs = Dayjs

export const DateFormat = {
  JpDate: 'YYYY年M月D日',
  JpDateTime: 'YYYY年M月D日 H:mm',
  JpMonthDate: 'M月D日',
  JpMonthDateTime: 'M月D日 H:mm',
  Time: 'H:mm',

  // WARNING: Deprecated
  Date: 'YYYY/MM/DD',
  DateHyphen: 'YYYY-MM-DD',
  DateDayOfWeek: 'YYYY/MM/DD(ddd)',
  DateTimeDayOfWeek: 'YYYY/MM/DD(ddd) H:mm',
  DateTime: 'YYYY/MM/DD H:mm',
  DateTimeSecond: 'YYYY/MM/DD H:mm:ss',
  DateTimeSecondHyphen: 'YYYY-MM-DD H:mm:ss',
} as const

export const formatDateFromUTC = (utc: string, format: keyof typeof DateFormat) => {
  return dayjs.utc(utc).local().format(DateFormat[format])
}
