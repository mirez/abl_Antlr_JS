/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test the Precondition Construct
   @class UnitTests.preconditionTests 
 */
exports.preconditionTests = {

    stub : function(test){
        var parseString = "precondition { (BlahWME) }";
        var startRule = "precondition";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "precondition",result[0].type);
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.clauses.length === 1);
        test.ok(result[0].testExpression.clauses[0].type === "wmeTest");
        test.ok(result[0].testExpression.clauses[0].bang === false);
        test.ok(result[0].testExpression.clauses[0].name === undefined);
        test.ok(result[0].testExpression.clauses[0].wmeType === "BlahWME");
        
        test.done();
    },


};
