import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default class IndividualFingerAndToeJointFunctionsFactory {
    #invididualJointGroups = {
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

    createElement(muscleFunction) {
        if(this.#invididualJointGroups.hasOwnProperty(muscleFunction.jointId)) {
            return this.#invididualJointGroups[muscleFunction.jointId].map(jointId => {
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
    }

    processArray(createdMuscleFunctions) {
        return createdMuscleFunctions
            .flat()
            .filter(element => element !== null);
    }
}