/**
 * Calculates the number of days between two dates.
 * @param {Date} begin - The starting date.
 * @param {Date} end - The ending date.
 * @returns {number} The number of days between the two dates.
 */
function calculateDaysBetweenDates(begin,end) {
    var diff = end - begin;
    return Math.round(diff/(1000*60*60*24));
}