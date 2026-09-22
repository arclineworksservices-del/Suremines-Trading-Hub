const cfg=window.SUREMINES_CONFIG||{};
const logoStyles=document.createElement('style');
logoStyles.textContent='.brand-logo{display:block;width:190px;height:64px;object-fit:contain;object-position:left center}.footer-logo{display:block;width:220px;height:110px;object-fit:contain;object-position:left center}@media(max-width:800px){.brand-logo{width:142px;height:54px}.footer-logo{width:190px;height:100px}}';
document.head.appendChild(logoStyles);
document.querySelectorAll('.brand').forEach((el,index)=>{
  const logo=document.createElement('img');
  logo.src='assets/suremines-logo-transparent.png';
  logo.alt='Suremines Gold and Diamond Mining Company';
  logo.className=index===0?'brand-logo':'footer-logo';
  el.replaceChildren(logo);
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu'),nav=document.querySelector('.site-header nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('[data-email]').forEach(el=>{el.textContent=cfg.email;el.href=`mailto:${cfg.email}`});
document.querySelectorAll('[data-phone]').forEach(el=>{if(!cfg.phoneDisplay){el.remove();return}el.textContent=cfg.phoneDisplay;if(cfg.phoneLink)el.href=`tel:${cfg.phoneLink}`;else el.removeAttribute('href')});
document.querySelectorAll('[data-address]').forEach(el=>el.textContent=cfg.address);
const header=document.querySelector('.site-header');
if(header){
  const marketBar=document.createElement('section');
  marketBar.className='market-ticker';
  marketBar.setAttribute('aria-label','Live and delayed global market prices');
  marketBar.innerHTML='<div class="market-label"><strong>GLOBAL MARKETS</strong><span>Prices may be delayed</span></div><div class="tradingview-widget-container"><div class="tradingview-widget-container__widget"><span class="market-loading">Loading market data...</span></div></div>';
  header.insertAdjacentElement('afterend',marketBar);
  const tickerStyles=document.createElement('style');
  tickerStyles.textContent='.market-ticker{height:54px;display:grid;grid-template-columns:175px minmax(0,1fr);align-items:stretch;background:#020612;border-bottom:1px solid #0b6675;position:sticky;top:84px;z-index:9;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.28)}.market-label{display:flex;flex-direction:column;justify-content:center;padding:7px 16px;border-right:1px solid #0b6675;background:linear-gradient(135deg,rgba(0,231,231,.1),rgba(255,90,0,.08))}.market-label strong{color:#00e7e7;font:700 .7rem "Space Mono",monospace;letter-spacing:.12em}.market-label span{color:#8296a8;font:400 .56rem "Space Mono",monospace;text-transform:uppercase}.market-ticker .tradingview-widget-container{width:100%;min-width:0;overflow:hidden}.market-loading,.market-unavailable{display:flex;align-items:center;height:52px;padding:0 20px;color:#8296a8;font:400 .7rem "Space Mono",monospace}.market-unavailable{color:#ffad8a}.market-ticker iframe{display:block;max-width:none;border:0}@media(max-width:800px){.market-ticker{height:50px;top:72px;display:block;overflow-x:auto;overflow-y:hidden}.market-label{display:none}.market-ticker .tradingview-widget-container{min-width:900px}.market-loading,.market-unavailable{height:48px;padding:0 16px}}';
  document.head.appendChild(tickerStyles);
  const widgetScript=document.createElement('script');
  widgetScript.src='https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
  widgetScript.async=true;
  widgetScript.textContent=JSON.stringify({symbols:[
    {description:'Gold',proName:'OANDA:XAUUSD'},
    {description:'Silver',proName:'OANDA:XAGUSD'},
    {description:'Copper',proName:'COMEX:HG1!'},
    {description:'Cocoa',proName:'ICEUS:CC1!'},
    {description:'Coffee',proName:'ICEUS:KC1!'},
    {description:'Brent Crude',proName:'TVC:UKOIL'},
    {description:'Bitcoin',proName:'COINBASE:BTCUSD'},
    {description:'S&P 500',proName:'SP:SPX'},
    {description:'NASDAQ',proName:'NASDAQ:IXIC'}
  ],showSymbolLogo:false,isTransparent:true,displayMode:'compact',colorTheme:'dark',locale:'en'});
  const widgetContainer=marketBar.querySelector('.tradingview-widget-container');
  const showUnavailable=()=>{if(widgetContainer.querySelector('iframe'))return;widgetContainer.innerHTML='<span class="market-unavailable">Market data unavailable</span>'};
  widgetContainer.appendChild(widgetScript);
  window.setTimeout(showUnavailable,9000);
}
document.querySelectorAll('.appointment-link').forEach(el=>{el.href=cfg.appointmentUrl||`mailto:${cfg.email}?subject=${encodeURIComponent('Suremines Appointment Request')}&body=${encodeURIComponent('Name:\nCompany:\nPreferred date/time (GMT):\nMeeting purpose:\n')}`});
document.querySelector('[data-lead-form]')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const lines=[`Name: ${f.get('name')}`,`Company: ${f.get('company')}`,`Email: ${f.get('email')}`,`Phone / WhatsApp: ${f.get('phone')}`,`Commodity: ${f.get('commodity')||'Not specified'}`,`Inquiry type: ${f.get('type')}`,`Destination: ${f.get('destination')}`,'',`Requirement details:\n${f.get('details')}`];location.href=`mailto:${cfg.email}?subject=${encodeURIComponent(`Website inquiry — ${f.get('company')}`)}&body=${encodeURIComponent(lines.join('\n'))}`;e.currentTarget.querySelector('.form-status').textContent='Your email application should now open. Please send the prepared message to complete your inquiry.'});

