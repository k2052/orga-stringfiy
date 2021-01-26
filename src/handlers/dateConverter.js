"use strict";

module.exports = toOrgDate;

function toOrgDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dte = date.getDate();
  var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
  [month, dte] = [month, dte].map((x) => ("" + x).padStart(2, "0"));
  return `${[year, month, dte].join("-")} ${day}`;
}
