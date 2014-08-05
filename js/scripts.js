var Student = {
	initialize: function(initializedFirstName, initializedLastName, initializedPeriod) {
		this.firstName = initializedFirstName;
		this.lastName = initializedLastName;
		this.period = initializedPeriod;
		this.assignments = [];
	}
};
var Assignment = {
	initialize: function(initializedAssignment, initializedTotalPoints, initializedStudentPoints) {
		this.assignmentName = initializedAssignment;
		this.totalPoints = initializedTotalPoints;
		this.studentPoints = initializedStudentPoints;
	},
	percentage: function() {
		var output = this.studentPoints/this.totalPoints * 100;
		return output;
	}
};

$(document).ready(function() {
	var currentStudent;

	$("#new-student").click(function() {
		var newStudent = Object.create(Student);
		var inputtedFirstName = $("input#new-student-first").val();
		var inputtedLastName = $("input#new-student-last").val();
		var inputtedPeriod = $("input#new-student-period").val();
		newStudent.initialize(inputtedFirstName, inputtedLastName, inputtedPeriod);
		$("#student-list").append("<li><span class='clickable'>" + newStudent.firstName + " " + newStudent.lastName + " - Period " + newStudent.period + "</span></li>");
		$("input#new-student-first").val("");
		$("input#new-student-last").val("");
		$("input#new-student-period").val("");

		$(".clickable").last().click(function() {
			$("#students-name").text(newStudent.firstName.toUpperCase() + "'s".toUpperCase());
			currentStudent = newStudent;
			$("ol#assignment-list").empty();
		 	currentStudent.assignments.forEach(function(eachAssignment){
        $("ol#assignment-list").append("<li>" + eachAssignment.assignmentName + "    " + Math.round(eachAssignment.percentage()) + "%" + "</li>");
      });
		});
	});

	$("button#add-new-assignment").last().click(function() {
		var inputtedAssignment = $("input#new-assignment").val();
		var inputtedTotalPoint = parseInt($("input#new-total-points").val());
		var inputtedStudentPoint = parseInt($("input#new-student-points").val());
		var newAssignment = Object.create(Assignment);
		newAssignment.initialize(inputtedAssignment, inputtedTotalPoint, inputtedStudentPoint);
		currentStudent.assignments.push(newAssignment);

	  $("input#new-assignment").val("");
	  $("input#new-total-points").val("");
	  $("input#new-student-points").val("");

	  $("ol#assignment-list").empty();
	  currentStudent.assignments.forEach(function(eachAssignment){
      $("ol#assignment-list").append("<li>" + eachAssignment.assignmentName + "    " + Math.round(eachAssignment.percentage()) + "%" + "</li>");
    });
	});

});
