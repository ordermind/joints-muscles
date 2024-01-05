/**
 * We have to use static imports rather than dynamic imports in order to be able to load data in a web worker.
 */

import m_adductor_brevis from "../../data/muscles/M.AdductorBrevis.js";
import m_adductor_longus from "../../data/muscles/M.AdductorLongus.js";
import m_adductor_magnus_adductoria from "../../data/muscles/M.AdductorMagnusAdductoria.js";
import m_adductor_magnus_ischiadica from "../../data/muscles/M.AdductorMagnusIschiadica.js";
import m_abductor_pollicis_longus from "../../data/muscles/M.AbductorPollicisLongus.js";
import m_anconeus from "../../data/muscles/M.Anconeus.js";
import m_articularis_genus from "../../data/muscles/M.ArticularisGenus.js";
import m_biceps_brachii from "../../data/muscles/M.BicepsBrachii.js";
import m_biceps_femoris from "../../data/muscles/M.BicepsFemoris.js";
import m_diaphragma from "../../data/muscles/M.Diaphragma.js";
import m_extensor_digitorum_longus from "../../data/muscles/M.ExtensorDigitorumLongus.js";
import m_extensor_hallucis_longus from "../../data/muscles/M.ExtensorHallucisLongus.js";
import m_fibularis_brevis from "../../data/muscles/M.FibularisBrevis.js";
import m_fibularis_longus from "../../data/muscles/M.FibularisLongus.js";
import m_fibularis_tertius from "../../data/muscles/M.FibularisTertius.js";
import m_flexor_digitorum_longus from "../../data/muscles/M.FlexorDigitorumLongus.js";
import m_flexor_hallucis_longus from "../../data/muscles/M.FlexorHallucisLongus.js";
import m_gastrocnemius from "../../data/muscles/M.Gastrocnemius.js";
import m_gemellus_inferior from "../../data/muscles/M.GemellusInferior.js";
import m_gemellus_superior from "../../data/muscles/M.GemellusSuperior.js";
import m_gracilis from "../../data/muscles/M.Gracilis.js";
import m_gluteus_maximus from "../../data/muscles/M.GluteusMaximus.js";
import m_gluteus_medius from "../../data/muscles/M.GluteusMedius.js";
import m_gluteus_minimus from "../../data/muscles/M.GluteusMinimus.js";
import m_iliocostalis_cervicis from "../../data/muscles/M.IliocostalisCervicis.js";
import m_iliocostalis_lumborum from "../../data/muscles/M.IliocostalisLumborum.js";
import m_iliocostalis_thoracis from "../../data/muscles/M.IliocostalisThoracis.js";
import m_iliopsoas from "../../data/muscles/M.Iliopsoas.js";
import m_levator_scapulae from "../../data/muscles/M.LevatorScapulae.js";
import m_longissimus_capitis from "../../data/muscles/M.LongissimusCapitis.js";
import m_longissimus_cervicis from "../../data/muscles/M.LongissimusCervicis.js";
import m_longissimus_thoracis from "../../data/muscles/M.LongissimusThoracis.js";
import m_longus_capitis from "../../data/muscles/M.LongusCapitis.js";
import m_longus_colli from "../../data/muscles/M.LongusColli.js";
import m_obliquus_capitis_inferior from "../../data/muscles/M.ObliquusCapitisInferior.js";
import m_obliquus_capitis_superior from "../../data/muscles/M.ObliquusCapitisSuperior.js";
import m_obliquus_externus_abdominis from "../../data/muscles/M.ObliquusExternusAbdominis.js";
import m_obliquus_internus_abdominis from "../../data/muscles/M.ObliquusInternusAbdominis.js";
import m_obturatorius_externus from "../../data/muscles/M.ObturatoriusExternus.js";
import m_obturatorius_internus from "../../data/muscles/M.ObturatoriusInternus.js";
import m_pectineus from "../../data/muscles/M.Pectineus.js";
import m_piriformis from "../../data/muscles/M.Piriformis.js";
import m_plantaris from "../../data/muscles/M.Plantaris.js";
import m_popliteus from "../../data/muscles/M.Popliteus.js";
import m_pyramidalis from "../../data/muscles/M.Pyramidalis.js";
import m_quadratus_femoris from "../../data/muscles/M.QuadratusFemoris.js";
import m_quadratus_lumborum from "../../data/muscles/M.QuadratusLumborum.js";
import m_rectus_abdominis from "../../data/muscles/M.RectusAbdominis.js";
import m_rectus_capitis_anterior from "../../data/muscles/M.RectusCapitisAnterior.js";
import m_rectus_capitis_lateralis from "../../data/muscles/M.RectusCapitisLateralis.js";
import m_rectus_capitis_posterior_major from "../../data/muscles/M.RectusCapitisPosteriorMajor.js";
import m_rectus_capitis_posterior_minor from "../../data/muscles/M.RectusCapitisPosteriorMinor.js";
import m_rectus_femoris from "../../data/muscles/M.RectusFemoris.js";
import m_sartorius from "../../data/muscles/M.Sartorius.js";
import m_scalenus_anterior from "../../data/muscles/M.ScalenusAnterior.js";
import m_scalenus_medius from "../../data/muscles/M.ScalenusMedius.js";
import m_scalenus_posterior from "../../data/muscles/M.ScalenusPosterior.js";
import m_semimembranosus from "../../data/muscles/M.Semimembranosus.js";
import m_semispinalis_capitis from "../../data/muscles/M.SemispinalisCapitis.js";
import m_semispinalis_cervicis from "../../data/muscles/M.SemispinalisCervicis.js";
import m_semispinalis_thoracis from "../../data/muscles/M.SemispinalisThoracis.js";
import m_semitendinosus from "../../data/muscles/M.Semitendinosus.js";
import m_serratus_posterior_inferior from "../../data/muscles/M.SerratusPosteriorInferior.js";
import m_serratus_posterior_superior from "../../data/muscles/M.SerratusPosteriorSuperior.js";
import m_soleus from "../../data/muscles/M.Soleus.js";
import m_spinalis_capitis from "../../data/muscles/M.SpinalisCapitis.js";
import m_spinalis_cervicis from "../../data/muscles/M.SpinalisCervicis.js";
import m_spinalis_thoracis from "../../data/muscles/M.SpinalisThoracis.js";
import m_splenius_capitis from "../../data/muscles/M.SpleniusCapitis.js";
import m_splenius_cervicis from "../../data/muscles/M.SpleniusCervicis.js";
import m_sternocleidomastoideus from "../../data/muscles/M.Sternocleidomastoideus.js";
import m_tensor_fasciae_latae from "../../data/muscles/M.TensorFasciaeLatae.js";
import m_tibialis_anterior from "../../data/muscles/M.TibialisAnterior.js";
import m_tibialis_posterior from "../../data/muscles/M.TibialisPosterior.js";
import m_transversus_abdominis from "../../data/muscles/M.TransversusAbdominis.js";
import m_transversus_thoracis from "../../data/muscles/M.TransversusThoracis.js";
import m_trapezius_descendens from "../../data/muscles/M.TrapeziusDescendens.js";
import m_vastus_intermedius from "../../data/muscles/M.VastusIntermedius.js";
import m_vastus_lateralis from "../../data/muscles/M.VastusLateralis.js";
import m_vastus_medialis from "../../data/muscles/M.VastusMedialis.js";
import mm_intercostales_externi from "../../data/muscles/MM.IntercostalesExterni.js";
import mm_intercostales_interni from "../../data/muscles/MM.IntercostalesInterni.js";
import mm_intercostales_intimi from "../../data/muscles/MM.IntercostalesIntimi.js";
import mm_interspinales_cervicis from "../../data/muscles/MM.InterspinalesCervicis.js";
import mm_interspinales_lumborum from "../../data/muscles/MM.InterspinalesLumborum.js";
import mm_intertransversarii_anteriores_cervicis from "../../data/muscles/MM.IntertransversariiAnterioresCervicis.js";
import mm_intertransversarii_lumborum from "../../data/muscles/MM.IntertransversariiLumborum.js";
import mm_intertransversarii_posteriores_cervicis from "../../data/muscles/MM.IntertransversariiPosterioresCervicis.js";
import mm_levatores_costarum from "../../data/muscles/MM.LevatoresCostarum.js";
import mm_multifidi from "../../data/muscles/MM.Multifidi.js";
import mm_rotatores_breves from "../../data/muscles/MM.RotatoresBreves.js";
import mm_rotatores_longi from "../../data/muscles/MM.RotatoresLongi.js";
import mm_subcostales from "../../data/muscles/MM.Subcostales.js";

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