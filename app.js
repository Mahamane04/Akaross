'use strict';
const PHONE = '22375326628';
const iconPaths = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  chevron:'<path d="m6 9 6 6 6-6"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',
  phone:'<path d="m7 3 3 5-2.5 2a14 14 0 0 0 6.5 6.5l2-2.5 5 3-1 4C11 23 1 13 3 4Z"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 15v5h16v-5"/>',
  whatsapp:'<path d="M21 11.5a9 9 0 0 1-13.3 8L3 21l1.5-4.7A9 9 0 1 1 21 11.5Z"/><path d="m8 7 1.7 2.5-1 1.3a8.6 8.6 0 0 0 4.5 4.2l1.1-1.2L17 15c-.3 1.8-1.4 2.3-3.2 1.8-3.8-1-7.9-5-7-8.4L8 7Z"/>',
  fridge:'<rect x="6" y="2" width="12" height="19" rx="2"/><path d="M6 10h12M9 6v2m0 5v3M8 21v1m8-1v1"/>',
  climate:'<rect x="2" y="4" width="20" height="9" rx="2"/><path d="M5 10h14M16 7h2M7 16v4m5-4v6m5-6v4"/>',
  cooler:'<rect x="6" y="2" width="12" height="19" rx="2"/><circle cx="12" cy="9" r="4"/><path d="M12 5v8m-4-4h8M9 17h6M8 21v1m8-1v1"/>',
  kitchen:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M7 2v2m10-2v2M7 6.5h.01m5 0h.01m5 0h.01"/><rect x="6" y="12" width="12" height="6" rx="1"/>',
  laundry:'<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="5"/><path d="M4 7h16M7 4.5h2m6 0h2m-9 10c2-2 6 2 8 0"/>',
  audio:'<rect x="2" y="14" width="14" height="5" rx="2"/><rect x="18" y="5" width="4" height="14" rx="1"/><path d="M6 9a4 4 0 0 1 6 0M3 6a8 8 0 0 1 12 0"/>',
  water:'<rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 2h6M6 10h12m-9 3h2m2 0h2M9 18h6M12 13v3"/>',
  safe:'<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="6" y="6" width="12" height="12" rx="1"/><circle cx="12" cy="12" r="3"/><path d="M12 9v6m-3-3h6M3 8h3m-3 8h3"/>'
};
function icon(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.grid}</svg>`;}
document.querySelectorAll('[data-icon]').forEach(el=>{el.outerHTML=icon(el.dataset.icon).replace('class="icon"',`class="icon ${el.className}"`);});

const categories = [
  {id:'froid',name:'Réfrigérateurs',icon:'fridge'},
  {id:'climatisation',name:'Climatiseurs',icon:'climate'},
  {id:'fraicheur',name:'Rafraîchisseurs',icon:'cooler'},
  {id:'cuisine',name:'Cuisine',icon:'kitchen'},
  {id:'lavage',name:'Machines à laver',icon:'laundry'},
  {id:'audio',name:'Audio',icon:'audio'},
  {id:'eau',name:'Fontaines à eau',icon:'water'},
  {id:'securite',name:'Coffres-forts',icon:'safe'}
];
// Identifiants internes du catalogue, distincts des références constructeur.
const products = [
  ['001','Machine à laver','lavage','01-machine-a-laver'],
  ['002','Réfrigérateur VIP','froid','02-refrigerateur-vip'],
  ['003','Réfrigérateur moyen format','froid','03-refrigerateur-moyen-format'],
  ['004','Rafraîchisseur d’air','fraicheur','04-rafraichisseur-air'],
  ['005','Cuisinière à gaz','cuisine','05-cuisiniere-gaz'],
  ['006','Micro-ondes','cuisine','06-micro-ondes'],
  ['007','Vitrine réfrigérée','froid','07-vitrine-refrigeree'],
  ['008','Fontaine à eau blanche','eau','08-fontaine-eau-blanche'],
  ['009','Fontaine à eau noire','eau','09-fontaine-eau-noire'],
  ['010','Coffre-fort 105 kg','securite','10-coffre-fort-105kg'],
  ['011','Coffre-fort 55 kg','securite','11-coffre-fort-55kg'],
  ['012','Réfrigérateur inox','froid','12-refrigerateur-inox'],
  ['013','Barre de son W80','audio','13-barre-de-son-w80'],
  ['014','Climatiseur 12 000 BTU','climatisation','14-climatiseur-12000btu'],
  ['015','Réfrigérateur grand format · 01','froid','15-refrigerateur-grand-format-1'],
  ['016','Réfrigérateur grand format · 02','froid','16-refrigerateur-grand-format-2'],
  ['017','Réfrigérateur vertical','froid','17-refrigerateur-vertical'],
  ['018','Réfrigérateur graphite','froid','18-refrigerateur-graphite'],
  ['019','Machine à laver graphite','lavage','19-machine-a-laver-graphite'],
  ['020','Réfrigérateur grand format · 03','froid','20-refrigerateur-grand-format-3']
].map(([id,name,category,file])=>({ref:`AK-${id}`,name,category,image:`assets/products/${file}.jpg`}));
const categoryFor = id => categories.find(c=>c.id===id);
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function publicSiteURL(){
  const host=location.hostname;
  return /^https?:$/.test(location.protocol) && !/^(localhost|127\.|0\.0\.0\.0|\[::1\]|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host) && !host.endsWith('.local');
}
function orderLink(product){
  let message=`Bonjour Akaross, je souhaite commander cet article :\n${product.name}\nRéférence catalogue : ${product.ref}\nMerci de me confirmer son prix et sa disponibilité.`;
  if(publicSiteURL()){
    const page=new URL(location.href);page.hash=`produit-${product.ref}`;
    message+=`\n\nFiche produit : ${page.href}\nPhoto : ${new URL(product.image,location.href).href}`;
  }
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
const menu=document.querySelector('#category-menu');
const toggle=document.querySelector('#categories-toggle');
const search=document.querySelector('#search');
const grid=document.querySelector('#product-grid');
const dialog=document.querySelector('#product-dialog');
let selected='all';
function setMenu(open,focusFirst=false){
  menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));
  if(open&&focusFirst)menu.querySelector('button').focus();
}
toggle.addEventListener('click',()=>setMenu(menu.hidden));
toggle.addEventListener('keydown',event=>{if(event.key==='ArrowDown'){event.preventDefault();setMenu(true,true);}});
document.addEventListener('click',event=>{if(!event.target.closest('.categories-wrap'))setMenu(false);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){setMenu(false);toggle.focus();}});
document.addEventListener('focusin',event=>{if(!event.target.closest('.categories-wrap'))setMenu(false);});
menu.addEventListener('keydown',event=>{
  const buttons=[...menu.querySelectorAll('button')];const index=buttons.indexOf(document.activeElement);
  if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){
    event.preventDefault();let next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;buttons[next].focus();
  }
});
menu.innerHTML=`<button data-category="all">${icon('grid')}<span>Tous les produits</span><span class="count">20</span></button>`+categories.map(c=>`<button data-category="${c.id}">${icon(c.icon)}<span>${c.name}</span><span class="count">${products.filter(p=>p.category===c.id).length}</span></button>`).join('');
document.querySelector('#category-strip').innerHTML=categories.map(c=>`<button class="category-tile" data-category="${c.id}" aria-pressed="false">${icon(c.icon)}<span>${c.name}</span></button>`).join('');
function scrollToCatalogue(){document.querySelector('#catalogue').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
document.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{
  selected=button.dataset.category;search.value='';setMenu(false);render();scrollToCatalogue();
  if(menu.contains(button))toggle.focus({preventScroll:true});
}));
function reset(){selected='all';search.value='';render();}
document.querySelector('#all-filter').addEventListener('click',reset);
document.querySelector('#clear-filter').addEventListener('click',reset);
document.querySelector('#reset-search').addEventListener('click',()=>{reset();search.focus({preventScroll:true});});
search.addEventListener('input',render);
search.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();scrollToCatalogue();}});
function render(){
  const query=normalize(search.value.trim());
  const visible=products.filter(p=>(selected==='all'||p.category===selected)&&normalize(`${p.name} ${p.ref} ${categoryFor(p.category).name}`).includes(query));
  document.querySelector('#product-count').textContent=`${visible.length} produit${visible.length===1?'':'s'}`;
  document.querySelector('#empty-state').hidden=visible.length>0;
  document.querySelector('#all-filter').classList.toggle('active',selected==='all');
  document.querySelector('#all-filter').setAttribute('aria-pressed',String(selected==='all'));
  const label=document.querySelector('#selected-category');label.hidden=selected==='all';label.textContent=categoryFor(selected)?.name||'';
  document.querySelector('#clear-filter').hidden=selected==='all'&&!query;
  document.querySelectorAll('[data-category]').forEach(b=>{const active=b.dataset.category===selected;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  grid.innerHTML=visible.map((p,i)=>`<article class="product-card" id="produit-${p.ref}"><button class="product-image-button" data-product="${p.ref}" aria-label="Voir la fiche ${p.name}, référence ${p.ref}"><img src="${p.image}" width="1200" height="1200" alt="${p.name} Akaross — ${p.ref}" loading="lazy" decoding="async"><span class="zoom-hint">${icon('search')}</span></button><div class="product-meta"><span>${categoryFor(p.category).name}</span><span>Réf. catalogue ${p.ref}</span></div><h3>${p.name}</h3><a class="order-button" href="${orderLink(p)}" target="_blank" rel="noopener noreferrer" aria-label="Commander ${p.name}, référence ${p.ref}, sur WhatsApp">${icon('whatsapp')}<span>Commander sur WhatsApp</span></a></article>`).join('');
  grid.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>openProduct(button.dataset.product)));
}
function openProduct(ref){
  const p=products.find(product=>product.ref===ref);if(!p)return;
  document.querySelector('#dialog-title').textContent=p.name;
  document.querySelector('#dialog-category').textContent=categoryFor(p.category).name;
  document.querySelector('#dialog-reference').textContent=`Référence catalogue : ${p.ref}`;
  const img=document.querySelector('#dialog-image');img.src=p.image;img.alt=`${p.name} Akaross`;
  document.querySelector('#dialog-order').href=orderLink(p);
  const download=document.querySelector('#dialog-download');download.href=p.image;download.download=`Akaross-${p.ref}.jpg`;
  document.body.classList.add('modal-open');dialog.showModal();
}
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelectorAll('[data-general-whatsapp]').forEach(a=>a.href=`https://wa.me/${PHONE}?text=${encodeURIComponent('Bonjour Akaross, je souhaite des renseignements sur vos produits.')}`);
document.querySelector('#year').textContent=new Date().getFullYear();
function openLinkedProduct(){const match=location.hash.match(/^#produit-(AK-\d{3})$/);if(match)openProduct(match[1]);}
render();openLinkedProduct();window.addEventListener('hashchange',openLinkedProduct);
