$("#calc").click(function () {

    //pull values from index.html and assign them to variables along with weight calculation
    var Assignments = ($("#assignments").val() * .55);
    var Project = ($("#groupproject").val() * .05);
    var Quiz = ($("#quizzes").val() * .1);
    var Exam = ($("#exams").val() * .2);
    var Intex = ($("#intex").val() * .1);

    //add variables together to get total percentage
    var Total = Assignments + Project + Quiz + Exam + Intex;

    // if statement to calculate grade
    if (Total >= 94) {
        Grade = "A";
    }
    else if (Total >= 90) {
        Grade = "A-";
    }
    else if (Total >= 87) {
        Grade = "B+";
    }
    else if (Total >= 84) {
        Grade = "B";
    }
    else if (Total >= 80) {
        Grade = "B-";
    }
    else if (Total >= 77) {
        Grade = "C+";
    }
    else if (Total >= 74) {
        Grade = "C";
    }
    else if (Total >= 70) {
        Grade = "C-";
    }
    else if (Total >= 67) {
        Grade = "D+";
    }
    else if (Total >= 64) {
        Grade = "D";
    }
    else if (Total >= 60) {
        Grade = "D-";
    }
    else {
        Grade = "E";
    }
    //alert user their grade and their percentage
    alert("Grade: " + Grade + " " + " Total: " + Total);
})
