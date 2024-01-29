/**
 * We have to use static imports rather than dynamic imports in order to be able to load data in a web worker.
 */

import m_adductor_brevis from "./muscles/M.AdductorBrevis.js";
import m_adductor_longus from "./muscles/M.AdductorLongus.js";
import m_adductor_magnus_adductoria from "./muscles/M.AdductorMagnusAdductoria.js";
import m_adductor_magnus_ischiadica from "./muscles/M.AdductorMagnusIschiadica.js";
import m_abductor_pollicis_longus from "./muscles/M.AbductorPollicisLongus.js";
import m_anconeus from "./muscles/M.Anconeus.js";
import m_articularis_genus from "./muscles/M.ArticularisGenus.js";
import m_biceps_brachii from "./muscles/M.BicepsBrachii.js";
import m_biceps_femoris from "./muscles/M.BicepsFemoris.js";
import m_brachialis from "./muscles/M.Brachialis.js";
import m_brachioradialis from "./muscles/M.Brachioradialis.js";
import m_coracobrachialis from "./muscles/M.Coracobrachialis.js";
import m_deltoideus_acromialis from "./muscles/M.DeltoideusAcromialis.js";
import m_deltoideus_clavicularis from "./muscles/M.DeltoideusClavicularis.js";
import m_deltoideus_spinalis from "./muscles/M.DeltoideusSpinalis.js";
import m_diaphragma from "./muscles/M.Diaphragma.js";
import m_extensor_digitorum_longus from "./muscles/M.ExtensorDigitorumLongus.js";
import m_extensor_hallucis_longus from "./muscles/M.ExtensorHallucisLongus.js";
import m_fibularis_brevis from "./muscles/M.FibularisBrevis.js";
import m_fibularis_longus from "./muscles/M.FibularisLongus.js";
import m_fibularis_tertius from "./muscles/M.FibularisTertius.js";
import m_flexor_digitorum_longus from "./muscles/M.FlexorDigitorumLongus.js";
import m_flexor_hallucis_longus from "./muscles/M.FlexorHallucisLongus.js";
import m_gastrocnemius from "./muscles/M.Gastrocnemius.js";
import m_gemellus_inferior from "./muscles/M.GemellusInferior.js";
import m_gemellus_superior from "./muscles/M.GemellusSuperior.js";
import m_gracilis from "./muscles/M.Gracilis.js";
import m_gluteus_maximus from "./muscles/M.GluteusMaximus.js";
import m_gluteus_medius from "./muscles/M.GluteusMedius.js";
import m_gluteus_minimus from "./muscles/M.GluteusMinimus.js";
import m_iliocostalis_cervicis from "./muscles/M.IliocostalisCervicis.js";
import m_iliocostalis_lumborum from "./muscles/M.IliocostalisLumborum.js";
import m_iliocostalis_thoracis from "./muscles/M.IliocostalisThoracis.js";
import m_iliopsoas from "./muscles/M.Iliopsoas.js";
import m_levator_scapulae from "./muscles/M.LevatorScapulae.js";
import m_longissimus_capitis from "./muscles/M.LongissimusCapitis.js";
import m_longissimus_cervicis from "./muscles/M.LongissimusCervicis.js";
import m_longissimus_thoracis from "./muscles/M.LongissimusThoracis.js";
import m_longus_capitis from "./muscles/M.LongusCapitis.js";
import m_longus_colli from "./muscles/M.LongusColli.js";
import m_obliquus_capitis_inferior from "./muscles/M.ObliquusCapitisInferior.js";
import m_obliquus_capitis_superior from "./muscles/M.ObliquusCapitisSuperior.js";
import m_obliquus_externus_abdominis from "./muscles/M.ObliquusExternusAbdominis.js";
import m_obliquus_internus_abdominis from "./muscles/M.ObliquusInternusAbdominis.js";
import m_obturatorius_externus from "./muscles/M.ObturatoriusExternus.js";
import m_obturatorius_internus from "./muscles/M.ObturatoriusInternus.js";
import m_pectineus from "./muscles/M.Pectineus.js";
import m_piriformis from "./muscles/M.Piriformis.js";
import m_plantaris from "./muscles/M.Plantaris.js";
import m_popliteus from "./muscles/M.Popliteus.js";
import m_pyramidalis from "./muscles/M.Pyramidalis.js";
import m_quadratus_femoris from "./muscles/M.QuadratusFemoris.js";
import m_quadratus_lumborum from "./muscles/M.QuadratusLumborum.js";
import m_rectus_abdominis from "./muscles/M.RectusAbdominis.js";
import m_rectus_capitis_anterior from "./muscles/M.RectusCapitisAnterior.js";
import m_rectus_capitis_lateralis from "./muscles/M.RectusCapitisLateralis.js";
import m_rectus_capitis_posterior_major from "./muscles/M.RectusCapitisPosteriorMajor.js";
import m_rectus_capitis_posterior_minor from "./muscles/M.RectusCapitisPosteriorMinor.js";
import m_rectus_femoris from "./muscles/M.RectusFemoris.js";
import m_sartorius from "./muscles/M.Sartorius.js";
import m_scalenus_anterior from "./muscles/M.ScalenusAnterior.js";
import m_scalenus_medius from "./muscles/M.ScalenusMedius.js";
import m_scalenus_posterior from "./muscles/M.ScalenusPosterior.js";
import m_semimembranosus from "./muscles/M.Semimembranosus.js";
import m_semispinalis_capitis from "./muscles/M.SemispinalisCapitis.js";
import m_semispinalis_cervicis from "./muscles/M.SemispinalisCervicis.js";
import m_semispinalis_thoracis from "./muscles/M.SemispinalisThoracis.js";
import m_semitendinosus from "./muscles/M.Semitendinosus.js";
import m_serratus_posterior_inferior from "./muscles/M.SerratusPosteriorInferior.js";
import m_serratus_posterior_superior from "./muscles/M.SerratusPosteriorSuperior.js";
import m_soleus from "./muscles/M.Soleus.js";
import m_spinalis_capitis from "./muscles/M.SpinalisCapitis.js";
import m_spinalis_cervicis from "./muscles/M.SpinalisCervicis.js";
import m_spinalis_thoracis from "./muscles/M.SpinalisThoracis.js";
import m_splenius_capitis from "./muscles/M.SpleniusCapitis.js";
import m_splenius_cervicis from "./muscles/M.SpleniusCervicis.js";
import m_sternocleidomastoideus from "./muscles/M.Sternocleidomastoideus.js";
import m_tensor_fasciae_latae from "./muscles/M.TensorFasciaeLatae.js";
import m_tibialis_anterior from "./muscles/M.TibialisAnterior.js";
import m_tibialis_posterior from "./muscles/M.TibialisPosterior.js";
import m_transversus_abdominis from "./muscles/M.TransversusAbdominis.js";
import m_transversus_thoracis from "./muscles/M.TransversusThoracis.js";
import m_trapezius_descendens from "./muscles/M.TrapeziusDescendens.js";
import m_vastus_intermedius from "./muscles/M.VastusIntermedius.js";
import m_vastus_lateralis from "./muscles/M.VastusLateralis.js";
import m_vastus_medialis from "./muscles/M.VastusMedialis.js";
import mm_intercostales_externi from "./muscles/MM.IntercostalesExterni.js";
import mm_intercostales_interni from "./muscles/MM.IntercostalesInterni.js";
import mm_intercostales_intimi from "./muscles/MM.IntercostalesIntimi.js";
import mm_interspinales_cervicis from "./muscles/MM.InterspinalesCervicis.js";
import mm_interspinales_lumborum from "./muscles/MM.InterspinalesLumborum.js";
import mm_intertransversarii_anteriores_cervicis from "./muscles/MM.IntertransversariiAnterioresCervicis.js";
import mm_intertransversarii_lumborum from "./muscles/MM.IntertransversariiLumborum.js";
import mm_intertransversarii_posteriores_cervicis from "./muscles/MM.IntertransversariiPosterioresCervicis.js";
import mm_levatores_costarum from "./muscles/MM.LevatoresCostarum.js";
import mm_multifidi from "./muscles/MM.Multifidi.js";
import mm_rotatores_breves from "./muscles/MM.RotatoresBreves.js";
import mm_rotatores_longi from "./muscles/MM.RotatoresLongi.js";
import mm_subcostales from "./muscles/MM.Subcostales.js";

