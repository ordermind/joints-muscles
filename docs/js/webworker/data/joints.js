/**
 * Unless specified, all ROM values and end-feel come from Schünke et al. (2016) Anatomische atlas - Algemene anatomie en bewegingsapparaat.
 *
 * We have to use static imports rather than dynamic imports in order to be able to load data in a web worker.
 */

import art_coxae from "../../data/joints/lower-extremity/Art.Coxae.js";
import art_genus from "../../data/joints/lower-extremity/Art.Genus.js";
import artt_intermetatarsales from "../../data/joints/lower-extremity/Artt.Intermetatarsales.js";
import artt_interphalangeae_pedis from "../../data/joints/lower-extremity/Artt.InterphalangeaePedis.js";
import artt_intertarsales from "../../data/joints/lower-extremity/Artt.Intertarsales.js";
import artt_metatarsophalangeae from "../../data/joints/lower-extremity/Artt.Metatarsophalangeae.js";
import artt_tarsometatarsales from "../../data/joints/lower-extremity/Artt.Tarsometatarsales.js";
import artt_tibiofibulares from "../../data/joints/lower-extremity/Artt.Tibiofibulares.js";
import ankle_joint from "../../data/joints/lower-extremity/AnkleJoint.js";

import art_capitis_costae from "../../data/joints/torso/Art.CapitisCostae.js";
import art_costotransversaria from "../../data/joints/torso/Art.Costotransversaria.js";
import art_sacroiliaca from "../../data/joints/torso/Art.Sacroiliaca.js";
import art_sternocostalis from "../../data/joints/torso/Art.Sternocostalis.js";
import artt_costovertebrales from "../../data/joints/torso/Artt.Costovertebrales.js";
import spine from "../../data/joints/torso/Spine.js";

import art_humeri from "../../data/joints/upper-extremity/Art.Humeri.js";
import artt_carpometacarpales from "../../data/joints/upper-extremity/Artt.Carpometacarpales.js";
import artt_intercarpales from "../../data/joints/upper-extremity/Artt.Intercarpales.js";
import artt_intermetacarpales from "../../data/joints/upper-extremity/Artt.Intermetacarpales.js";
import artt_interphalangeae_manus from "../../data/joints/upper-extremity/Artt.InterphalangeaeManus.js";
import artt_metacarpophalangeae from "../../data/joints/upper-extremity/Artt.Metacarpophalangeae.js";
import elbow_joint from "../../data/joints/upper-extremity/ElbowJoint.js";
import shoulder_girdle from "../../data/joints/upper-extremity/ShoulderGirdle.js";
import wrist_joint from "../../data/joints/upper-extremity/WristJoint.js";

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

export const objJoints = arrJoints.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue}), {});
