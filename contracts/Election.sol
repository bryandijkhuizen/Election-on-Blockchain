pragma solidity 0.5.16;

contract Election {
    // Model a candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }

    // Store candidate
    //Read/write Candidates
    mapping(uint => Candidate) public candidates;

    // Store Cnadidates Count
    uint public candidatesCount;

   constructor () public {
      addCandidate("Candidate 1");
      addCandidate("Candidate 2");
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);

     }
}