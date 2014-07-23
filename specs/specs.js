describe("student", function() {
	describe("initialize", function() {
		it("sets a first and last name", function() {
			var myStudent = Object.create(Student);
			myStudent.initialize("Sally", "Jones");
			myStudent.firstName.should.equal("Sally");
			myStudent.lastName.should.equal("Jones");
		});

		it("sets a class period property", function() {
			var myStudent = Object.create(Student);
			myStudent.initialize("Sally", "Jones", 2);
			myStudent.period.should.equal(2);
		});

		it("sets up an empty array for the assignments property", function() {
			var myStudent = Object.create(Student);
			myStudent.initialize("Sally", "Jones");
			myStudent.assignments.should.eql([]);
		});
	});
});

describe("Assignment", function() {
	describe("initialize", function() {
		it("sets the name of the assignment", function () {
			var currentAssignment = Object.create(Assignment);
			currentAssignment.initialize("Javascript assignment");
			currentAssignment.assignmentName.should.equal("Javascript assignment");
		});

		it("sets the total assignment value", function() {
			var currentAssignment = Object.create(Assignment);
			currentAssignment.initialize("Javascript assignment", 100);
			currentAssignment.totalPoints.should.equal(100);
		});
	});
});