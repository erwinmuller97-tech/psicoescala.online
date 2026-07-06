// DIVA-5 · Entrevista Diagnóstica del TDAH en adultos (Kooij & Francken, 2010)
var DIVA5_ATENCION = [
  {id:'A1',pregunta:'¿A menudo no presta suficiente atención a los detalles o incurre en errores por olvidos en las tareas escolares, el trabajo o en otras actividades? ¿Y cómo era en su infancia (en las tareas escolares o en otras actividades)?',
   adulto:['Comete errores por olvidos','Tiene que trabajar más despacio para evitar cometer errores','El trabajo contiene errores','No lee las instrucciones con cuidado','Pasa por alto o se deja detalles','Necesidad de dedicar mucho tiempo a los detalles','Se atasca fácilmente con los detalles','Trabaja demasiado rápido y por este motivo se equivoca','Otros'],
   infancia:['Errores por olvidos en las tareas escolares','Errores por no leer correctamente las preguntas','Pasa por alto o se deja detalles','El trabajo contiene errores','Preguntas sin contestar por no poder leerlas bien','Dejar sin contestar el reverso del examen','Recibir comentarios de otros por presentar un trabajo descuidado','No comprobar las respuestas de los deberes','Necesita demasiado tiempo para finalizar tareas muy detalladas','Otros']},
  {id:'A2',pregunta:'¿A menudo tiene dificultades para mantener la atención en las tareas? ¿Y cómo era en su infancia (en las actividades de juego)?',
   adulto:['No puede mantener la atención durante mucho tiempo en las tareas*','Se distrae fácilmente por asociaciones y pensamientos propios','Se distrae fácilmente con pensamientos no relacionados','Tiene dificultad para permanecer concentrado en las conferencias y/o las conversaciones','Le resulta difícil acabar de ver una película o de leer un libro*','Se cansa rápidamente de las cosas*','Hace preguntas sobre temas que ya se han hablado o comentado','Otros','* A no ser que el tema sea de su interés'],
   infancia:['Dificultad para mantener la atención en las tareas escolares','Dificultad para mantener la atención en el juego*','Tenía dificultad para permanecer concentrado en las conferencias y/o las conversaciones','Se distrae fácilmente','No se podía concentrar bien*','Necesitaba mucha estructura para no distraerse','Se cansaba fácilmente de las actividades*','Otros','* A no ser que el tema sea de su interés']},
  {id:'A3',pregunta:'¿A menudo parece que no escuche cuando se le habla directamente? ¿Y cómo era en su infancia?',
   adulto:['Está ausente o distraído','Le resulta difícil concentrarse en una conversación','Después de una conversación no sabe decir de qué iba','A menudo cambia el tema de una conversación','A menudo los demás le dicen que está distraído','Parece que tiene los pensamientos en otro tema, incluso en ausencia de cualquier distracción obvia','Otros'],
   infancia:['No sabía lo que sus padres o profesores le acababan de decir','Estaba ausente o distraído','Escuchaba solamente si había contacto visual o le levantaban la voz','Parecía que tenía los pensamientos en otro tema, incluso en ausencia de cualquier distracción obvia','A menudo tenían que dirigirse a usted varias veces para llamarle la atención','Tenían que repetir las preguntas varias veces','Otros']},
  {id:'A4',pregunta:'¿A menudo no sigue las instrucciones y a menudo no cumple con las tareas o deberes en su lugar de trabajo? ¿Y cómo era en su infancia (con las tareas escolares)?',
   adulto:['Hace varias cosas a la vez sin acabar ninguna','Inicia tareas pero pierde el foco rápidamente y se despista fácilmente','Necesita tener una fecha límite para acabar alguna cosa','Le cuesta trabajo acabar las tareas de tipo administrativo','Le cuesta seguir instrucciones de un manual','Otros'],
   infancia:['Le costaba seguir las instrucciones','Le resultaba difícil hacer las tareas que constaban de más de un paso','Iniciaba tareas pero perdía el foco rápidamente y se despistaba fácilmente','No acababa las cosas','No acababa los deberes o no los entregaba','Necesitaba mucha estructura para acabar las tareas','Otros']},
  {id:'A5',pregunta:'¿A menudo tiene dificultades para organizar tareas o actividades? ¿Y cómo era en su infancia?',
   adulto:['Le cuesta trabajo planificar las tareas diarias','Tiene dificultades para realizar tareas secuenciales','Su hogar y/o su lugar de trabajo están desordenados','Le cuesta mantener los materiales y sus pertenencias en orden','Trabaja desordenadamente y de manera desorganizada','Planifica demasiado o no planifica de forma eficiente','A menudo tiene dos citas al mismo tiempo','Llega tarde','No cumple con las fechas límite','No es capaz de utilizar su agenda de forma consecuente','Es inflexible porque necesita seguir esquemas','Tiene poca consciencia y dificultades para manejar el tiempo','Hace esquemas que no sigue','Necesita de otros para estructurar las cosas','Otros'],
   infancia:['Le costaba estar preparado a tiempo','Su habitación, escritorio y/o trabajo estaban desordenados','Tenía dificultades para mantener los materiales y sus pertenencias en orden','Le costaba jugar de forma autónoma','Le costaba planificar las tareas o sus deberes','No cumplía con las fechas límite','Hacía varias cosas al mismo tiempo','Llegaba tarde','No era consciente del tiempo','Le costaba entretenerse solo','Otros']},
  {id:'A6',pregunta:'¿A menudo evita (o le disgusta o es reticente a dedicarse a) tareas que requieren un esfuerzo mental sostenido? ¿Y cómo era en su infancia?',
   adulto:['Intenta hacer primero aquello que le parece más fácil o entretenido','A menudo aplaza las tareas difíciles o aburridas','Pospone las tareas de manera que no cumple con el tiempo acordado','Evita realizar el trabajo monótono como, por ejemplo, las tareas administrativas','Evita preparar informes, completar formularios o revisar documentos extensos','No le gusta leer a causa del esfuerzo mental','Evita hacer tareas que le exigen mucha concentración','Otros'],
   infancia:['Evitaba o le disgustaba hacer los deberes','Leía pocos libros o no tenía ganas de leer porque le suponía un esfuerzo mental','Evitaba hacer cosas que le exigían mucha concentración','Le disgustaban las asignaturas que exigían mucha concentración','Aplazaba las tareas difíciles o aburridas','Otros']},
  {id:'A7',pregunta:'¿A menudo extravía objetos que son necesarios para realizar tareas o actividades (p. ej., juguetes, ejercicios escolares, lápiz, libros o herramientas)? ¿Y cómo era en su infancia?',
   adulto:['Pierde las herramientas, documentación, las gafas, el teléfono móvil, la cartera, las llaves o la agenda','A menudo se deja cosas','Pierde los papeles del trabajo','Pierde mucho tiempo buscando las cosas','Se angustia si otros cambian las cosas de sitio','Guarda las cosas en sitios inapropiados','Pierde listas, números de teléfonos o notas','Otros'],
   infancia:['Perdía material escolar, lápices, libros u otros objetos','Perdía las piezas de ropa, los juguetes o los deberes','Perdía mucho tiempo buscando las cosas','Se angustiaba si los otros cambiaban las cosas de sitio','A menudo sus padres o profesores le decían que perdía las cosas','Otros']},
  {id:'A8',pregunta:'¿A menudo se distrae fácilmente por estímulos irrelevantes? ¿Y cómo era en su infancia?',
   adulto:['Le cuesta aislarse de estímulos externos','Le cuesta retomar el hilo después de haberse distraído','Se distrae fácilmente por los ruidos o aquello que pasa a su alrededor','Sigue las conversaciones de otros','Le cuesta trabajar, filtrar o seleccionar información','Otros'],
   infancia:['A menudo miraba por la ventana estando en clase','Se distraía fácilmente con los ruidos o con aquello que pasaba a su alrededor','Le costaba retomar el hilo después de haberse distraído','Otros']},
  {id:'A9',pregunta:'¿A menudo es poco cuidadoso en las actividades diarias? ¿Y cómo era en su infancia?',
   adulto:['Olvida las citas o otras obligaciones','Se le olvidan las llaves, la agenda, etc.','A menudo necesita que le recuerden los compromisos','Se olvida de pagar facturas o devolver llamadas','A menudo vuelve a casa para recoger las cosas olvidadas','Tiene esquemas rígidos para no olvidar las cosas','Olvida escribir o consultar su agenda','Olvida realizar tareas domésticas o hacer recados','Otros'],
   infancia:['A menudo se olvidaba de aquello acordado o de las tareas','Olvidaba realizar tareas o hacer recados','A menudo necesitaba que le recordasen las cosas','Olvidaba aquello que tenía que hacer a media tarea','Se olvidaba de llevarse al colegio las cosas que necesitaba','Se olvidaba las cosas en el colegio o en casa de los amigos','Otros']}
];

