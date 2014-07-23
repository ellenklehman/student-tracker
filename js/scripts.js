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
	}
};