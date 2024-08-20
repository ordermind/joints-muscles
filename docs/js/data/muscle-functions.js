import { arrMuscles } from "./muscles.js";
import WholeSpineFunctionsFactory from "./muscle-functions-factories/WholeSpineFunctionsFactory.js";
import JointChildrenFunctionsFactory from "./muscle-functions-factories/JointChildrenFunctionsFactory.js";
import ElbowJointPartFunctionsFactory from "./muscle-functions-factories/ElbowJointPartFunctionsFactory.js";
import AnkleJointPartFunctionsFactory from "./muscle-functions-factories/AnkleJointPartFunctionsFactory.js";

const muscleFunctions = arrMuscles.flatMap(muscle => muscle.functions);

const muscleFunctionFactories = [
    {
        factory: new WholeSpineFunctionsFactory(),
        createdMuscleFunctions: [],
    },
    {
        factory: new JointChildrenFunctionsFactory(),
        createdMuscleFunctions: [],
    },
    {
        factory: new ElbowJointPartFunctionsFactory(),
        createdMuscleFunctions: [],
    },
    {
        factory: new AnkleJointPartFunctionsFactory(),
        createdMuscleFunctions: [],
    },
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