var DIVA5_HIPER = [
  {id:'HI1',pregunta:'¿A menudo mueve o juega en exceso con las manos o los pies, o se retuerce en su asiento? ¿Y cómo era en su infancia?',
   adulto:['No puede estar quieto','Mueve las piernas','Juega con el bolígrafo o con algún objeto','Se muerde las uñas o juega con el pelo','Puede dominar estos movimientos, pero le causa tensión','Otros'],
   infancia:['Movía las piernas','Jugaba con el bolígrafo o con algún objeto','Se mordía las uñas o jugaba con el pelo','No podía estar sentado tranquilamente','Podía dominar estos movimientos, pero le causaba tensión','Otros']},
  {id:'HI2',pregunta:'¿A menudo abandona su asiento en situaciones en las que se espera que permanezca sentado? ¿Y cómo era en su infancia?',
   adulto:['A menudo abandona su lugar en la oficina o en el trabajo','Evita los simposios, conferencias, la iglesia, etc.','Prefiere caminar que estar sentado','No está sentado durante mucho tiempo, siempre está en movimiento','En tensión, porque le cuesta quedarse quieto','Da excusas para poder moverse','Otros'],
   infancia:['A menudo se levantaba de la mesa o abandonaba su lugar en la clase','Le resultaba muy difícil estarse quieto durante las clases o en las comidas','Le mandaban quedarse sentado','Daba excusas para poder caminar un poco','Otros']},
  {id:'HI3',pregunta:'¿A menudo corre o salta excesivamente en situaciones en las cuales es inapropiado hacerlo (en adolescentes o adultos puede limitarse a sentimientos subjetivos de inquietud)? ¿Y cómo era en su infancia?',
   adulto:['Se siente intranquilo o agitado interiormente','Tiene la sensación de que tiene que mantenerse ocupado constantemente','Se relaja con dificultad','Otros'],
   infancia:['Estaba siempre corriendo en lugares en que era inapropiado','Se subía a los muebles o saltaba sobre el sofá','Se subía a los árboles','Se sentía agitado interiormente','Otros']},
  {id:'HI4',pregunta:'¿A menudo tiene dificultades para jugar o dedicarse tranquilamente a actividades de ocio? ¿Y cómo era en su infancia (cuando jugaba)?',
   adulto:['Habla durante actividades que exigen silencio','En compañía de otros, quiere llevar la voz cantante','Es ruidoso en otros tipos de situaciones','No puede hacer las actividades con tranquilidad','No puede hablar en voz baja','Otros'],
   infancia:['Era ruidoso al jugar o en la clase','No podía ver una película o la televisión con tranquilidad','Le mandaban estar más callado y más tranquilo','Se agitaba rápidamente en compañía de otros','Otros']},
  {id:'HI5',pregunta:'¿A menudo "está en marcha" o suele actuar como si "tuviese un motor"? ¿Y cómo era en su infancia?',
   adulto:['Siempre está ocupado/a haciendo alguna cosa','Le resulta incómodo/a estar quieto/a durante un largo período de tiempo, por ejemplo, en restaurantes o reuniones','Tiene mucha energía, siempre está haciendo cosas','Los demás le ven inquieto o difícil de seguir','No respeta sus propios límites','Le resulta difícil dejar que pasen las cosas, es demasiado controlador','Otros'],
   infancia:['Siempre estaba haciendo alguna cosa','Los demás le veían inquieto o difícil de seguir','Le resultaba incómodo estar quieto durante un largo período de tiempo','Era muy activo en clase y en casa','Tenía mucha energía','No dejaba de insistir, de dar la lata','Otros']},
  {id:'HI6',pregunta:'¿A menudo habla mucho o en exceso? ¿Y cómo era en su infancia?',
   adulto:['Habla tanto que llega a cansar a la gente','Le conocen por ser muy hablador o charlatán','Le resulta difícil dejar de hablar','Tiene la tendencia a hablar demasiado','No da lugar a que los otros participen en la conversación','Necesita muchas palabras para explicar alguna cosa','Otros'],
   infancia:['Le conocían por ser muy hablador','A menudo los profesores y los padres le pedían que se callase','En las notas, había anotaciones de que hablaba mucho','Le castigaban por hablar demasiado','No dejaba trabajar a sus compañeros porque hablaba demasiado','No dejaba que los demás participasen en la conversación','Otros']},
  {id:'HI7',pregunta:'¿A menudo suelta de manera precipitada una respuesta antes de haber estado completada la pregunta? ¿Y cómo era en su infancia?',
   adulto:['Tiene problemas para mantener la boca cerrada','Dice cosas sin pensar','Da una respuesta antes de que la gente acabe de hablar','Acaba las frases de los demás','No tiene tacto','Otros'],
   infancia:['Tenía problemas para mantenerse callado/a','Siempre quería ser el primero en dar la respuesta a la clase','Daba la respuesta el primero, aunque fuese errónea','Le costaba esperar su turno en las conversaciones','Resultaba hiriente','Otros']},
  {id:'HI8',pregunta:'¿A menudo tiene dificultades para esperar su turno? ¿Y cómo era en su infancia?',
   adulto:['Le cuesta trabajo esperar su turno en la fila, se cuela','Le cuesta trabajo mantener la paciencia en el tráfico o en una caravana','Le resulta difícil esperar su turno en una conversación','Es impaciente','Inicia o deja relaciones/trabajos por impaciencia','Otros'],
   infancia:['Le costaba esperar su turno jugando o haciendo deporte','Le resultaba difícil esperar su turno en clase','Siempre estaba el primero','Se impacientaba rápidamente','Cruzaba la calle sin mirar','Otros']},
  {id:'HI9',pregunta:'¿A menudo interrumpe o se entromete en asuntos de los demás? ¿Y cómo era en su infancia?',
   adulto:['Rápido a la hora de meterse con los demás','Se entromete fácilmente con los demás','Interrumpe a los demás cuando están ocupados o cuando realizan sus tareas','Recibe comentarios de los demás que le acusan de entrometido o cotilla','Le resulta difícil respetar los límites que le imponen los demás','Tiene una opinión sobre todas las cosas y no se la calla','Otros'],
   infancia:['Interrumpía el juego o las actividades de los demás','Utilizaba las cosas de los demás sin pedir permiso','Reaccionaba ante cualquier cosa','No podía esperar','Otros']}
];

