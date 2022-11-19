let ch = prompt("Enter day in Short Form = ")
switch (ch)
  {
  case "sun":
    console.log("Sunday")
    break;
  case "mon":
    console.log("Monday")
    break;
  case "tue":
    console.log("Tuesday")
    break;
  case "wed":
    console.log("Wednesday")
    break;
  case "thur":
    console.log("Thursday")
    break;
  case "fri":
    console.log("Friday")
    break;
  case ch=="sat":
    console.log("Saturday")
    break;
  default:
      console.log("Wrong Input")
  }