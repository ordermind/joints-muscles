/**
 * Unless specified, all ROM values and end-feel come from Schünke et al. (2016) Anatomische atlas - Algemene anatomie en bewegingsapparaat.
 *
 * We have to use static imports rather than dynamic imports in order to be able to load data in a web worker.
 */

import art_coxae from "./joints/lower-extremity/Art.Coxae.js";
import art_genus from "./joints/lower-extremity/Art.Genus.js";
import artt_intermetatarsales from "./joints/lower-extremity/Artt.Intermetatarsales.js";
import artt_interphalangeae_pedis from "./joints/lower-extremity/Artt.InterphalangeaePedis.js";
import artt_intertarsales from "./joints/lower-extremity/Artt.Intertarsales.js";
import artt_metatarsophalangeae from "./joints/lower-extremity/Artt.Metatarsophalangeae.js";
import artt_tarsometatarsales from "./joints/lower-extremity/Artt.Tarsometatarsales.js";
import artt_tibiofibulares from "./joints/lower-extremity/Artt.Tibiofibulares.js";
import ankle_joint from "./joints/lower-extremity/AnkleJoint.js";

import art_capitis_costae from "./joints/torso/Art.CapitisCostae.js";
import art_costotransversaria from "./joints/torso/Art.Costotransversaria.js";
import art_sacroiliaca from "./joints/torso/Art.Sacroiliaca.js";
import art_sternocostalis from "./joints/torso/Art.Sternocostalis.js";
import artt_costovertebrales from "./joints/torso/Artt.Costovertebrales.js";
import spine from "./joints/torso/Spine.js";

import art_humeri from "./joints/upper-extremity/Art.Humeri.js";
import artt_carpometacarpales from "./joints/upper-extremity/Artt.Carpometacarpales.js";
import artt_intercarpales from "./joints/upper-extremity/Artt.Intercarpales.js";
import artt_intermetacarpales from "./joints/upper-extremity/Artt.Intermetacarpales.js";
import artt_interphalangeae_manus from "./joints/upper-extremity/Artt.InterphalangeaeManus.js";
import artt_metacarpophalangeae from "./joints/upper-extremity/Artt.Metacarpophalangeae.js";
import elbow_joint from "./joints/upper-extremity/ElbowJoint.js";
import shoulder_girdle from "./joints/upper-extremity/ShoulderGirdle.js";
import wrist_joint from "./joints/upper-extremity/WristJoint.js";

export const arrJoints = [
    art_coxae,
    art_genus,
    artt_intermetatarsales,
    artt_interphalangeae_pedis,
    artt_intertarsales,
    artt_metatarsophalangeae,
    artt_tarsometatarsales,
    artt_tibiofibulares,
    ankle_joint,
    art_capitis_costae,
    art_costotransversaria,
    art_sacroiliaca,
    art_sternocostalis,
    artt_costovertebrales,
    spine,
    art_humeri,
    artt_carpometacarpales,
    artt_intercarpales,
    artt_intermetacarpales,
    artt_interphalangeae_manus,
    artt_metacarpophalangeae,
    elbow_joint,
    shoulder_girdle,
    wrist_joint,
]
    .flat()
    .sort((a, b) => a.shortLabel.localeCompare(b.shortLabel));

export const objJoints = arrJoints.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue }), {});