var DIVA5_AREAS = [
  {id:'trabajo',label:'Trabajo / educación',
   adulto:['No ha acabado los cursos necesarios para el trabajo','Trabaja por debajo de su nivel de formación','Se aburre con facilidad de su trabajo','Presenta un patrón de trabajos de corta duración','Le resulta difícil hacer tareas administrativas y de planificación','No le ascienden','Rinde por debajo de lo esperado en el trabajo','Abandona o le despiden por conflictos en el trabajo','Incapacitado para trabajar a causa de los síntomas','Disfunción limitada al ser compensada por un CI alto','Disfunción limitada al ser compensada por una estructura externa','Otros'],
   infancia:['Formación escolar inferior a la esperada en relación a su CI','Repetición de cursos a consecuencia de los problemas de concentración','Cursos sin acabar/expulsión del centro escolar','Acabar la enseñanza o cursos le ha comportado más tiempo del habitual','Ha aprobado con dificultades la formación correspondiente a su CI','Le resultaba difícil hacer los deberes','Hacía formación especial debido a los síntomas','Comentarios del profesorado sobre su conducta y concentración','Disfunción limitada al ser compensada por un CI alto','Disfunción limitada al ser compensada por una estructuración externa','Otros']},
  {id:'relaciones',label:'Relaciones / familia',
   adulto:['Se cansa rápidamente de las relaciones','Es impulsivo a la hora de iniciar o romper una relación','Relación desigual por los síntomas','Problemas con la pareja, peleas, falta de intimidad','Separado a causa de los síntomas','Problemas con la sexualidad a causa de los síntomas','Problemas con la educación debido a los síntomas','Dificultades con la contabilidad y/o las tareas del hogar','Problemas financieros / ludopatía','No se atreve a iniciar una relación','Otros'],
   infancia:['A menudo se peleaba con sus hermanos','A menudo le han castigado o pegado','Poco contacto con la familia debido a los conflictos','Necesidad de una estructura más prolongada de lo normal por parte de los padres','Otros']},
  {id:'contactos',label:'Contactos sociales',
   adulto:['Se cansa rápidamente de los contactos sociales','Le cuesta mantener los contactos sociales','Conflictos a causa de problemas de comunicación','Le cuesta iniciar contactos sociales','Falta de seguridad en uno mismo a causa de experiencias negativas','No es atento (olvida enviar una postal, no muestra empatía, no llama, etc.)','Otros'],
   infancia:['Le costaba mantener contactos sociales','Tenía conflictos a causa de problemas de comunicación','Le costaba establecer contactos sociales','Tenía pocos amigos','Se burlaban de usted en el colegio','Le hacían el vacío / no le permitían formar parte del grupo','Era un "pinxo"','Otros']},
  {id:'tiempo_libre',label:'Tiempo libre',
   adulto:['No se relaja fácilmente en su tiempo libre','Necesita hacer mucho deporte para poder relajarse','Se lesiona porque hace mucho deporte','No es capaz de acabar de ver una película o de leer un libro','Está ocupado constantemente y por eso se agota','Se cansa rápidamente de sus aficiones','Accidentes/pérdida del permiso de conducir por conducción imprudente','Busca nuevas sensaciones y/o se arriesga demasiado','Ha tenido problemas con la policía/justicia','Tiene ataques de gula','Otros'],
   infancia:['No se relajaba fácilmente en su tiempo libre','Necesitaba hacer mucho deporte para poder relajarse','Sufría lesiones porque hacía mucho deporte','No era capaz de acabar de ver una película o de leer un libro','Estaba ocupado constantemente y por eso estaba siempre cansado','Se cansaba rápidamente de sus aficiones','Buscaba nuevas sensaciones y/o se arriesgaba demasiado','Ha tenido problemas con la policía / justicia','A menudo ha sufrido accidentes','Otros']},
  {id:'autoimagen',label:'Autoimagen',
   adulto:['Inseguro delante de los comentarios negativos de los demás','Imagen negativa de uno mismo por haber sufrido fracasos','Miedo al fracaso al empezar cosas nuevas','Reacción exagerada delante de las críticas','Perfeccionismo','Triste a causa de los síntomas de TDAH','Otros'],
   infancia:['Inseguro delante de los comentarios negativos de los demás','Imagen negativa de uno mismo por haber sufrido fracasos','Miedo al fracaso por empezar cosas nuevas','Reacción exagerada delante de las críticas','Perfeccionismo','Otros']}
];

