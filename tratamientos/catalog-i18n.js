/**
 * Aurea Smile — Catálogo de Tratamientos: Controlador Bilingüe Dinámico
 */
document.addEventListener("DOMContentLoaded", function() {
  var dict = {
    es: {
      meta_title: "Catálogo Completo de Tratamientos (21) — Aurea Smile | Dra. Jailin Rada",
      meta_desc: "Explora los 21 tratamientos odontológicos de Aurea Smile en Cartagena: odontología digital 3D, rehabilitación oral, coronas metal-free y diseño de sonrisa.",
      top_location: "Cartagena de Indias, Colombia • Centro Histórico",
      nav_concept: "Por qué elegirnos",
      nav_doctor: "Dra. Jailin Rada",
      nav_treatments: "Tratamientos",
      nav_reviews: "Opiniones",
      nav_blog: "Blog",
      nav_contact: "Ubicación y Contacto",
      nav_cta: "Consultar Valoración",
      bc_home: "Inicio",
      bc_treat: "Tratamientos",
      hero_kicker: "Odontología Boutique de Alta Gama",
      hero_title: "Catálogo Completo de Tratamientos",
      hero_subtitle: "21 procedimientos clínicos desarrollados con rigor científico, tecnología digital y un profundo respeto por la biología y el confort de cada paciente.",
      cat1_kicker: "Flujo CAD/CAM & Simulación",
      cat1_title: "1. Odontología Digital 3D",
      cat1_desc: "Diagnóstico tridimensional y biomecánica asistida por ordenador para máxima predictibilidad clínica.",
      cat2_kicker: "Función Masticatoria & Biocompatibilidad",
      cat2_title: "2. Rehabilitación Oral",
      cat2_desc: "Prótesis fijas, implantes y restauraciones libres de metal para recuperar función y armonía dental.",
      cat3_kicker: "Armonía Facial & Biomimetismo",
      cat3_title: "3. Estética Dental & Sonrisa",
      cat3_desc: "Perfeccionamiento de forma, color y microtextura dental con un enfoque 100% natural y luminoso.",
      cat4_kicker: "Salud Integral & Diagnóstico Avanzado",
      cat4_title: "4. Tratamientos Complementarios & Especialidades",
      cat4_desc: "Atención odontológica integral, prevención periodontal y cuidados especializados para toda la familia.",
      card_link: "Ver procedimiento y detalles →",
      footer_nav: "Navegación",
      footer_clinic: "Consultorio",
      footer_rights: "Todos los derechos reservados.",
      footer_brand_desc: "Aurea Smile — Odontología Boutique en Cartagena de Indias. Tecnología digital avanzada y bienestar multisensorial liderado por la Dra. Jailin Rada.",
      footer_credits: "Diseño y desarrollo web por <a href='https://canedostudio.com/' target='_blank' rel='noopener' style='color:var(--champagne); font-weight:600;'>Canedo Studio</a>"
    },
    en: {
      meta_title: "Complete Treatment Catalog (21) — Aurea Smile | Dr. Jailin Rada",
      meta_desc: "Explore all 21 specialized dental procedures at Aurea Smile in Cartagena: 3D digital dentistry, full oral rehabilitation, metal-free crowns, and natural smile design.",
      top_location: "Cartagena de Indias, Colombia • Historic Center",
      nav_concept: "Why Choose Us",
      nav_doctor: "Dr. Jailin Rada",
      nav_treatments: "Treatments",
      nav_reviews: "Reviews",
      nav_blog: "Blog",
      nav_contact: "Location & Contact",
      nav_cta: "Book Assessment",
      bc_home: "Home",
      bc_treat: "Treatments",
      hero_kicker: "Boutique High-End Dentistry",
      hero_title: "Complete Treatment Catalog",
      hero_subtitle: "21 specialized clinical procedures delivered with scientific precision, 3D digital technology, and utmost respect for patient comfort.",
      cat1_kicker: "CAD/CAM Workflow & Simulation",
      cat1_title: "1. 3D Digital Dentistry",
      cat1_desc: "Three-dimensional diagnostics and computer-guided biomechanics ensuring peak clinical predictability.",
      cat2_kicker: "Masticatory Function & Biocompatibility",
      cat2_title: "2. Oral Rehabilitation",
      cat2_desc: "Fixed prosthodontics, implants, and metal-free restorations restoring enduring function and oral harmony.",
      cat3_kicker: "Facial Harmony & Biomimetics",
      cat3_title: "3. Cosmetic Dentistry & Smile Design",
      cat3_desc: "Refining tooth contours, shading, and micro-texture through a 100% natural, radiant approach.",
      cat4_kicker: "Comprehensive Oral Health & Diagnostics",
      cat4_title: "4. Complementary Care & Specialties",
      cat4_desc: "Comprehensive general dentistry, periodontal prevention, and gentle specialized care for your entire family.",
      card_link: "View procedure & clinical details →",
      footer_nav: "Navigation",
      footer_clinic: "Clinic Location",
      footer_rights: "All rights reserved.",
      footer_brand_desc: "Aurea Smile — Boutique Dentistry in Cartagena de Indias. Advanced digital technology and multisensory comfort directed by Dr. Jailin Rada.",
      footer_credits: "Web design & development by <a href='https://canedostudio.com/' target='_blank' rel='noopener' style='color:var(--champagne); font-weight:600;'>Canedo Studio</a>"
    }
  };

  var treatmentsData = {
    es: {
      "aline": {"badge": "Ortodoncia Invisible 3D", "title": "Aline", "summary": "Alineadores transparentes biomecánicamente planificados mediante escaneo intraoral 3D para corregir malposiciones dentales sin brackets metálicos."},
      "t-brux": {"badge": "Protección Oclusal Digital", "title": "T-brux", "summary": "Placa oclusal neuromuscular de alta precisión digital diseñada para neutralizar el apretamiento y rechinamiento dental, protegiendo dientes, restauraciones y la articulación temporomandibular (ATM)."},
      "t-quiet": {"badge": "Medicina Dental del Sueño", "title": "T-quiet", "summary": "Dispositivo de avance mandibular (DAM) digitalizado para el tratamiento del ronquido crónico y apneas obstructivas leves a moderadas, mejorando la oxigenación y la calidad del descanso."},
      "coronas-digitales": {"badge": "CAD/CAM de Precisión", "title": "Coronas Digitales", "summary": "Restauraciones fijas completas diseñadas por computadora (CAD) y fresadas con tecnología robótica (CAM) para devolver anatomía, función y estética idéntica al diente natural."},
      "coronas-metal-free": {"badge": "Zirconio & Disilicato", "title": "Coronas Metal-Free", "summary": "Coronas estéticas de vanguardia fabricadas en zirconio de alta translucidez o disilicato de litio, eliminando sombras grises y líneas oscuras en el borde de la encía."},
      "coronas-sobre-implante": {"badge": "Prótesis Fija Implantológica", "title": "Coronas sobre Implante", "summary": "Restauraciones fijas atornilladas o cementadas sobre pilares de implantes osteointegrados, diseñadas digitalmente para reponer piezas perdidas con firmeza y naturalidad."},
      "protesis-total": {"badge": "Rehabilitación Edéntula", "title": "Prótesis Total", "summary": "Dispositivos protésicos completos de última generación para pacientes desdentados, concebidos con análisis fisionómico para restaurar la altura facial, soporte labial y fonética."},
      "rehabilitacion-oral": {"badge": "Plan Integral Funcional", "title": "Rehabilitación Oral", "summary": "Disciplina odontológica que combina prótesis fija, removible y oclusión para reconstruir bocas severamente desgastadas o mutiladas, devolviendo salud y función masticatoria plena."},
      "implantes-dentales": {"badge": "Osteointegración & Cirugía Guiada", "title": "Implantes Dentales", "summary": "Raíces artificiales de titanio grado médico o zirconio biocompatible integradas en el hueso maxilar para sostener coronas, puentes o prótesis completas con máxima fijación y estética."},
      "diseno-de-sonrisa": {"badge": "Digital Smile Design", "title": "Diseño de Sonrisa", "summary": "Planificación estética integral que armoniza la forma, proporción, color y posición de los dientes con la línea de la sonrisa, los labios y los rasgos faciales únicos del paciente."},
      "blanqueamiento-dental": {"badge": "Aclaramiento Clínico", "title": "Blanqueamiento Dental", "summary": "Procedimiento clínico seguro que aclara varios tonos el color intrínseco del esmalte dental mediante agentes oxidantes biocompatibles supervisados por la Dra. Jailin Rada."},
      "diseno-de-carillas": {"badge": "Láminas Cerámicas & Resina", "title": "Diseño de Carillas", "summary": "Finas láminas cerámicas o de composite de alta gama adheridas al frente del diente para transformar textura, color, forma y alineación con un acabado sumamente natural."},
      "odontologia-estetica": {"badge": "Armonización Facial y Dental", "title": "Odontología Estética", "summary": "Conjunto de procedimientos avanzados enfocados en embellecer la sonrisa, respetando los cánones de proporción, luminosidad, simetría y naturalidad de cada rostro."},
      "limpiezas-dentales": {"badge": "Profilaxis & Detox Oral", "title": "Limpiezas Dentales", "summary": "Tratamiento preventivo y profiláctico profundo con ultrasonido y aeropulido para eliminar placa bacteriana calcificada (tártaro) y manchas extrínsecas sin agredir el esmalte."},
      "cirugia-oral": {"badge": "Procedimientos Quirúrgicos", "title": "Cirugía Oral", "summary": "Procedimientos quirúrgicos ambulatorios de precisión, desde extracciones complejas de cordales (muelas del juicio) hasta plastias gingivales y regularizaciones óseas."},
      "endodoncia": {"badge": "Terapia de Conductos", "title": "Endodoncia", "summary": "Tratamiento especializado para salvar dientes con la pulpa inflamada o infectada, desinfectando y sellando herméticamente el sistema de conductos radiculares."},
      "periodoncia": {"badge": "Salud de Encías y Hueso", "title": "Periodoncia", "summary": "Diagnóstico, tratamiento y control de las patologías que afectan a las encías y al hueso alveolar de soporte, frenando la inflamación y la movilidad dental."},
      "odontologia-general": {"badge": "Diagnóstico & Restauración", "title": "Odontología General", "summary": "Atención odontológica integral de prevención, diagnóstico temprano y restauración funcional de caries mediante resinas compuestas estéticas biomiméticas."},
      "ortodoncia": {"badge": "Alineación & Oclusión", "title": "Ortodoncia", "summary": "Corrección biomecánica de la posición de los dientes y huesos maxilares para lograr una mordida perfectamente funcional, estética y estable en el tiempo."},
      "odontopediatria": {"badge": "Salud Dental Infantil", "title": "Odontopediatría", "summary": "Cuidado odontológico preventivo y terapéutico especializado para bebés, niños y adolescentes en un entorno empático, lúdico y libre de temores."},
      "radiologia-oral": {"badge": "Diagnóstico por Imagen 2D/3D", "title": "Radiología Oral", "summary": "Estudios radiográficos digitales y tomografías computarizadas de haz cónico (CBCT) con ultra baja dosis de radiación para diagnósticos anatómicos de máxima certidumbre."}
    },
    en: {
      "aline": {"badge": "3D Invisible Orthodontics", "title": "Aline Clear Aligners", "summary": "Clear aligners biomechanically planned through 3D intraoral optical scanning to correct tooth misalignments without metallic brackets."},
      "t-brux": {"badge": "Digital Occlusal Protection", "title": "T-brux Night Guard", "summary": "Digital occlusal splints engineered through CAD/CAM technology to cushion involuntary nighttime clenching and safeguard natural teeth and aesthetic restorations."},
      "t-quiet": {"badge": "Dental Sleep Medicine", "title": "T-quiet Anti-Snoring Device", "summary": "Custom-engineered mandibular advancement device (MAD) digitally crafted to clear airway obstructions, alleviate snoring, and treat mild to moderate obstructive sleep apnea."},
      "coronas-digitales": {"badge": "High-Precision CAD/CAM", "title": "Digital Dental Crowns", "summary": "Custom single-tooth restorations designed digitally and milled with micron accuracy to restore deeply damaged teeth with lifelike appearance and maximum strength."},
      "coronas-metal-free": {"badge": "Bio-Aesthetic Ceramics", "title": "Metal-Free Crowns", "summary": "Full ceramic crowns crafted from Monolithic Zirconia or Lithium Disilicate (E.max) that eliminate dark gum lines and recreate the translucent brilliance of youthful natural teeth."},
      "coronas-sobre-implante": {"badge": "Implant Prosthodontics", "title": "Implant-Supported Crowns", "summary": "Prosthetic ceramic crowns screwed or cemented over osseointegrated dental implants to replace missing teeth with natural chewing stability and aesthetic contour."},
      "protesis-total": {"badge": "Advanced Full Prosthetics", "title": "Full Dentures", "summary": "Full arch rehabilitations engineered to restore speech, chewing capability, and facial fullness in patients who have lost all teeth in one or both arches."},
      "rehabilitacion-oral": {"badge": "Comprehensive Oral Rehabilitation", "title": "Full Oral Rehabilitation", "summary": "Comprehensive dental reconstruction combining aesthetic crowns, bridges, dental implants, and occlusal re-engineering to restore severely damaged or collapsed dentitions."},
      "implantes-dentales": {"badge": "Osseointegration & Guided Surgery", "title": "Dental Implants", "summary": "Biocompatible titanium or zirconia artificial tooth roots surgically anchored into the jawbone to permanently replace missing teeth with natural strength and beauty."},
      "diseno-de-sonrisa": {"badge": "Digital Smile Design (DSD)", "title": "Digital Smile Design", "summary": "Comprehensive aesthetic smile architecture harmonizing tooth shape, size, color, and alignment with facial dynamics through high-end digital simulation."},
      "blanqueamiento-dental": {"badge": "Professional Clinical Brightening", "title": "Professional Teeth Whitening", "summary": "Safe, clinically supervised dental whitening using high-potency peroxide gels activated without thermal pulp damage to brighten natural teeth by several shades."},
      "diseno-de-carillas": {"badge": "Micro-Ceramic Veneers", "title": "Ceramic Dental Veneers", "summary": "Ultra-thin custom porcelain or high-grade composite veneers meticulously bonded to the outer surface of teeth to correct color, contours, gaps, and minor misalignments."},
      "odontologia-estetica": {"badge": "Cosmetic Dental Harmony", "title": "Cosmetic Dentistry", "summary": "Specialized treatments focused on enhancing smile beauty through teeth whitening, cosmetic gingival recontouring, composite bonding, and micro-aesthetic touch-ups."},
      "limpiezas-dentales": {"badge": "Preventive Ultrasonic Prophylaxis", "title": "Deep Dental Cleanings", "summary": "Comprehensive professional prophylaxis incorporating high-frequency ultrasound, gentle air-polishing, and remineralizing therapy to prevent periodontal disease and tooth decay."},
      "cirugia-oral": {"badge": "Minimally Invasive Oral Surgery", "title": "Oral Surgery", "summary": "Precise, minimally traumatic surgical procedures including wisdom teeth extractions, frenectomies, and alveolar ridge remodeling with fast, comfortable recovery."},
      "endodoncia": {"badge": "Micro-Endodontic Therapy", "title": "Root Canal Therapy", "summary": "Specialized root canal treatment removing infected or inflamed dental pulp to eliminate severe pain, eliminate infection, and save the natural tooth from extraction."},
      "periodoncia": {"badge": "Periodontal Health & Gum Care", "title": "Periodontal Care & Gum Therapy", "summary": "Specialized diagnosis, treatment, and maintenance of the supporting tissues of teeth (gums, periodontal ligament, and alveolar bone) to halt tooth loss and resolve bleeding."},
      "odontologia-general": {"badge": "Comprehensive Primary Dental Care", "title": "General Dentistry", "summary": "Primary clinical diagnosis, restorative composite fillings, preventive cleanings, and holistic dental care to maintain your mouth in permanent health and harmony."},
      "ortodoncia": {"badge": "Comprehensive Orthodontics", "title": "Orthodontic Treatment", "summary": "Orthodontic treatment utilizing advanced aesthetic brackets or clear systems to correct teeth crowding, bite discrepancies, and align your smile harmoniously."},
      "odontopediatria": {"badge": "Specialized Pediatric Dental Care", "title": "Pediatric Dentistry", "summary": "Empathetic, preventive, and therapeutic pediatric dental care for infants, children, and teenagers in a welcoming, stress-free, and playful environment."},
      "radiologia-oral": {"badge": "2D/3D Digital Diagnostic Imaging", "title": "Oral Radiology & 3D Imaging", "summary": "Ultra-low-dose digital radiographic imaging and Cone Beam Computed Tomography (CBCT) providing sub-millimetric anatomical precision for clinical certainty."}
    }
  };

  var btnEs = document.getElementById('btn-es');
  var btnEn = document.getElementById('btn-en');

  function getSavedLanguage() {
    try {
      var saved = localStorage.getItem('aurea_smile_lang');
      if (saved === 'en' || saved === 'es') return saved;
    } catch(e) {}
    return 'es';
  }

  function setLang(lang) {
    try {
      localStorage.setItem('aurea_smile_lang', lang);
    } catch(e) {}
    document.documentElement.lang = lang;

    if (dict[lang] && dict[lang].meta_title) {
      document.title = dict[lang].meta_title;
    }
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict[lang] && dict[lang].meta_desc) {
      metaDesc.setAttribute('content', dict[lang].meta_desc);
    }

    if (btnEs) btnEs.classList.toggle('active', lang === 'es');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');

    // Update static keys
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var k = el.getAttribute('data-i18n');
      if (dict[lang] && dict[lang][k] !== undefined) {
        el.innerHTML = dict[lang][k];
      }
    });

    // Update all 21 treatment cards dynamically
    var tData = treatmentsData[lang];
    document.querySelectorAll('.treatment-card[data-slug]').forEach(function(card) {
      var slug = card.getAttribute('data-slug');
      var item = tData[slug];
      if (item) {
        var badgeEl = card.querySelector('[data-t-field="badge"]');
        var titleEl = card.querySelector('[data-t-field="title"]');
        var sumEl = card.querySelector('[data-t-field="summary"]');
        if (badgeEl) badgeEl.textContent = item.badge;
        if (titleEl) titleEl.textContent = item.title;
        if (sumEl) sumEl.textContent = item.summary;
      }
    });
  }

  if (btnEs) btnEs.addEventListener('click', function() { setLang('es'); });
  if (btnEn) btnEn.addEventListener('click', function() { setLang('en'); });

  // Expose on window for tests or programmatic toggles
  window.setAureaCatalogLang = setLang;

  // Apply initial saved language
  setLang(getSavedLanguage());
});
