export  type DatePickerState = {
  isYear: boolean,
  years: number[],
  dates: number[][],
  current: { year: number, month: number, day: number, week: number},
  keepScrollTop:  number
}

export  type DatePickerProps = {
  date?: Date,
  onCommit: (type: 'Commit'|'Cancel'|'Clear', date: any)=>void,
  onCancel: (type: 'Commit'|'Cancel'|'Clear', date?: any) => void,
  onClear: (type: 'Commit'|'Cancel'|'Clear', date?: any) => void
}