function diva5Esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;'); }

function diva5SnHtml(domPrefix, critId, etapa, label) {
  var name = domPrefix + '-' + critId + '-' + etapa;
  return '<div class="diva5-sn-group"><span class="diva5-sn-lbl">' + label + ':</span>' +
    '<label class="asrs-opt"><input type="radio" name="' + name + '" value="si"> Sí</label>' +
    '<label class="asrs-opt"><input type="radio" name="' + name + '" value="no"> No</label></div>';
}

function diva5RenderChecks(domPrefix, critId, etapa, items) {
  var html = '';
  items.forEach(function(txt, i) {
    var id = domPrefix + '-' + critId + '-' + etapa + '-e' + i;
    html += '<label class="diva5-chk" for="' + id + '"><input type="checkbox" id="' + id + '" name="' + id + '"><span>' + diva5Esc(txt) + '</span></label>';
  });
  return html;
}

function diva5RenderCriterio(c, domPrefix, numLabel) {
  var html = '<div class="diva5-crit"><div class="diva5-crit-num">' + numLabel + '</div>' +
    '<div class="diva5-crit-q">' + diva5Esc(c.pregunta) + '</div>' +
    '<div class="diva5-cols">' +
    '<div class="diva5-col"><div class="diva5-col-title">Ejemplos en la edad adulta</div>' + diva5RenderChecks(domPrefix, c.id, 'ad', c.adulto) + diva5SnHtml(domPrefix, c.id, 'ad', 'Síntoma presente') + '</div>' +
    '<div class="diva5-col"><div class="diva5-col-title">Ejemplos en la infancia</div>' + diva5RenderChecks(domPrefix, c.id, 'inf', c.infancia) + diva5SnHtml(domPrefix, c.id, 'inf', 'Síntoma presente') + '</div>' +
    '</div></div>';
  return html;
}