export const arrMuscles = [
    m_adductor_brevis,
    m_adductor_longus,
    m_adductor_magnus_adductoria,
    m_adductor_magnus_ischiadica,
    m_abductor_pollicis_longus,
    m_anconeus,
    m_articularis_genus,
    m_biceps_brachii,
    m_biceps_femoris,
    m_brachialis,
    m_brachioradialis,
    m_coracobrachialis,
    m_deltoideus_acromialis,
    m_deltoideus_clavicularis,
    m_deltoideus_spinalis,
    m_diaphragma,
    m_extensor_digitorum_longus,
    m_extensor_hallucis_longus,
    m_fibularis_brevis,
    m_fibularis_longus,
    m_fibularis_tertius,
    m_flexor_digitorum_longus,
    m_flexor_hallucis_longus,
    m_gastrocnemius,
    m_gemellus_inferior,
    m_gemellus_superior,
    m_gracilis,
    m_gluteus_maximus,
    m_gluteus_medius,
    m_gluteus_minimus,
    m_iliocostalis_cervicis,
    m_iliocostalis_lumborum,
    m_iliocostalis_thoracis,
    m_iliopsoas,
    m_levator_scapulae,
    m_longissimus_capitis,
    m_longissimus_cervicis,
    m_longissimus_thoracis,
    m_longus_capitis,
    m_longus_colli,
    m_obliquus_capitis_inferior,
    m_obliquus_capitis_superior,
    m_obliquus_externus_abdominis,
    m_obliquus_internus_abdominis,
    m_obturatorius_externus,
    m_obturatorius_internus,
    m_pectineus,
    m_piriformis,
    m_plantaris,
    m_popliteus,
    m_pyramidalis,
    m_quadratus_femoris,
    m_quadratus_lumborum,
    m_rectus_abdominis,
    m_rectus_capitis_anterior,
    m_rectus_capitis_lateralis,
    m_rectus_capitis_posterior_major,
    m_rectus_capitis_posterior_minor,
    m_rectus_femoris,
    m_sartorius,
    m_scalenus_anterior,
    m_scalenus_medius,
    m_scalenus_posterior,
    m_semimembranosus,
    m_semispinalis_capitis,
    m_semispinalis_cervicis,
    m_semispinalis_thoracis,
    m_semitendinosus,
    m_serratus_posterior_inferior,
    m_serratus_posterior_superior,
    m_soleus,
    m_spinalis_capitis,
    m_spinalis_cervicis,
    m_spinalis_thoracis,
    m_splenius_capitis,
    m_splenius_cervicis,
    m_sternocleidomastoideus,
    m_tensor_fasciae_latae,
    m_tibialis_anterior,
    m_tibialis_posterior,
    m_transversus_abdominis,
    m_transversus_thoracis,
    m_trapezius_descendens,
    m_vastus_intermedius,
    m_vastus_lateralis,
    m_vastus_medialis,
    mm_intercostales_externi,
    mm_intercostales_interni,
    mm_intercostales_intimi,
    mm_interspinales_cervicis,
    mm_interspinales_lumborum,
    mm_intertransversarii_anteriores_cervicis,
    mm_intertransversarii_lumborum,
    mm_intertransversarii_posteriores_cervicis,
    mm_levatores_costarum,
    mm_multifidi,
    mm_rotatores_breves,
    mm_rotatores_longi,
    mm_subcostales,
]
.sort((a, b) => a.label.localeCompare(b.label));

export const objMuscles = arrMuscles.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue}), {});