const commodityImages={precious:'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=900&q=80',critical:'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',agriculture:'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',energy:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',industrial:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80'};
const commodityProducts=[
  ['Gold Doré','minerals','Precious Minerals','Refined gold alloy inquiries coordinated around purity, bar format, assay and compliant export documentation.','precious'],['Gold Dust','minerals','Precious Minerals','Legally sourced gold dust inquiries subject to assay, KYC, origin documentation and regulatory approval.','precious'],['Rough Diamonds','minerals','Precious Minerals','Professional rough diamond inquiries handled under licensing, valuation, export and Kimberley Process requirements.','precious'],['Cut and Polished Diamonds','minerals','Precious Minerals','Cut and polished diamond requirements reviewed by shape, colour, clarity, carat, certification and destination.','precious'],['Silver','minerals','Precious Minerals','Silver sourcing enquiries assessed by form, purity, assay, quantity and delivery terms.','precious'],
  ['Iron Ore','minerals','Industrial and Critical Minerals','Commercial inquiries assessed by ore grade, assay, volume, loading point, logistics pathway and delivery terms.','critical'],['Bauxite Ore','minerals','Industrial and Critical Minerals','Buyer requirements coordinated around alumina content, moisture, sizing, monthly volume and destination.','critical'],['Rutile','minerals','Industrial and Critical Minerals','Requirements reviewed against titanium dioxide content, mineral composition, quantity and export specifications.','critical'],['Ilmenite','minerals','Industrial and Critical Minerals','Industrial mineral requirements reviewed for verified source, titanium content, assay and shipment feasibility.','critical'],['Zircon','minerals','Industrial and Critical Minerals','Structured inquiries considered against zircon grade, concentrate specifications, volume and destination.','critical'],['Coltan','minerals','Industrial and Critical Minerals','Inquiries require strict source verification, chain-of-custody documentation and responsible-minerals due diligence.','critical'],['Tantalite','minerals','Industrial and Critical Minerals','Tantalite requirements are subject to source, assay, chain-of-custody and responsible sourcing review.','critical'],['Lithium Ore','minerals','Industrial and Critical Minerals','Lithium-bearing material inquiries are subject to laboratory analysis, licensing and origin verification.','critical'],['Copper Ore and Concentrates','minerals','Industrial and Critical Minerals','Requirements reviewed by product form, copper content, assay, volume, origin and delivery destination.','critical'],['Manganese Ore','minerals','Industrial and Critical Minerals','Potential sourcing assessed by ore grade, chemical composition, available tonnage and agreed terms.','critical'],['Nickel','minerals','Industrial and Critical Minerals','Nickel requirements reviewed by product form, grade, assay, quantity, origin and logistics.','critical'],['Cobalt','minerals','Industrial and Critical Minerals','Cobalt inquiries require verified origin, technical specifications, responsible sourcing and compliance review.','critical'],['Graphite','minerals','Industrial and Critical Minerals','Buyer specifications assessed by carbon content, flake size, moisture, impurities and intended application.','critical'],['Rare-Earth Mineral Concentrates','minerals','Industrial and Critical Minerals','Concentrate inquiries are subject to mineral composition, assay, source verification and responsible supply review.','critical'],
  ['Cocoa Beans','agriculture','Agricultural Commodities','Export enquiries reviewed against bean grade, crop, moisture, packaging, inspection and delivery terms.','agriculture'],['Coffee Beans','agriculture','Agricultural Commodities','Coffee inquiries coordinated around variety, processing method, grade, packaging and shipment terms.','agriculture'],['Cashew Nuts','agriculture','Agricultural Commodities','Raw and processed cashew requirements reviewed by grade, moisture, nut count, packaging and volume.','agriculture'],['Ginger','agriculture','Agricultural Commodities','Fresh and dried ginger sourcing coordinated against grade, moisture, processing and phytosanitary requirements.','agriculture'],['Palm Oil','agriculture','Agricultural Commodities','Bulk requirements considered against processing standard, quality parameters, packaging and destination market.','agriculture'],['Palm Kernel Oil','agriculture','Agricultural Commodities','Palm kernel oil inquiries assessed by quality parameters, packaging, quantity and delivery specifications.','agriculture'],['Sesame Seeds','agriculture','Agricultural Commodities','Buyer requirements assessed by variety, purity, moisture, foreign matter, packaging and certification needs.','agriculture'],['Groundnuts','agriculture','Agricultural Commodities','Commercial requirements reviewed against grade, aflatoxin controls, moisture, shelling and packaging.','agriculture'],['Soybeans','agriculture','Agricultural Commodities','Soybean requirements reviewed by grade, moisture, origin, volume, packaging and delivery terms.','agriculture'],['Cassava Products','agriculture','Agricultural Commodities','Cassava flour, starch and related product inquiries are subject to specification, quality and packaging review.','agriculture'],['Rice','agriculture','Agricultural Commodities','Rice supply inquiries evaluated by variety, broken percentage, volume, packaging and delivery terms.','agriculture'],['Maize','agriculture','Agricultural Commodities','Maize requirements assessed by grade, moisture, aflatoxin controls, volume and destination.','agriculture'],['Dried Chilli Pepper','agriculture','Agricultural Commodities','Dried chilli enquiries reviewed by variety, heat level, moisture, cleanliness, packaging and phytosanitary needs.','agriculture'],['Tropical Fruits','agriculture','Agricultural Commodities','Tropical fruit programmes are reviewed by season, variety, grade, packing, cold-chain and destination.','agriculture'],['Fish and Seafood','agriculture','Agricultural Commodities','Fish and seafood requirements are subject to species, catch documentation, processing, cold-chain and export review.','agriculture'],
  ['Diesel','energy','Industrial and Energy Products','Diesel enquiries assessed by grade, quantity, loading point, delivery terms and applicable fuel documentation.','energy'],['Marine Fuel','energy','Industrial and Energy Products','Marine fuel requirements reviewed by specification, bunkering location, volume and delivery schedule.','energy'],['LPG','energy','Industrial and Energy Products','LPG sourcing enquiries subject to product specification, cylinder or bulk format, quantity and logistics review.','energy'],['Urea Fertilizer','industrial','Industrial and Energy Products','Urea requirements assessed by grade, prill or granular form, packaging, quantity and destination.','industrial'],['Cement','industrial','Industrial and Energy Products','Cement inquiries reviewed by strength class, packaging, volume, origin and delivery requirements.','industrial'],['Clinker','industrial','Industrial and Energy Products','Clinker requirements assessed by technical specification, volume, loading point and destination.','industrial'],['Steel Products','industrial','Industrial and Energy Products','Steel requirements coordinated around product form, grade, dimensions, quantity and delivery terms.','industrial'],['Aluminium Products','industrial','Industrial and Energy Products','Aluminium requirements reviewed by alloy, product form, dimensions, quantity and destination.','industrial']
].map(([name,filter,section,description,image])=>({name,filter,section,description,image}));