function diva5RenderForm() {
  var p1 = '<div class="diva5-parte-title">Parte 1 — Déficit de Atención (A1 a A9)</div>' +
    '<p style="font-size:0.8rem;color:var(--muted);margin:-6px 0 12px;line-height:1.45;">Síntomas en adulto: mínimo 6 meses. En infancia: entre 5 y 12 años. Curso crónico, no episódico.</p>';
  DIVA5_ATENCION.forEach(function(c) { p1 += diva5RenderCriterio(c, 'diva5a', c.id); });
  var p2 = '<div class="diva5-parte-title">Parte 2 — Hiperactividad-Impulsividad (H/I 1 a H/I 9)</div>' +
    '<p style="font-size:0.8rem;color:var(--muted);margin:-6px 0 12px;line-height:1.45;">Misma estructura que la Parte 1 (Criterio A2 del DSM-5).</p>';
  DIVA5_HIPER.forEach(function(c) { p2 += diva5RenderCriterio(c, 'diva5hi', 'H/I ' + c.id.replace('HI','')); });
  var p3 = '<div class="diva5-parte-title">Parte 3 — Disfunción (Criterios B y C)</div>' +
    '<div class="card" style="margin-bottom:12px;"><div class="card-titulo">Criterio B — Inicio antes de los 12 años</div>' +
    '<p style="font-size:0.88rem;color:var(--text);margin-bottom:10px;line-height:1.45;">¿Los síntomas citados de hiperactividad/impulsividad y/o desatención los ha presentado desde siempre?</p>' +
    '<div class="diva5-sn" style="border-top:none;padding-top:0;">' + diva5SnHtml('diva5b', 'onset', 'x', '¿Presentes antes de los 12 años?') + '</div>' +
    '<div id="diva5-edad-wrap" style="display:none;margin-top:10px;"><label style="font-size:0.85rem;color:var(--text);">Edad de inicio (si la respuesta es No): </label>' +
    '<input type="text" id="diva5-edad-inicio" placeholder="años" style="max-width:120px;margin-left:8px;padding:6px 10px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text);"></div></div>';
  p3 += '<div class="card"><div class="card-titulo">Criterio C — Áreas de disfunción</div>' +
    '<p style="font-size:0.82rem;color:var(--muted);margin-bottom:14px;">Marcá los ejemplos que correspondan y agregá observaciones al final de cada área.</p>';
  DIVA5_AREAS.forEach(function(area) {
    p3 += '<div class="diva5-area"><div class="diva5-area-title">' + diva5Esc(area.label) + '</div><div class="diva5-cols">' +
      '<div class="diva5-col"><div class="diva5-col-title">Edad adulta</div>' + diva5RenderChecks('diva5d', area.id, 'ad', area.adulto) +
      '<textarea class="diva5-nota" id="diva5d-' + area.id + '-ad-nota" placeholder="Observaciones (adulto)…" rows="2"></textarea></div>' +
      '<div class="diva5-col"><div class="diva5-col-title">Infancia / adolescencia</div>' + diva5RenderChecks('diva5d', area.id, 'inf', area.infancia) +
      '<textarea class="diva5-nota" id="diva5d-' + area.id + '-inf-nota" placeholder="Observaciones (infancia)…" rows="2"></textarea></div></div></div>';
  });
  p3 += '<div class="diva5-sn" style="margin-top:14px;">' +
    diva5SnHtml('diva5c', 'dis', 'ad', 'Disfunción en ≥ 2 campos (adulto)') +
    diva5SnHtml('diva5c', 'dis', 'inf', 'Disfunción en ≥ 2 campos (infancia)') + '</div></div>';
  document.getElementById('diva5-parte1').innerHTML = p1;
  document.getElementById('diva5-parte2').innerHTML = p2;
  document.getElementById('diva5-parte3').innerHTML = p3;
  document.querySelectorAll('input[name="diva5b-onset-x"]').forEach(function(r) {
    r.addEventListener('change', diva5ToggleEdad);
  });
}

