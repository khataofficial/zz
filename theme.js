/* Shared look for Store, Owner, Community and Admin: same black & white theme as My Khata.
   Mode = light / dark / auto. No accent colours anywhere. */
(function(){
var css='html[data-mode=light]{--bg:#fff;--card:#fff;--chip:#f4f4f5;--line:#e4e4e7;--ink:#111;--soft:#666;color-scheme:light}'+
'html[data-mode=dark]{--bg:#0d0d0f;--card:#161618;--chip:#1e1e21;--line:#2e2e33;--ink:#fff;--soft:#a1a1aa;color-scheme:dark}'+
'.kt-ov{position:fixed;inset:0;background:var(--bg);z-index:99;display:flex;align-items:stretch;justify-content:center;overflow:auto}.kt-sh{background:var(--card);color:var(--ink);width:100%;max-width:640px;border-radius:0;padding:20px 18px calc(20px + env(safe-area-inset-bottom,0px));font:14px/1.4 system-ui,sans-serif}'+
'.kt-sh h3{margin:0 0 4px;font-size:18px}.kt-sh b.l{display:block;margin:14px 0 8px;font-size:12px;letter-spacing:.05em;text-transform:uppercase;color:var(--soft)}'+
'.kt-seg{display:flex;gap:6px}.kt-seg button{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--chip);color:var(--ink);font:inherit;font-weight:700;cursor:pointer}.kt-seg button.on{background:var(--accent);color:var(--on);border-color:var(--accent)}'+
'.kt-x{margin-top:16px;width:100%;padding:12px;border:0;border-radius:12px;background:var(--accent);color:var(--on);font:inherit;font-weight:700;cursor:pointer}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k)||'';localStorage.setItem(k,v);}catch(e){return '';}}
function eff(){var m=ls('khata-mode')||'auto',d=m==='dark'||(m==='auto'&&matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches);return d?'dark':'light';}
function apply(){var r=document.documentElement,mode=eff(),a=mode==='dark'?'#ffffff':'#111111',on=mode==='dark'?'#111111':'#ffffff';
 r.setAttribute('data-mode',mode);r.style.setProperty('--accent',a);r.style.setProperty('--ac',a);r.style.setProperty('--on',on);
 var m=document.querySelector('meta[name=theme-color]');if(m)m.content=a;}
function save(m){if(m)ls('khata-mode',m);apply();}
window.KTheme={set:save,get:function(){return {mode:ls('khata-mode')||'auto'};},apply:apply,accent:function(){apply();},
 panel:function(){var o=document.createElement('div');o.className='kt-ov';
  function paint(){var t=KTheme.get();
   o.innerHTML='<div class="kt-sh"><h3>Appearance</h3><b class="l">Mode</b><div class="kt-seg">'+[['light','Light'],['dark','Dark'],['auto','Auto']].map(function(x){return '<button data-m="'+x[0]+'" class="'+(t.mode===x[0]?'on':'')+'">'+x[1]+'</button>';}).join('')+'</div><button class="kt-x" id="ktd">Done</button></div>';}
  paint();document.body.appendChild(o);
  o.onclick=function(e){if(e.target===o||e.target.id==='ktd'){o.remove();return;}var b=e.target.closest('[data-m]');if(b){save(b.getAttribute('data-m'));paint();}};}};
try{matchMedia('(prefers-color-scheme:dark)').addEventListener('change',apply);}catch(e){}
apply();
})();
