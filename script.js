/* Small data model for timeline, families, characters */
const timelineData = [
  { year: '1888', title: 'The First Rift', text: 'An early anomaly recorded near the caves. Strange entries in the logbooks.' },
  { year: '1921', title: 'The Project', text: 'Initial experiments and hush-hush meetings. Rumors circulated among families.' },
  { year: '1953', title: 'Disappearance', text: 'Several residents vanished. The town grew suspicious.' },
  { year: '1986', title: 'Incident', text: 'Radioactive readings and a locked facility. The first big loop.' },
  { year: '2019', title: 'Modern Day', text: 'A new generation stumbles into the past and future.' },
  { year: '2053', title: 'The Aftermath', text: 'Consequences echo through the timeline.' }
];

const families = [
  { name:'Kahnwald', desc:'A family affected by grief and secrets.' },
  { name:'Nielsen', desc:'A family with deep roots and difficult choices.' },
  { name:'Doppler', desc:'Tied to science and the power station.' },
  { name:'Tiedemann', desc:'Business and hidden agendas.' }
];

const characters = [
  { name:'Jonas', role:'Protagonist', desc:'A young man who tries to unravel the loop.' },
  { name:'Martha', role:'Mystery', desc:'Connected to Jonas in unexpected ways.' },
  { name:'Ulrich', role:'Investigator', desc:'Former policeman chasing clues.' },
  { name:'Charlotte', role:'Official', desc:'Works at the archive and tries to make sense of records.' }
];

/* build timeline items */
function buildTimeline(){
  const container = document.getElementById('timeline-items');
  timelineData.forEach((it, idx)=>{
    const div = document.createElement('div');
    div.className = 't-item';
    div.innerHTML = `<div class="t-year">${it.year}</div><div class="t-title">${it.title}</div><div class="t-snippet">${it.text.slice(0,80)}...</div>`;
    div.addEventListener('click', ()=> showDetail(it));
    container.appendChild(div);
  });
}

/* show detail panel */
function showDetail(item){
  const d = document.getElementById('timeline-detail');
  document.getElementById('detail-year').textContent = item.year + ' — ' + item.title;
  document.getElementById('detail-content').textContent = item.text;
  d.classList.remove('hidden');
}

/* close detail */
document.addEventListener('DOMContentLoaded', ()=>{
  buildTimeline();
  document.getElementById('close-detail').addEventListener('click', ()=>{
    document.getElementById('timeline-detail').classList.add('hidden');
  });

  // families
  const famWrap = document.getElementById('families-list');
  families.forEach(f=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `<h4>${f.name}</h4><p>${f.desc}</p>`;
    famWrap.appendChild(el);
  });

  // characters
  const charWrap = document.getElementById('characters-list');
  characters.forEach(c=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `<h4>${c.name}</h4><p><strong>${c.role}</strong> — ${c.desc}</p>`;
    charWrap.appendChild(el);
  });

  // language toggle (simple)
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      // placeholder — in a fuller build you'd swap text content by data-lang
      if(btn.dataset.lang === 'de') alert('DE language placeholder — add translations if desired');
    });
  });

  // keyboard accessibility: close detail with Escape
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') document.getElementById('timeline-detail').classList.add('hidden');
  });

  // small log
  console.log('Interactive dark guide loaded — timeline items:', timelineData.length);
});