function diva5ToggleEdad() {
  var v = document.querySelector('input[name="diva5b-onset-x"]:checked');
  var w = document.getElementById('diva5-edad-wrap');
  if (w) w.style.display = (v && v.value === 'no') ? 'block' : 'none';
}

function diva5GetSn(name) {
  var el = document.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : null;
}

function diva5CollectChecks(domPrefix, critId, etapa, items) {
  var out = [];
  items.forEach(function(txt, i) {
    var id = domPrefix + '-' + critId + '-' + etapa + '-e' + i;
    var el = document.getElementById(id);
    if (el && el.checked) out.push({ i: i, texto: txt });
  });
  return out;
}

function diva5CollectCriterios(list, domPrefix) {
  var criterios = {};
  var totAd = 0, totInf = 0;
  list.forEach(function(c) {
    var ad = diva5GetSn(domPrefix + '-' + c.id + '-ad');
    var inf = diva5GetSn(domPrefix + '-' + c.id + '-inf');
    if (ad === 'si') totAd++;
    if (inf === 'si') totInf++;
    criterios[c.id] = {
      adulto: ad, infancia: inf,
      ejemplos_adulto: diva5CollectChecks(domPrefix, c.id, 'ad', c.adulto),
      ejemplos_infancia: diva5CollectChecks(domPrefix, c.id, 'inf', c.infancia)
    };
  });
  return { criterios: criterios, adulto: totAd, infancia: totInf };
}

