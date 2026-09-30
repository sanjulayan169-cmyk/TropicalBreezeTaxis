const DESTINATIONS=[{"id":"jaffna","name":"Jaffna","province":"Northern","tag":"CULTURE & HERITAGE","description":"Discover the northern peninsula through historic streets, coastal views and distinctive local culture.","attractions":"Jaffna Fort, Nallur Kandaswamy Temple, peninsula excursions","season":"Plan dates and local conditions with us","duration":"2–3 days","nearby":"Mannar","lat":9.6615,"lng":80.0255,"image":"/assets/jaffna.jpg","published":1},{"id":"trincomalee","name":"Trincomalee","province":"Eastern","tag":"COASTAL ESCAPES","description":"Turquoise water, palm-lined beaches and coastal journeys around the east coast.","attractions":"Uppuveli Beach, Nilaveli Beach, Fort Frederick","season":"Plan dates and local conditions with us","duration":"2–3 days","nearby":"Batticaloa","lat":8.5874,"lng":81.2152,"image":"/assets/trincomalee.jpg","published":1},{"id":"batticaloa","name":"Batticaloa","province":"Eastern","tag":"COASTAL ESCAPES","description":"Golden lagoon sunsets, peaceful waterfronts and a relaxed introduction to the eastern coast.","attractions":"Batticaloa Lagoon, Batticaloa Fort, Kallady Beach","season":"Plan dates and local conditions with us","duration":"1–2 days","nearby":"Trincomalee, Arugam Bay","lat":7.731,"lng":81.6747,"image":"/assets/batticaloa.jpg","published":1},{"id":"mannar","name":"Mannar (Mannaram)","province":"Northern","tag":"CULTURE & HERITAGE","description":"Explore an island landscape of historic fort walls, open lagoons and quiet coastal roads.","attractions":"Mannar Fort, island coast, causeway views","season":"Plan dates and local conditions with us","duration":"1–2 days","nearby":"Jaffna, Anuradhapura","lat":8.981,"lng":79.9044,"image":"/assets/mannar.jpg","published":1},{"id":"arugam-bay","name":"Arugam Bay","province":"Eastern","tag":"COASTAL ESCAPES","description":"Surf breaks, colourful fishing boats and easy days on Sri Lanka’s east coast.","attractions":"Arugam Bay Beach, Main Point surf break, Pottuvil Lagoon","season":"May–September","duration":"2–3 days","nearby":"Pottuvil","lat":6.8404,"lng":81.8368,"image":"/assets/arugam-bay.jpg","published":1},{"id":"ella","name":"Ella","province":"Uva","tag":"HILL COUNTRY","description":"Misty mountains, tea trails and the iconic Nine Arch Bridge.","attractions":"Nine Arch Bridge, Little Adam’s Peak, Ravana Falls","season":"January–April","duration":"2–3 days","nearby":"Nuwara Eliya","lat":6.8667,"lng":81.0466,"image":"/assets/ella.webp","published":1},{"id":"sigiriya","name":"Sigiriya","province":"Central","tag":"CULTURE & HERITAGE","description":"Ancient wonders rising above a sea of green.","attractions":"Lion Rock, Pidurangala, village trails","season":"January–April","duration":"1–2 days","nearby":"Dambulla","lat":7.957,"lng":80.76,"image":"/assets/sigiriya.webp","published":1},{"id":"galle","name":"Galle","province":"Southern","tag":"COASTAL ESCAPES","description":"Wander the fort, follow the ocean and slow down.","attractions":"Galle Fort, lighthouse, Unawatuna","season":"December–April","duration":"1–2 days","nearby":"Mirissa","lat":6.032,"lng":80.217,"image":"/assets/galle.webp","published":1},{"id":"kandy","name":"Kandy","province":"Central","tag":"CULTURE & HERITAGE","description":"A lakeside city at the gateway to the hill country.","attractions":"Temple of the Tooth, Kandy Lake, Peradeniya gardens","season":"January–April","duration":"1–2 days","nearby":"Nuwara Eliya","lat":7.29,"lng":80.633,"image":"/assets/kandy.webp","published":1},{"id":"nuwara-eliya","name":"Nuwara Eliya","province":"Central","tag":"HILL COUNTRY","description":"Cool mountain air and rolling tea estates.","attractions":"Tea estates, Gregory Lake, Horton Plains","season":"January–April","duration":"2 days","nearby":"Ella","lat":6.9497,"lng":80.789,"image":"/assets/nuwara-eliya.webp","published":1},{"id":"mirissa","name":"Mirissa","province":"Southern","tag":"COASTAL ESCAPES","description":"Palm-fringed bays and easy days by the Indian Ocean.","attractions":"Coconut Tree Hill, beaches, harbour","season":"December–April","duration":"2–3 days","nearby":"Galle","lat":5.948,"lng":80.459,"image":"/assets/mirissa.webp","published":1},{"id":"yala","name":"Yala","province":"Southern / Uva","tag":"WILD SRI LANKA","description":"Discover the island’s wild side on a safari escape.","attractions":"National park safari, wildlife, coastal landscapes","season":"February–July; check park opening","duration":"1–2 days","nearby":"Ella","lat":6.372,"lng":81.519,"image":"/assets/yala.webp","published":1},{"id":"bentota","name":"Bentota","province":"Southern","tag":"COASTAL ESCAPES","description":"Golden beaches, river adventures and a slower rhythm.","attractions":"Bentota Beach, river cruises, gardens","season":"December–April","duration":"2 days","nearby":"Galle","lat":6.421,"lng":79.998,"image":"/assets/bentota.webp","published":1},{"id":"anuradhapura","name":"Anuradhapura","province":"North Central","tag":"CULTURE & HERITAGE","description":"Sacred stupas and stories of Sri Lanka’s ancient capital.","attractions":"Sacred city, Sri Maha Bodhi, Ruwanwelisaya","season":"January–September; plan for heat","duration":"1–2 days","nearby":"Sigiriya","lat":8.312,"lng":80.403,"image":"/assets/anuradhapura.webp","published":1},{"id":"colombo","name":"Colombo","province":"Western","tag":"CITY DISCOVERIES","description":"A lively introduction to the island, from markets to sunset.","attractions":"Galle Face, Pettah, Gangaramaya","season":"December–March","duration":"1–2 days","nearby":"Bentota","lat":6.927,"lng":79.861,"image":"/assets/colombo.webp","published":1}];
'use strict';
const root = new URL(document.querySelector('meta[name="site-root"]').content, location.href);
const local = path => { let clean = path.replace(/^\//,''); if (!clean || clean.endsWith('/')) clean += 'index.html'; return new URL(clean, root).href; };
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const whatsapp = 'https://wa.me/94712018185';
function prepared(container, text, subject='Journey enquiry – Tropical Breeze') {
 container.replaceChildren();
 const heading=document.createElement('h3');heading.textContent='Your message is ready.';
 const pre=document.createElement('pre');pre.textContent=text;
 const row=document.createElement('div');row.className='button-row';
 for(const [label,url] of [['Open WhatsApp',whatsapp+'?text='+encodeURIComponent(text)],['Open Gmail','https://mail.google.com/mail/?view=cm&fs=1&to=pradeepdesilwa488@gmail.com&su='+encodeURIComponent(subject)+'&body='+encodeURIComponent(text)]]){const a=document.createElement('a');a.textContent=label;a.href=url;a.className='action';a.target='_blank';a.rel='noopener noreferrer';row.append(a)}
 const note=document.createElement('p');note.textContent='Review and send the message in the app that opens. Your journey is confirmed only after we agree the details directly.';
 container.append(heading,pre,row,note);container.hidden=false;
}
// Native scrolling is lightweight and supports arrows, keyboard, touch, and trackpads.
for(const carousel of document.querySelectorAll('.home-destination-carousel')){
 const viewport=carousel.querySelector('[data-slot="carousel-content"]');
 const prev=carousel.querySelector('[data-slot="carousel-previous"]'),next=carousel.querySelector('[data-slot="carousel-next"]');
 viewport.tabIndex=0;viewport.setAttribute('aria-label','Swipe through Sri Lanka destinations');
 const update=()=>{prev.disabled=viewport.scrollLeft<3;next.disabled=viewport.scrollLeft+viewport.clientWidth>=viewport.scrollWidth-3};
 const move=direction=>viewport.scrollBy({left:direction*(carousel.querySelector('.destination-slide')?.getBoundingClientRect().width||viewport.clientWidth),behavior:reduced()?'instant':'smooth'});
 prev.onclick=()=>move(-1);next.onclick=()=>move(1);
 viewport.addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft'].includes(e.key)){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}});
 viewport.addEventListener('scroll',update,{passive:true});new ResizeObserver(update).observe(viewport);update();
}
const menuTrigger=document.querySelector('[aria-label="Open navigation"]');
if(menuTrigger){const dialog=document.createElement('dialog');dialog.className='static-menu';dialog.innerHTML='<button type="button" class="action">Close menu ×</button><nav aria-label="Mobile navigation">'+[['Home',''],['About','about/'],['Services','services/'],['Vehicles','vehicles/'],['Destinations','destinations/'],['Contact','contact/'],['Plan a journey','booking/']].map(([label,path])=>`<a href="${local(path)}">${label}</a>`).join('')+'</nav>';document.body.append(dialog);menuTrigger.onclick=()=>{dialog.showModal();menuTrigger.setAttribute('aria-expanded','true')};dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('close',()=>menuTrigger.setAttribute('aria-expanded','false'));}
for(const form of document.querySelectorAll('.journey-search')){
 form.action=local('booking/'); form.querySelector('input[type="date"]').min=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Colombo'}).format(new Date());
 for(const tab of form.querySelectorAll('[role="tab"]')){tab.tabIndex=0;tab.onclick=()=>{for(const t of form.querySelectorAll('[role="tab"]')){t.setAttribute('aria-selected',String(t===tab));t.dataset.state=t===tab?'active':'inactive'}form.elements.service.value=tab.textContent.trim()};}
}
const booking=document.querySelector('#static-booking');
if(booking){
 const query=new URLSearchParams(location.search);
 const fields=[['Your name','name','text'],['Phone / WhatsApp','phone','tel'],['Pickup location','pickup','text'],['Drop-off location','destination','text'],['Pickup date','date','date'],['Pickup time (Sri Lanka time)','time','time'],['Passengers','passengers','number'],['Number of bags','luggage','number']];
 booking.innerHTML='<form class="form-stack"><div class="form-grid">'+fields.map(([label,name,type])=>`<label class="field"><span>${label}</span><input name="${name}" type="${type}" ${type==='number'?`min="${name==='luggage'?0:1}" max="50"`:''} required></label>`).join('')+'<label class="field"><span>Service</span><select name="service"><option>Private transfer</option><option>Airport transfer</option><option>Day trip</option><option>Multi-day tour</option></select></label><label class="field"><span>Vehicle type</span><select name="vehicle" required><option value="">Choose vehicle type</option><option value="Car">Car</option><option value="Flat Roof Van">Flat Roof Van (6 passengers)</option><option value="High Roof Van">High Roof Van (9 passengers)</option></select></label></div><label class="field"><span>Flight number, stops or special requests</span><textarea name="notes" rows="4" maxlength="1500"></textarea></label><button class="action" type="submit">Prepare my enquiry →</button></form><div class="enquiry-draft" aria-live="polite" hidden></div>';
 const form=booking.querySelector('form'),result=booking.querySelector('.enquiry-draft');
 for(const [,name] of fields)form.elements[name].value=query.get(name)||({time:'09:00',passengers:'2',luggage:'2'}[name]||'');
 form.elements.date.min=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Colombo'}).format(new Date());
 const service=query.get('service');if([...form.elements.service.options].some(o=>o.value===service))form.elements.service.value=service;
 const vehicle={prius:'Car',insight:'Car',hiace:'Flat Roof Van','hiace-large':'High Roof Van'}[query.get('vehicleId')] || query.get('type'); if(['Car','Flat Roof Van','High Roof Van'].includes(vehicle))form.elements.vehicle.value=vehicle;
 form.addEventListener('input',()=>result.hidden=true);
 form.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(form));prepared(result,['Hello Tropical Breeze! I would like to arrange a journey.',...Object.entries(v).map(([k,v])=>k.charAt(0).toUpperCase()+k.slice(1)+': '+v),'Pickup time is Sri Lanka time. Please confirm availability and discuss the fare. Payment after drop-off.'].join('\n'))};
}
const contact=document.querySelector('#contact-enquiry');if(contact){const result=document.createElement('div');result.className='enquiry-draft';result.setAttribute('aria-live','polite');result.hidden=true;contact.after(result);contact.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(contact));prepared(result,`Hello Tropical Breeze!\nName: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone}\n\n${v.message}`,v.subject)};contact.addEventListener('input',()=>result.hidden=true)}
const filters=document.querySelector('.collection-filters');if(filters)for(const b of filters.querySelectorAll('button'))b.onclick=()=>{const chosen=b.textContent.trim().toLowerCase();let count=0;for(const card of document.querySelectorAll('.destination-editorial-card')){card.hidden=chosen!=='all places'&&card.querySelector('.editorial-category').textContent.trim().toLowerCase()!==chosen;if(!card.hidden)count++}for(const x of filters.querySelectorAll('button'))x.setAttribute('aria-pressed',String(x===b));document.querySelector('.collection-toolbar>span').textContent=count+' destinations'};
const vehicleFilters=document.querySelector('.filters');if(vehicleFilters){const refresh=()=>{const selects=vehicleFilters.querySelectorAll('select');const capacity=Number(vehicleFilters.querySelector('input[type="number"]').value)||1;let count=0;for(const card of document.querySelectorAll('.vehicle-card')){card.hidden=Boolean((selects[0].value&&selects[0].value!==card.dataset.type)||Number(card.dataset.capacity)<capacity||(selects[1].value&&selects[1].value!==card.dataset.ac)||(selects[2].value&&selects[2].value!==card.dataset.transmission)||(vehicleFilters.querySelector('input[type=checkbox]').checked&&card.dataset.available!=='1'));if(!card.hidden)count++}const label=vehicleFilters.nextElementSibling;if(label)label.textContent=count+' vehicles match your journey';const empty=document.querySelector('#vehicle-empty');if(empty)empty.hidden=count>0};vehicleFilters.addEventListener('input',refresh);vehicleFilters.addEventListener('change',refresh)}
// The island overview is drawn from bundled public-domain geographic data.
// No tile server, API key, geolocation or cross-origin requests are required.
for (const shell of document.querySelectorAll('.island-explorer')) {
  const canvas = shell.querySelector('.island-map');
  const list = shell.querySelector('.map-destinations');
  const search = shell.querySelector('.map-search input');
  const buttons = [...list.querySelectorAll('button')];
  const fitButton = shell.querySelector('[aria-label="Show all Sri Lanka destinations"]');
  const expand = shell.querySelector('[aria-label="Expand map"]');
  const status = document.createElement('p');
  status.className = 'map-recovery'; status.setAttribute('role', 'status'); status.hidden = true;
  canvas.parentElement.after(status);
  let selected = DESTINATIONS.find(d => d.id === 'colombo') || DESTINATIONS[0];
  let map, markers = {}, initialised = false;
  const bounds = [[5.77, 79.58], [9.96, 82.02]];
  const showAll = () => map?.fitBounds(bounds, { padding: [40, 35], animate: false });
  const highlight = () => {
    for (const [id, marker] of Object.entries(markers)) {
      marker.getElement()?.classList.toggle('is-active', id === selected.id);
      marker.setZIndexOffset(id === selected.id ? 1000 : 0);
    }
  };
  function choose(d, move = true) {
    selected = d;
    buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(DESTINATIONS[i].id === d.id)));
    shell.querySelector('.map-selection').innerHTML = `<img src="${local(d.image)}" alt="${escapeHTML(d.name)}" loading="lazy" width="160" height="120"><div><p class="eyebrow">${escapeHTML(d.province)}</p><h3>${escapeHTML(d.name)}</h3><p>${escapeHTML(d.description)}</p><div class="button-row"><a class="action" href="${local('booking/')}?destination=${encodeURIComponent(d.name)}">Book a ride →</a><a class="text-link" href="${local('destinations/'+d.id+'/')}">Explore ↗</a></div><a class="map-directions" href="https://www.google.com/maps/dir/?api=1&destination=${d.lat},${d.lng}" target="_blank" rel="noopener noreferrer">Directions to ${escapeHTML(d.name)} ↗</a></div>`;
    if (map) {
      if (move) map.setView([d.lat, d.lng], Math.max(map.getZoom(), 8), { animate: !reduced() });
      highlight();
      markers[d.id]?.openTooltip();
    }
  }
  buttons.forEach((b, i) => b.addEventListener('click', () => choose(DESTINATIONS[i])));
  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase(); let count = 0;
    buttons.forEach((b, i) => {
      const d = DESTINATIONS[i];
      const matches = (d.name+' '+d.province+' '+d.tag).toLowerCase().includes(term);
      b.hidden = !matches; if (matches) count++;
      if (map && markers[d.id]) {
        if (matches && !map.hasLayer(markers[d.id])) markers[d.id].addTo(map);
        else if (!matches && map.hasLayer(markers[d.id])) map.removeLayer(markers[d.id]);
      }
    });
    shell.querySelector('.map-result-count').textContent = count ? `${count} of ${DESTINATIONS.length} destinations` : 'No destinations match. Try another place or region.';
    highlight();
  });
  function start() {
    if (initialised) return;
    try {
      const L = window.L;
      if (!L || !window.TROPICAL_MAP_DATA) throw new Error('Missing local map files');
      map = L.map(canvas, { scrollWheelZoom: false, zoomAnimation: false, fadeAnimation: !reduced(), markerZoomAnimation: false, minZoom: 6, maxZoom: 11, zoomSnap: .25, zoomDelta: .5, maxBounds: [[4.3,77.2],[11.4,84.3]], maxBoundsViscosity: .8 });
      L.geoJSON(window.TROPICAL_MAP_DATA, {
        interactive: false,
        style: feature => ({ color: feature.properties.name === 'Sri Lanka' ? '#6b9985' : '#b5c7bb', weight: 1.5, fillColor: feature.properties.name === 'Sri Lanka' ? '#f3f5e9' : '#e5ece5', fillOpacity: 1 })
      }).addTo(map);
      map.attributionControl.setPrefix(false);
      map.attributionControl.addAttribution('Map data: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener noreferrer">Natural Earth</a>');
      L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);
      for (const [i, d] of DESTINATIONS.entries()) {
        const icon = L.divIcon({ html: `<span class="destination-pin">${String(i+1).padStart(2,'0')}</span>`, className: 'destination-marker', iconSize: [34, 42], iconAnchor: [17, 40] });
        const marker = L.marker([d.lat,d.lng], { icon, title: d.name, alt: d.name, keyboard: true, riseOnHover: true }).addTo(map);
        marker.bindTooltip(escapeHTML(d.name), { direction: 'top', offset: [0,-34], className: 'destination-map-label', opacity: 1 });
        marker.on('click', () => choose(d));
        markers[d.id] = marker;
      }
      map.on('zoomend', () => { highlight(); markers[selected.id]?.openTooltip(); });
      showAll(); highlight(); markers[selected.id]?.openTooltip();
      if ('ResizeObserver' in window) new ResizeObserver(() => map.invalidateSize({ animate: false })).observe(canvas);
      fitButton.disabled = false; initialised = true; status.hidden = true;
      search.dispatchEvent(new Event('input'));
      canvas.dataset.mapReady = 'true';
    } catch (error) {
      if (map) { map.remove(); map = null; markers = {}; }
      status.hidden = false;
      status.textContent = 'The map files could not load. You can still choose a destination below or open directions.';
      const retry = document.createElement('button'); retry.type = 'button'; retry.className = 'text-link'; retry.textContent = 'Try map again'; retry.onclick = start; status.append(' ', retry);
    }
  }
  fitButton.onclick = () => { search.value = ''; search.dispatchEvent(new Event('input')); showAll(); };
  expand.onclick = () => {
    const expanded = shell.classList.toggle('map-expanded');
    expand.setAttribute('aria-pressed', String(expanded)); expand.setAttribute('aria-label', expanded ? 'Exit expanded map' : 'Expand map');
    document.body.classList.toggle('map-open', expanded);
    if (expanded) start();
    requestAnimationFrame(() => { map?.invalidateSize({ animate: false }); showAll(); });
  };
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && shell.classList.contains('map-expanded')) { expand.click(); expand.focus(); } });
  choose(selected, false);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) { observer.disconnect(); start(); } }, { rootMargin: '250px' });
    observer.observe(canvas);
  } else start();
}

if(!reduced()){const observer=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}],{duration:650,delay:Math.min(i*65,195),fill:'backwards',easing:'ease-out'});observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.section-heading,.vehicle-card,.destination-editorial-card,.service-card,.hero-content>*').forEach(n=>observer.observe(n))}
