let day = prompt("Enter a day of the week:"); //ask the user to input a day of the week
switch(day.toLowerCase()) { //make the input lowercase so it matches the cases
    case "monday":
        console.log("Your task for Monday is: Finish your assignments."); //task for monday
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Attend meetings."); //task for tuesday
        break;
    default:
        console.log("No tasks assigned for this day."); //if the input does not match any case
}