function diva5CollectData() {
  var a = diva5CollectCriterios(DIVA5_ATENCION, 'diva5a');
  var hi = diva5CollectCriterios(DIVA5_HIPER, 'diva5hi');
  var disfuncion = {};
  DIVA5_AREAS.forEach(function(area) {
    disfuncion[area.id] = {
      adulto: diva5CollectChecks('diva5d', area.id, 'ad', area.adulto),
      infancia: diva5CollectChecks('diva5d', area.id, 'inf', area.infancia),
      nota_adulto: (document.getElementById('diva5d-' + area.id + '-ad-nota') || {}).value || '',
      nota_infancia: (document.getElementById('diva5d-' + area.id + '-inf-nota') || {}).value || ''
    };
  });
  var criterioB = diva5GetSn('diva5b-onset-x');
  var edadInicio = (document.getElementById('diva5-edad-inicio') || {}).value || '';
  var disAd = diva5GetSn('diva5c-dis-ad');
  var disInf = diva5GetSn('diva5c-dis-inf');
  return {
    criterios_A: a.criterios,
    criterios_HI: hi.criterios,
    totales: { A: { adulto: a.adulto, infancia: a.infancia }, HI: { adulto: hi.adulto, infancia: hi.infancia } },
    criterio_B: { antes_12: criterioB, edad_inicio: criterioB === 'no' ? edadInicio : null },
    disfuncion: disfuncion,
    disfuncion_2_campos: { adulto: disAd, infancia: disInf }
  };
}

function diva5Validar(d) {
  var missing = [];
  DIVA5_ATENCION.forEach(function(c) {
    if (!d.criterios_A[c.id].adulto || !d.criterios_A[c.id].infancia) missing.push(c.id + ' (adulto/infancia)');
  });
  DIVA5_HIPER.forEach(function(c) {
    if (!d.criterios_HI[c.id].adulto || !d.criterios_HI[c.id].infancia) missing.push('H/I ' + c.id.replace('HI','') + ' (adulto/infancia)');
  });
  if (!d.criterio_B.antes_12) missing.push('Criterio B');
  if (d.criterio_B.antes_12 === 'no' && !d.criterio_B.edad_inicio) missing.push('Edad de inicio (Criterio B)');
  if (!d.disfuncion_2_campos.adulto || !d.disfuncion_2_campos.infancia) missing.push('Disfunción ≥2 campos');
  return missing;
}

function diva5CalcPresentacion(totales) {
  var aAd = totales.A.adulto, hiAd = totales.HI.adulto;
  var aInf = totales.A.infancia, hiInf = totales.HI.infancia;
  var infSig = (aInf >= 3 || hiInf >= 3);
  var adASig = aAd >= 5, adHiSig = hiAd >= 5;
  var presentacion, codigo;
  if (adASig && adHiSig) {
    presentacion = 'Presentación combinada';
    codigo = '314.01';
  } else if (adASig) {
    presentacion = 'Presentación predominante con falta de atención';
    codigo = '314.00';
  } else if (adHiSig) {
    presentacion = 'Presentación predominante hiperactiva/impulsiva';
    codigo = '314.01';
  } else {
    presentacion = 'No cumple criterios de presentación TDAH en adulto';
    codigo = null;
  }
  return {
    presentacion: presentacion,
    codigo_dsm5: codigo,
    presentacion_completa: codigo ? (presentacion + ' (DSM-5 ' + codigo + ')') : presentacion,
    infancia_significativa: infSig,
    adulto_inatencion_significativa: adASig,
    adulto_hi_significativa: adHiSig,
    criterios: {
      infancia_3_o_mas: infSig,
      adulto_A_5_o_mas: adASig,
      adulto_HI_5_o_mas: adHiSig
    }
  };
}

function iniciarDIVA5() {
  document.getElementById('diva5-fecha').value = new Date().toISOString().split('T')[0];
  document.getElementById('diva5-form').style.display = 'block';
  document.getElementById('diva5-resultado').style.display = 'none';
  diva5RenderForm();
}

function limpiarDIVA5() {
  diva5RenderForm();
  var ed = document.getElementById('diva5-edad-inicio');
  if (ed) ed.value = '';
}

