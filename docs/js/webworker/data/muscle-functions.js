import { arrMuscles } from "./muscles.js";
import WholeSpineFunctionsFactory from "./muscle-functions-factories/WholeSpineFunctionsFactory.js";
import IndividualFingerAndToeJointFunctionsFactory from "./muscle-functions-factories/IndividualFingerAndToeJointFunctionsFactory.js";
import ElbowJointPartFunctionsFactory from "./muscle-functions-factories/ElbowJointPartFunctionsFactory.js";

const muscleFunctions = arrMuscles.flatMap(muscle => muscle.functions);

const muscleFunctionFactories = [
    {
        factory: new WholeSpineFunctionsFactory(),
        createdMuscleFunctions: [],
    },
    {
        factory: new IndividualFingerAndToeJointFunctionsFactory(),
        createdMuscleFunctions: [],
    },
    {
        factory: new ElbowJointPartFunctionsFactory(),
        createdMuscleFunctions: [],
    }
];

for(const muscleFunction of muscleFunctions) {
    for(const muscleFunctionFactory of muscleFunctionFactories) {
        const createdMuscleFunction = muscleFunctionFactory.factory.createElement(muscleFunction);

        if(createdMuscleFunction !== null) {
            muscleFunctionFactory.createdMuscleFunctions.push(createdMuscleFunction);
        }
    }
}

export default [
    ...muscleFunctions,
    ...muscleFunctionFactories.flatMap(muscleFunctionFactory => {
        return muscleFunctionFactory.factory.processArray(muscleFunctionFactory.createdMuscleFunctions);
    })
];