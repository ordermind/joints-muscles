import JointMuscleFunction from "../data-types/JointMuscleFunction.js";
import { arrMuscles } from "./muscles.js";

const muscleFunctions = arrMuscles.flatMap(muscle => muscle.functions);

/**
 * Get muscle functions for the spine globally based on muscle functions for parts of the spine.
 *
 * We use a Set in combination with JSON stringify and parse to remove duplicates that occur when a muscle has identical function for multiple parts of the torso.
 */
function getWholeSpineFunctions() {
    const torsoJoints = [
        "juncturae_craniovertebrales",
        "columna_vertebralis_cervicalis",
        "columna_vertebralis_thoracalis",
        "columna_vertebralis_lumbalis",
    ];

    return Array.from(
        new Set(
            muscleFunctions.map(muscleFunction => {
                if(torsoJoints.includes(muscleFunction.jointId)) {
                    const jointId = muscleFunction.jointId;

                    return new JointMuscleFunction(
                        {
                            id: muscleFunction.id.replace(jointId, "columna_vertebralis"),
                            jointId: "columna_vertebralis",
                            muscleId: muscleFunction.muscleId,
                            movementId: muscleFunction.movementId.replace(jointId, "columna_vertebralis"),
                            isPrimeMover: muscleFunction.isPrimeMover,
                            notes: muscleFunction.notes,
                        }
                    );
                }

                return null;
            })
            .filter(element => element !== null)
            .map(element => JSON.stringify(element))
        )
    ).map(element => JointMuscleFunction.fromJSON(element));
}

/**
 * Add muscle functions for individual finger and toe joints based on grouped joints II - V
 */
function getIndividualFingerAndToeJointFunctions() {
    const invididualJointGroups = {
        artt_metacarpophalangeae_2_5: [
            "art_metacarpophalangea_2",
            "art_metacarpophalangea_3",
            "art_metacarpophalangea_4",
            "art_metacarpophalangea_5",
        ],
        artt_interphalangeae_proximales_manuum_2_5: [
            "art_interphalangea_proximalis_manus_2",
            "art_interphalangea_proximalis_manus_3",
            "art_interphalangea_proximalis_manus_4",
            "art_interphalangea_proximalis_manus_5",
        ],
        artt_interphalangeae_distales_manuum_2_5: [
            "art_interphalangea_distalis_manus_2",
            "art_interphalangea_distalis_manus_3",
            "art_interphalangea_distalis_manus_4",
            "art_interphalangea_distalis_manus_5",
        ],
        artt_metatarsophalangeae_2_5: [
            "art_metatarsophalangea_2",
            "art_metatarsophalangea_3",
            "art_metatarsophalangea_4",
            "art_metatarsophalangea_5",
        ],
        artt_interphalangeae_proximales_pedum_2_5: [
            "art_interphalangea_proximalis_pedis_2",
            "art_interphalangea_proximalis_pedis_3",
            "art_interphalangea_proximalis_pedis_4",
            "art_interphalangea_proximalis_pedis_5",
        ],
        artt_interphalangeae_distales_pedum_2_5: [
            "art_interphalangea_distalis_pedis_2",
            "art_interphalangea_distalis_pedis_3",
            "art_interphalangea_distalis_pedis_4",
            "art_interphalangea_distalis_pedis_5",
        ],
    };

    return muscleFunctions.flatMap(muscleFunction => {
        if(invididualJointGroups.hasOwnProperty(muscleFunction.jointId)) {
            return invididualJointGroups[muscleFunction.jointId].map(jointId => {
                return new JointMuscleFunction(
                    {
                        id: muscleFunction.id.replace(muscleFunction.jointId, jointId),
                        jointId,
                        muscleId: muscleFunction.muscleId,
                        movementId: muscleFunction.movementId.replace(muscleFunction.jointId, jointId),
                        isPrimeMover: muscleFunction.isPrimeMover,
                        notes: muscleFunction.notes,
                    }
                );
            })
        }

        return null;
    }).filter(element => element !== null);
}

export default [
    ...muscleFunctions,
    ...getWholeSpineFunctions(),
    ...getIndividualFingerAndToeJointFunctions()
];