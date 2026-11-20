(() => {
  'use strict';
  const trip = window.TRIP;
  const main = document.querySelector('#content');
  const dayNav = document.querySelector('#day-nav');
  const sheet = document.querySelector('#detail-sheet');
  const icons = {
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    calendar:'<rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 3v4m8-4v4M4 11h16m-11 4h1m4 0h1m-6 3h1"/>',
    pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    folder:'<path d="M3 8V6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"/><path d="M8 12h8m-8 4h5"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    chevron:'<path d="m9 5 7 7-7 7"/>',
    close:'<path d="m6 6 12 12M6 18 18 6"/>',
    car:'<path d="m5 8 2-5h10l2 5M3 9h18v9H3zM5 18v3m14-3v3M6 13h2m8 0h2"/>',
    bed:'<path d="M3 21V7m18 14v-9H3m3 0V7h5v5m0-5h7a3 3 0 0 1 3 3v2M3 18h18"/>',
    food:'<path d="M5 3v7m3-7v7M3 3v7a3 3 0 0 0 6 0V3M6 13v8M17 3c-3 4-3 8 0 9h3V3m0 9v9"/>',
    plane:'<path d="m3 10 7 2 5-8c1-2 4-2 3 1l-3 8 6 4-1 2-7-2-3 4-2-1 1-5-7-3Z"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    list:'<path d="M9 6h12M9 12h12M9 18h12M3 6h1m-1 6h1m-1 6h1"/>',
    mountain:'<path d="m2 20 8-15 5 9 3-5 5 11H2ZM7 11l3 2 3-2"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>'
  };
  const icon = (name,cls='') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sun}</svg>`;
  const escape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const short = date => `${Number(date.slice(5,7))}/${Number(date.slice(8,10))}`;
  const week = date => new Intl.DateTimeFormat('zh-CN',{weekday:'short',timeZone:'Pacific/Honolulu'}).format(new Date(`${date}T12:00:00-10:00`));
  const dayIndex = date => trip.days.findIndex(day=>day.date===date);
  const mapURL = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const external = (url,label,cls='text-link') => `<a class="${cls}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only">（新窗口）</span></a>`;
  const mapLink = (query,label='打开地点地图',cls='button primary') => external(mapURL(query),`${icon('pin')}${escape(label)}`,cls);
  const badge = (text,confirmed=false) => `<span class="badge${confirmed?' confirmed':''}">${escape(text)}</span>`;
  let lastDay = trip.days[0];
  let currentView = 'overview';
  let activeStop = null;
  let sheetOrigin = null;
  let mapFilter = 'all';
  let mapQuery = '';
  const eventIcons = {'交通':'car','住宿':'bed','餐饮':'food','徒步':'mountain','自然':'mountain','散步':'sun','购物':'folder','文化':'sun','体验':'sun','休息':'sun'};
  document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));

  function hotelCard(h,checkout=false) {
    return `<article class="stay-card"><div class="card-kicker">${icon('bed')} ${checkout?'今日退房':'今晚住这里'} ${badge(h.query?'暂定':'待选择')}</div><h3>${escape(h.name)}</h3><p>${escape(h.area)} · ${short(h.in)}–${short(h.out)} · ${h.nights} 晚</p><p class="muted">${escape(h.note)}</p>${h.query?mapLink(h.query,'酒店地图','text-link'):''}</article>`;
  }
  function overview() {
    main.innerHTML = `<section class="hero"><div class="hero-copy"><p class="trip-dates">2026.12.23 — 2027.01.01</p><p class="aloha">Aloha,</p><h1>我们去夏威夷。</h1><p class="hero-intro">海风、火山，和慢一点的年末。</p><a class="button primary" href="#day-${lastDay.date}">查看每日行程</a></div><figure class="hero-art"><img src="assets/island-route.svg?v=20261119" alt="海岛路线示意图，欧胡飞往 Hilo，再到 Kona。非导航地图。" width="700" height="540"><a class="island-link island-oahu" href="#day-2026-12-23" aria-label="查看欧胡行程，从12月23日开始"><span class="island-pin"></span><span>欧胡</span></a><a class="island-link island-hilo" href="#day-2026-12-28" aria-label="查看大岛东岸 Hilo 行程，从12月28日开始"><span class="island-pin"></span><span>Hilo</span></a><a class="island-link island-kona" href="#day-2026-12-30" aria-label="查看大岛西岸 Kona 行程，从12月30日开始"><span class="island-pin"></span><span>Kona</span></a></figure></section>
      <section class="journey-section"><div class="section-heading"><h2>这一路，慢慢走</h2><a class="text-link" href="#day-${lastDay.date}">打开行程</a></div><div class="chapters">${[
        {name:'欧胡',en:'Oʻahu',region:'oahu',days:trip.days.slice(0,5)},
        {name:'大岛东岸',en:'Hilo',region:'hilo',days:trip.days.slice(5,7)},
        {name:'大岛西岸',en:'Kona',region:'kona',days:trip.days.slice(7)}
      ].map(c=>`<section class="chapter ${c.region}"><h3>${c.en}<span>${c.name}</span></h3><div class="chapter-days">${c.days.map(day=>`<a class="journey-day" href="#day-${day.date}"><time>${short(day.date)}<small>${week(day.date)}</small></time><strong>${escape(day.title)}</strong></a>`).join('')}</div></section>`).join('')}</div></section>
      <section class="overview-note"><p>往返机票已预订，岛间航班、住宿和活动继续补齐。</p><a class="text-link" href="#bookings">查看出行资料</a></section>`;
  }
  function navigation(day) {
    dayNav.innerHTML = `<div class="date-rail">${trip.days.map(d=>`<a href="#day-${d.date}" ${d===day?'aria-current="date"':''} aria-label="${short(d.date)} ${week(d.date)}，${escape(d.area)}"><b>${short(d.date)}</b><span>${week(d.date)}</span></a>`).join('')}</div>`;
    requestAnimationFrame(()=>{
      const rail=dayNav.querySelector('.date-rail'),active=rail?.querySelector('[aria-current]');
      if(active)rail.scrollLeft=Math.max(0,active.offsetLeft-rail.offsetLeft-(rail.clientWidth-active.offsetWidth)/2);
    });
  }
  function dayView(day) {
    const i=dayIndex(day.date);
    main.innerHTML = `<header class="day-heading"><div class="day-heading-top"><p>${escape(day.area)}</p><button class="pocket-trigger" data-pocket aria-haspopup="dialog">${icon('folder')}吃住交通</button></div><h1>${escape(day.title)}</h1><p class="draft-note">${day.events.some(e=>e.flight!==undefined&&trip.flights[e.flight].confirmed)?'机票已预订 · 其余安排待确认':'行程草案 · 时间与预订待确认'}</p></header>
      <ol class="stop-list" aria-label="${short(day.date)} 行程安排">${day.events.map((e,index)=>`<li class="stop-item${e.optional?' optional':''}"><button class="stop-button" data-stop="${index}" aria-haspopup="dialog"><time>${escape(e.time.replace(' → ','–').split(' · ')[0])}</time><span class="stop-title">${escape(e.title)}${e.optional?'<small>可选</small>':''}</span></button></li>`).join('')}</ol>
      <nav class="day-pagination" aria-label="前后日期">${i>0?`<a href="#day-${trip.days[i-1].date}">前一天 · ${short(trip.days[i-1].date)}</a>`:'<a href="#overview">旅程总览</a>'}${i<trip.days.length-1?`<a href="#day-${trip.days[i+1].date}">后一天 · ${short(trip.days[i+1].date)}</a>`:'<a href="#overview">旅程总览</a>'}</nav>`;
  }
  function flightCard(f) {
    return `<article class="flight-card"><div class="card-kicker">${icon('plane')} ${short(f.date)} · ${escape(f.name)} ${badge(f.confirmed?'已预订':'候选',f.confirmed)}</div><p class="flight-airline">${escape(f.airline)}${f.cabin?' · '+escape(f.cabin):''}</p><div class="flight-route"><div><strong>${f.depart}</strong><b>${f.from}</b><small>${escape(f.depZone)}</small></div><span class="flight-path">${icon('plane')}</span><div><strong${f.arrive?'':' class="pending-time"'}>${escape(f.arrive || '待补充')}</strong><b>${f.to}</b><small>${escape(f.arrZone)}</small></div></div><p>${escape(f.note)}</p></article>`;
  }
  function bookingsView() {
    main.innerHTML=`<header class="page-heading"><h1>出行资料</h1><p>航班、住宿、租车和待确认事项。</p></header><div class="status-note">${icon('clock')}<p><strong>往返机票已预订，岛间航班仍为候选。</strong><br>这里记录计划，不含订单号、个人证件或预订凭证。</p></div><div class="section-heading"><h2>航班</h2><span class="section-note">两端各用当地时间</span></div><div class="flights-grid">${trip.flights.map(flightCard).join('')}</div><div class="section-heading spaced"><h2>住宿</h2></div><div class="hotels-grid">${trip.hotels.map(h=>`<article class="booking-hotel"><div class="card-kicker">${escape(h.area)} ${badge(h.query?'暂定':'待选')}</div><h3>${escape(h.name)}</h3><p class="stay-dates">${short(h.in)} 入住 <span>—</span> ${short(h.out)} 退房 <b>${h.nights} 晚</b></p><p>${escape(h.note)}</p>${h.query?mapLink(h.query,'酒店地图','text-link'):''}</article>`).join('')}</div><div class="section-heading spaced"><h2>租车</h2></div><div class="rentals-grid">${trip.rentals.map(r=>`<article class="rental-card">${icon('car')}<h3>${escape(r.title)}</h3><p><b>取</b>${escape(r.start)}</p><p><b>还</b>${escape(r.end)}</p><small>${escape(r.note)}</small></article>`).join('')}</div><section class="confirmation-section"><div class="section-heading"><div><h2>待确认事项</h2></div><button class="text-button" id="expand-pending">展开全部</button></div><p class="section-description">先定古兰尼场次、观星团接送和 Kona 住宿，再调整周边安排。</p>${trip.days.map(d=>`<details class="confirmation-day"><summary><span><b>${short(d.date)}</b>${escape(d.title)}</span><small>${d.todo.length} 项</small></summary><ul>${d.todo.map(t=>`<li>${escape(t)}</li>`).join('')}</ul><a class="text-link" href="#day-${d.date}">回到这天行程 </a></details>`).join('')}</section>`;
  }
  function placesView() {
    main.innerHTML=`<header class="page-heading"><h1>行程地图</h1><p>找一个地点，或按地区浏览。</p></header><div class="place-tools"><label class="search-label">${icon('pin')}<input type="search" id="place-search" placeholder="搜餐厅、酒店、景点…" aria-label="搜索行程地点" value="${escape(mapQuery)}"></label><div class="filter-group" aria-label="筛选地区">${[['all','全部'],['oahu','欧胡'],['hilo','Hilo'],['kona','Kona']].map(([v,n])=>`<button data-region="${v}" aria-pressed="${mapFilter===v}">${n}</button>`).join('')}</div></div><div id="place-results" aria-live="polite"></div><p class="map-disclaimer">地图入口使用地点名称搜索；骑马场、观鲸码头等尚未确定的集合点，确认后再加入。路线示意图不用于导航。</p>`;
    placeResults();
  }
  function placeResults() {
    const places=[];
    for(const d of trip.days) for(const e of d.events) if(e.place) {
      const found=places.find(p=>p.query===e.place);
      if(found) {if(!found.dates.includes(d.date))found.dates.push(d.date);}
      else places.push({query:e.place,title:e.title,region:d.region,type:e.type,dates:[d.date]});
    }
    const filtered=places.filter(p=>(mapFilter==='all'||p.region===mapFilter)&&`${p.title} ${p.query} ${p.type}`.toLowerCase().includes(mapQuery.toLowerCase().trim()));
    document.querySelector('#place-results').innerHTML=`<div class="results-count">${filtered.length} 个地点 <button class="text-button" id="download-places">下载地图清单 </button></div>${filtered.length?`<div class="place-grid">${filtered.map(p=>`<article class="place-card"><div class="card-kicker"><span class="region-dot ${p.region}"></span>${{oahu:'欧胡',hilo:'Hilo',kona:'Kona'}[p.region]} · ${escape(p.type)}</div><h2>${escape(p.title)}</h2><p class="place-query">${escape(p.query)}</p><div class="place-bottom"><span>${p.dates.map(d=>`<a href="#day-${d}">${short(d)}</a>`).join(' · ')}</span>${mapLink(p.query,'地图','text-link')}</div></article>`).join('')}</div>`:`<div class="empty-state">${icon('pin')}<h2>还没找到这个地点</h2><p>试试英文名称，或换一个地区。</p><button class="button secondary" id="reset-search">清除筛选</button></div>`}`;
  }
  function showStop(index,opening=false) {
    const e=lastDay.events[index];
    if(!e)return;
    activeStop=index;
    const confirmedFlight=e.flight!==undefined&&trip.flights[e.flight].confirmed;
    if(opening)sheetOrigin=document.activeElement;
    document.querySelector('.sheet-content').innerHTML=`<div class="sheet-handle" aria-hidden="true"></div><div class="dialog-top"><p class="eyebrow">${short(lastDay.date)} ${week(lastDay.date)}</p><button class="icon-button" data-close="sheet" aria-label="关闭地点详情">${icon('close')}</button></div><div class="sheet-body"><div class="sheet-meta">${icon(e.flight!==undefined?'plane':eventIcons[e.type])}<span>${escape(e.type)}</span>${badge(confirmedFlight?'已预订':e.optional?'可选 · 待核实':'计划 · 待确认',confirmedFlight)}</div><h2 id="sheet-title">${escape(e.title)}</h2><p class="sheet-time">${icon('clock')}${escape(e.time)}</p><p class="sheet-description">${escape(e.text)}</p>${e.flight!==undefined?flightCard(trip.flights[e.flight]):''}<section class="sheet-notes"><h3>安排细节</h3><ul>${e.notes.map(n=>`<li>${escape(n)}</li>`).join('')}</ul></section>${e.place?`<div class="sheet-map">${mapLink(e.place)}<p>${escape(e.place)}</p></div>`:e.flight!==undefined?'':'<p class="unmapped-note">'+(e.type==='交通'||e.type==='体验'?'集合地点或具体运营商尚未确定，确认后补地图入口。':'这站暂不需要固定地图入口。')+'</p>'}</div><nav class="sheet-pagination" aria-label="前后站点"><button data-step="-1" ${index===0?'disabled':''}>上一站</button><span>${index+1} / ${lastDay.events.length}</span><button data-step="1" ${index===lastDay.events.length-1?'disabled':''}>下一站</button></nav>`;
    if(opening)sheet.showModal();
    else sheet.querySelector('[data-close="sheet"]').focus({preventScroll:true});
    sheet.scrollTop=0;
  }
  function showPocket() {
    sheetOrigin=document.activeElement;
    activeStop=null;
    const d=lastDay,h=trip.hotels.find(h=>h.id===d.hotel),out=trip.hotels.find(h=>h.id===d.checkout);
    const flight=trip.flights.find(f=>f.date===d.date&&f.to==='SFO');
    const homeCard=flight?`<div class="stay-card"><h3>今晚回家</h3><p>${escape(flight.airline)} · ${escape(flight.depart)} 从 KOA 起飞（HST）。到达时间待补充。</p></div>`:'';
    document.querySelector('.sheet-content').innerHTML=`<div class="sheet-handle" aria-hidden="true"></div><div class="dialog-top"><p class="eyebrow">${short(d.date)} ${week(d.date)}</p><button class="icon-button" data-close="sheet" aria-label="关闭今日随手查">${icon('close')}</button></div><div class="sheet-body pocket-body"><h2 id="sheet-title">今天的吃、住、行</h2><div class="transport-line">${icon('car')}<p>${escape(d.transport)}</p></div><div class="meal-list">${Object.entries(d.meals).map(([k,v])=>`<div><span>${{breakfast:'早',lunch:'午',dinner:'晚'}[k]}</span><p>${escape(v)}</p></div>`).join('')}</div>${h?hotelCard(h):homeCard}${out?`<p class="checkout-note">${icon('bed')} 今日退房：${escape(out.name)}</p>`:''}<section class="sheet-notes"><h3>这一天，待确认</h3><ul>${d.todo.map(t=>`<li>${escape(t)}</li>`).join('')}</ul></section><p class="unmapped-note">预订状态以各项标记为准，其余安排待确认。</p></div>`;
    sheet.showModal();sheet.scrollTop=0;
  }
  function downloadPlaces() {
    const rows=[['名称','地点搜索','日期','地区','状态']];
    trip.days.forEach(d=>d.events.filter(e=>e.place).forEach(e=>rows.push([e.title,e.place,d.date,d.area,'候选 · 未确认预订'])));
    const csv='\uFEFF'+rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='hawaii-2026-places.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    document.querySelector('#announcement').textContent='地图清单已生成，包含地点、日期与候选状态。';
  }
  function render(fromNavigation=false) {
    const hash=location.hash.slice(1);
    const day=trip.days.find(d=>hash===`day-${d.date}`);
    currentView=day?'days':['places','bookings'].includes(hash)?hash:'overview';
    if(day)lastDay=day;
    if(sheet.open)sheet.close();
    document.body.dataset.view=currentView;
    dayNav.hidden=currentView!=='days';
    document.querySelectorAll('.view-nav [data-view]').forEach(a=>{
      const journey=currentView==='overview'||currentView==='days';
      if(a.dataset.view==='journey')a.href=journey?'#overview':`#day-${lastDay.date}`;
      if(a.dataset.view===(journey?'journey':currentView))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    if(currentView==='days'){navigation(lastDay);dayView(lastDay);}else if(currentView==='places')placesView();else if(currentView==='bookings')bookingsView();else overview();
    document.title=`${currentView==='days'?short(lastDay.date)+' '+lastDay.title:{overview:'一起去看海',places:'地点地图',bookings:'出行资料'}[currentView]} · 夏威夷 2026`;
    if(fromNavigation){window.scrollTo({top:0,behavior:'instant'});main.focus({preventScroll:true});}
  }
  document.addEventListener('click',event=>{
    const t=event.target;
    if(t.closest('.skip-link')){event.preventDefault();main.focus();main.scrollIntoView({block:'start'});return;}
    if(t.closest('[data-pocket]'))showPocket();
    const stop=t.closest('[data-stop]');if(stop)showStop(Number(stop.dataset.stop),true);
    const close=t.closest('[data-close]');if(close)sheet.close();
    const step=t.closest('[data-step]');if(step)showStop(activeStop+Number(step.dataset.step));
    const region=t.closest('[data-region]');if(region){mapFilter=region.dataset.region;document.querySelectorAll('[data-region]').forEach(b=>b.setAttribute('aria-pressed',String(b===region)));placeResults();}
    if(t.closest('#reset-search')){mapFilter='all';mapQuery='';placesView();document.querySelector('#place-search').focus();}
    if(t.closest('#download-places'))downloadPlaces();
    if(t.closest('#expand-pending')){const days=[...document.querySelectorAll('.confirmation-day')];const expand=days.some(d=>!d.open);days.forEach(d=>d.open=expand);t.closest('button').textContent=expand?'收起全部':'展开全部';}
  });
  document.addEventListener('input',event=>{if(event.target.id==='place-search'){mapQuery=event.target.value;placeResults();}});
  sheet.addEventListener('close',()=>{if(sheetOrigin?.isConnected)sheetOrigin.focus({preventScroll:true});activeStop=null;});
  for(const dialog of [sheet])dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  window.addEventListener('hashchange',()=>render(true));
  render();
})();
