//test file
const Election = artifacts.require("Election");

contract("Election", (accounts) => {
  let electionInstance;

  it("initializes with two candidates", () => {
    return Election.deployed()
      .then((instance) => {
        return instance.candidatesCount();
      })
      .then((count) => {
        assert.equal(count, 2);
      });
  });

  it("it initializes the candidates with the correct values", function () {
    return Election.deployed()
      .then(function (instance) {
        electionInstance = instance;
        return electionInstance.candidates(1);
      })
      .then(function (candidate) {
        assert.equal(candidate[0], 1, "contains the correct id");
        assert.equal(candidate[1], "Candidate 1", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct votes count");
        return electionInstance.candidates(2);
      })
      .then(function (candidate) {
        assert.equal(candidate[0], 2, "contains the correct id");
        assert.equal(candidate[1], "Candidate 2", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct votes count");
      });
  });
});
