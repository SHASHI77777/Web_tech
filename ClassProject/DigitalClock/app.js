let digitalClock = () => {
  let dateObj = new Date();
  let SelectedElem = document.getElementsByTagName("span");

  SelectedElem[0].innerText = dateObj.getHours();
  SelectedElem[1].innerText = dateObj.getMinutes();
  SelectedElem[2].innerText = dateObj.getSeconds();
  SelectedElem[3].innerText = dateObj.getDate();

  let curMonth = dateObj.getMonth() + 1;
  switch (curMonth) {
    case 1:
        curMonth = "Jan";
        break;
    case 2:
      curMonth = "Feb";
      break;
      case 3:
      curMonth = "Mar";
      break;
      case 4:
      curMonth = "Apr";
      break;
      case 5:
      curMonth = "May";
      break;
      case 6:
      curMonth = "Jun";
      break;
      case 7:
      curMonth = "Jul";
      break;
      case 8:
      curMonth = "Aug";
      break;
      case 9:
      curMonth = "Sept";
      break;
    case 10:
      curMonth = "oct";
      break;
      case 11:
      curMonth = "Nov";
      break;
      case 12:
      curMonth = "Dec";
      break;
  }
  SelectedElem[4].innerText = curMonth;

  SelectedElem[5].innerText = dateObj.getFullYear();
  let curDay = dateObj.getDay() + 1;
  switch (curDay) {
    case 1:
      curDay = "Sunday";
      break;
    case 2:
      curDay = "Monday";
      break;
    case 3:
      curDay = "Tuesday";
      break;
    case 4:
      curDay = "Wednesday";
      break;
    case 5:
      curDay = "Thusday";
      break;
    case 6:
      curDay = "Friday";
      break;
    case 7:
      curDay = "Saturday";
      break;
  }
  SelectedElem[6].innerText = curDay;
};
