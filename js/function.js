/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах

имяФункции('08:00', '17:30', '14:00', 90); // true
имяФункции('8:0', '10:0', '8:0', 120);     // true
имяФункции('08:00', '14:30', '14:00', 90); // false
имяФункции('14:00', '17:30', '08:0', 90);  // false
имяФункции('8:00', '17:30', '08:00', 900); // false
*/
function isMeeting(startWorkDay, endWorkDay, meetingStartTime, lenghtMeeting) {
  const newStart = startWorkDay.split(':');
  const newEnd = endWorkDay.split(':');
  const newMeetingStart = meetingStartTime.split(':');
  const newLenght = lenghtMeeting * 60000;

  const today = new Date();

  const startWork = today.setHours(+newStart[0], +newStart[1]);
  const endWork = today.setHours(+newEnd[0], +newEnd[1]);
  const meetingStart = today.setHours(+newMeetingStart[0], +newMeetingStart[1]);
  const meetingEnd = meetingStart + newLenght;

  if (meetingStart >= startWork && meetingStart < endWork && meetingEnd <= endWork) {
    return true;
  }
  return false;
}

isMeeting('08:00', '17:00', '14:00', 90);
isMeeting('8:0', '10:0', '8:0', 120);
isMeeting('08:00', '14:30', '14:00', 90);
isMeeting('14:00', '17:30', '08:0', 90);
isMeeting('8:00', '17:30', '08:00', 900);