const catalogue=document.querySelector('#commodity-catalogue');
if(catalogue){
  const sectionIntro={
    'Precious Minerals':'Precious metals and diamonds for compliant, documented commercial enquiries.',
    'Industrial and Critical Minerals':'Materials for global industry and energy transition programmes, subject to enhanced verification.',
    'Agricultural Commodities':'Export-oriented agricultural products reviewed against grade, season, packaging and destination.',
    'Industrial and Energy Products':'Energy and industrial products considered against technical specifications and logistics feasibility.'
  };
  const renderCatalogue=()=>{
    const active=document.querySelector('.filter-button.active')?.dataset.filter||'all';
    const term=(document.querySelector('#commodity-search')?.value||'').trim().toLowerCase();
    const visible=commodityProducts.filter(product=>(active==='all'||product.filter===active)&&(!term||`${product.name} ${product.section} ${product.description}`.toLowerCase().includes(term)));
    catalogue.innerHTML=Object.entries(sectionIntro).map(([section,intro])=>{const products=visible.filter(product=>product.section===section);if(!products.length)return '';return `<section class="section commodity-section"><div class="commodity-heading"><p class="eyebrow">${section.toUpperCase()}</p><h2>${section}</h2><p>${intro}</p></div><div class="commodity-grid">${products.map(product=>`<article class="commodity-card"><img src="${commodityImages[product.image]}" alt="${product.name}" loading="lazy" onerror="this.src='assets/gold-mining-methods.webp'"><div class="commodity-card-body"><span class="commodity-code">${product.filter==='minerals'?'MINERAL':product.filter==='agriculture'?'AGRICULTURE':product.filter.toUpperCase()} · SOURCING ON REQUEST</span><h3>${product.name}</h3><p>${product.description}</p><strong class="availability">Subject to Supplier Verification.</strong><a class="commodity-cta" href="contact.html?commodity=${encodeURIComponent(product.name)}#inquiry">Request Quotation <span aria-hidden="true">→</span></a></div></article>`).join('')}</div></section>`}).join('');
    const result=document.querySelector('#catalogue-result');if(result)result.textContent=`Showing ${visible.length} of ${commodityProducts.length} commodities`;
  };
  document.querySelectorAll('.filter-button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter-button').forEach(item=>item.classList.remove('active'));button.classList.add('active');renderCatalogue()}));
  document.querySelector('#commodity-search')?.addEventListener('input',renderCatalogue);
  renderCatalogue();
}

const selectedCommodity=new URLSearchParams(location.search).get('commodity');
if(selectedCommodity){
  const form=document.querySelector('[data-lead-form]');
  const details=form?.querySelector('[name="details"]');
  const type=form?.querySelector('[name="type"]');
  if(form&&details){
    const hidden=document.createElement('input');hidden.type='hidden';hidden.name='commodity';hidden.value=selectedCommodity;form.appendChild(hidden);
    details.value=`Commodity: ${selectedCommodity}\n\nPlease include volume, specification, destination, Incoterms and target timeline.`;
    if(type&&!Array.from(type.options).some(option=>option.value==='Commodity quotation'))type.insertAdjacentHTML('beforeend','<option value="Commodity quotation">Commodity quotation</option>');
    if(type)type.value='Commodity quotation';
  }
}
