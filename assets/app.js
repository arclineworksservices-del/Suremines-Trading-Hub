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
document.querySelector('[data-lead-form]')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const lines=[`Name: ${f.get('name')}`,`Company: ${f.get('company')}`,`Email: ${f.get('email')}`,`Phone / WhatsApp: ${f.get('phone')}`,`Inquiry type: ${f.get('type')}`,`Destination: ${f.get('destination')}`,'',`Requirement details:\n${f.get('details')}`];location.href=`mailto:${cfg.email}?subject=${encodeURIComponent(`Website inquiry — ${f.get('company')}`)}&body=${encodeURIComponent(lines.join('\n'))}`;e.currentTarget.querySelector('.form-status').textContent='Your email application should now open. Please send the prepared message to complete your inquiry.'});
