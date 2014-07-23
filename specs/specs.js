describe("student", function() {
	describe("initialize", function() {
		it("sets a first and last name", function() {
			var myStudent = Object.create(Student);
			myStudent.initialize("Sally", "Jones");
			myStudent.firstName.should.equal("Sally");
			myStudent.lastName.should.equal("Jones");
		});
	});
});