function calcularDIVA5() {
  var d = diva5CollectData();
  var missing = diva5Validar(d);
  if (missing.length) {
    toast('Completá todos los criterios Sí/No (' + missing.slice(0, 3).join(', ') + (missing.length > 3 ? '…' : '') + ').', 'error');
    return;
  }
  var pres = diva5CalcPresentacion(d.totales);
  d.presentacion = pres.presentacion_completa;
  d.codigo_dsm5 = pres.codigo_dsm5;
  d.resumen = pres;
  window._diva5Data = d;
  var badgeCol = pres.adulto_inatencion_significativa || pres.adulto_hi_significativa ? '#D85A30' : '#639922';
  var html = '<table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin-bottom:12px;">' +
    '<thead><tr><th style="text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--muted);font-size:0.72rem;text-transform:uppercase;">Dominio</th>' +
    '<th style="text-align:center;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--muted);font-size:0.72rem;text-transform:uppercase;">Adulto</th>' +
    '<th style="text-align:center;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--muted);font-size:0.72rem;text-transform:uppercase;">Infancia</th>' +
    '<th style="text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--muted);font-size:0.72rem;text-transform:uppercase;">Criterio</th></tr></thead><tbody>' +
    '<tr style="border-bottom:1px solid var(--border);"><td style="padding:8px 10px;font-weight:500;">Inatención (A)</td>' +
    '<td style="text-align:center;padding:8px 10px;font-weight:600;">' + d.totales.A.adulto + '/9</td>' +
    '<td style="text-align:center;padding:8px 10px;">' + d.totales.A.infancia + '/9</td>' +
    '<td style="padding:8px 10px;font-size:0.8rem;">Adulto: significativo si ≥5 · Infancia: ≥3 en cualquier dominio</td></tr>' +
    '<tr style="border-bottom:1px solid var(--border);"><td style="padding:8px 10px;font-weight:500;">Hiperactividad-Impulsividad (H/I)</td>' +
    '<td style="text-align:center;padding:8px 10px;font-weight:600;">' + d.totales.HI.adulto + '/9</td>' +
    '<td style="text-align:center;padding:8px 10px;">' + d.totales.HI.infancia + '/9</td>' +
    '<td style="padding:8px 10px;font-size:0.8rem;">Adulto: significativo si ≥5</td></tr></tbody></table>' +
    '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:10px;">' +
    '<div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--muted);margin-bottom:6px;">Presentación clínica (DSM-5)</div>' +
    '<div style="font-size:1.05rem;font-weight:700;color:' + badgeCol + ';">' + diva5Esc(pres.presentacion_completa) + '</div></div>' +
    '<p style="font-size:0.78rem;color:var(--muted);margin:0;">Infancia significativa (≥3 síntomas en A o H/I): <strong>' + (pres.infancia_significativa ? 'Sí' : 'No') + '</strong> · ' +
    'Criterio B (antes de 12 años): <strong>' + (d.criterio_B.antes_12 === 'si' ? 'Sí' : ('No' + (d.criterio_B.edad_inicio ? ' — inicio a los ' + d.criterio_B.edad_inicio + ' años' : ''))) + '</strong> · ' +
    'Disfunción ≥2 campos: adulto <strong>' + (d.disfuncion_2_campos.adulto === 'si' ? 'Sí' : 'No') + '</strong>, infancia <strong>' + (d.disfuncion_2_campos.infancia === 'si' ? 'Sí' : 'No') + '</strong></p>';
  document.getElementById('diva5-detalle').innerHTML = html;
  var narrative = 'En la entrevista DIVA-5 se registraron ' + d.totales.A.adulto + ' síntomas de inatención y ' + d.totales.HI.adulto + ' de hiperactividad-impulsividad en la edad adulta';
  narrative += ', y ' + d.totales.A.infancia + ' y ' + d.totales.HI.infancia + ' respectivamente en la infancia. ';
  narrative += 'La presentación clínica según DSM-5 es: ' + pres.presentacion_completa + '.';
  if (pres.infancia_significativa) narrative += ' En la infancia se cumple el criterio de síntomas significativos (≥3 en algún dominio antes de los 12 años).';
  document.getElementById('diva5-interp').textContent = narrative;
  document.getElementById('diva5-form').style.display = 'none';
  document.getElementById('diva5-resultado').style.display = 'block';
}

function guardarDIVA5() {
  if (!SESSION) return;
  var pacId = document.getElementById('diva5-paciente').value;
  var fecha = document.getElementById('diva5-fecha').value;
  if (!pacId) { toast('Seleccioná un paciente.', 'error'); return; }
  if (!window._diva5Data) { toast('Calculá el resultado antes de guardar.', 'error'); return; }
  var d = window._diva5Data;
  supaFetch('/rest/v1/psico_resultados', 'POST', {
    user_id: SESSION.user.id, paciente_id: pacId,
    test: 'DIVA-5', fecha: fecha,
    puntaje_total: d.totales.A.adulto + d.totales.HI.adulto,
    categoria: d.presentacion,
    datos: d
  }, SESSION.access_token).then(function() {
    window._diva5Data = null;
    cargarResultados();
    toast('✓ DIVA-5 guardado', 'success');
    var btns = document.querySelectorAll('.vista.active .btn-primary');
    if (btns.length) { btns[btns.length - 1].classList.add('btn-saved'); setTimeout(function() { btns[btns.length - 1].classList.remove('btn-saved'); }, 1500); }
  }).catch(function() { toast('Error al guardar', 'error'); });
}
