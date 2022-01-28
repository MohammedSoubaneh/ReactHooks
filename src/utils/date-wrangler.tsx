export function addDays (date: Date, daysToAdd: number) {
    const clone = new Date(date.getTime());
    clone.setDate(clone.getDate() + daysToAdd)
    return clone
}

export function getWeek (forDate: any, daysOffset = 0) {
    const date = addDays(forDate, daysOffset);
    const day = date.getDate()

    return {
        date,
        start: addDays(date, - day),
        end: addDays(date, 6 - day)
    }
}