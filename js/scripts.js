var Course = {
	initialize: function(initializedCourse, initializedPeriod) {
		this.courseTitle = initializedCourse;
		this.period = initializedPeriod;
		this.students = [];
	}
};

var Student = {
	initialize: function(initializedFirstName, initializedLastName) {
		this.firstName = initializedFirstName;
		this.lastName = initializedLastName;
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
	var currentCourse;
	var listOfCourses = [];

	$("#submit-course").click(function() {
		var newCourse = Object.create(Course);
		var inputtedCourseTitle = $("input.new-course").val();
		var inputtedPeriod = $("input.new-period").val();
		newCourse.initialize(inputtedCourseTitle, inputtedPeriod);
		$("input.new-course").val("");
		$("input.new-period").val("");
		// $("#course-and-period-list").empty();
		listOfCourses.push(newCourse);

		listOfCourses.sort(function(course1, course2) {
			return course1.period - course2.period;
		});
		// listOfCourses.forEach(function(eachCourse) {
		// 	$("#course-and-period-list").append("<li><span class='period-clickable'>" + eachCourse.period + " " + eachCourse.courseTitle + "</span></li>");
		// });
		$("#course-and-period-list").append("<li><span class='period-clickable'>" + newCourse.period + " " + newCourse.courseTitle + "</span></li>");

		$(".period-clickable").last().click(function() {
			$("#course-title").text("Period".toUpperCase() + "  " + newCourse.period.toUpperCase() + "'s".toUpperCase() + "  ");
			currentCourse = newCourse;
			$("#student-list").empty();
			currentCourse.students.forEach(function(eachStudent) {
				$("#student-list").append("<li><span class='clickable'>" + eachStudent.firstName + " " + eachStudent.lastName + "</span></li>");
			});
		});
	});

	$("#new-student").click(function() {
		var newStudent = Object.create(Student);
		var inputtedFirstName = $("input#new-student-first").val();
		var inputtedLastName = $("input#new-student-last").val();
		newStudent.initialize(inputtedFirstName, inputtedLastName);
		currentCourse.students.push(newStudent);
		$("#student-list").append("<li><span class='clickable'>" + newStudent.firstName + " " + newStudent.lastName + "</span></li>");
		$("input#new-student-first").val("");
		$("input#new-student-last").val("");

		$(".clickable").last().click(function() {
			console.log(newStudent)
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
		var inputtedTotalPoint = parseInt($("input#new-total-point").val());
		var inputtedStudentPoint = parseInt($("input#new-student-point").val());
		var newAssignment = Object.create(Assignment);
		newAssignment.initialize(inputtedAssignment, inputtedTotalPoint, inputtedStudentPoint);
		currentStudent.assignments.push(newAssignment);

	  $("input#new-assignment").val("");
	  $("input#new-total-point").val("");
	  $("input#new-student-point").val("");

	  $("ol#assignment-list").empty();
	  currentStudent.assignments.forEach(function(eachAssignment){
      $("ol#assignment-list").append("<li>" + eachAssignment.assignmentName + "    " + Math.round(eachAssignment.percentage()) + "%" + "</li>");
    });
	});

});
