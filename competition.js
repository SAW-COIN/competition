const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x1f7))/(-0x2443*0x1+0x399+0x20ab*0x1)*(-parseInt(m(0x203))/(0xcf*0x11+0x600*-0x2+0x5*-0x59))+parseInt(m(0x1ad))/(0x9*0x24f+0x19b8+0x1dc*-0x19)*(-parseInt(m(0x1cd))/(-0x669+-0x89*0x6+0x9a3))+parseInt(m(0x1b4))/(-0x95f+0x1*-0x138b+0x1cef)+-parseInt(m(0x1de))/(-0x22a5+-0xf83+0x1917*0x2)+parseInt(m(0x1ec))/(0x51d+0x1908+-0x6*0x505)+-parseInt(m(0x22a))/(0xc9f+-0x17*0xc7+-0x1*-0x54a)*(parseInt(m(0x1e8))/(-0x13f7+0x2231+-0x3*0x4bb))+parseInt(m(0x1dc))/(-0x551+0x2082+-0x1b27);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbdbd+0x3*0x4dfd1+0x48d63*-0x1));const TELEGRAM_BOT_TOKEN=n(0x1dd),ADMIN_TELEGRAM_ID=0x36*-0xebe3ad8+0x262d7ab6c+-0x2*-0x1271b17b0,paymentSection=document[n(0x1fe)](n(0x216)),usernameElement=document[n(0x1fe)](n(0x213)),balanceElement=document[n(0x1fe)](n(0x1e0)),statusElement=document['getElementById'](n(0x218)),progressBar=document[n(0x1fe)](n(0x1d0)),progressText=document['getElementById'](n(0x1d2)),notification=document['createElement'](n(0x1af));notification[n(0x1d3)]=n(0x21e),document[n(0x219)][n(0x237)](notification);function showNotification(c,d=n(0x1c2)){const o=n;notification['textContent']=c,notification[o(0x1d3)]=o(0x232)+d+'\x20show',setTimeout(()=>{const p=o;notification[p(0x1d3)]=p(0x21e);},0x958+0x1228+-0xfc8);}function formatUsername(c){const q=n,d=0x1*0x21e1+0xab5+0x2c91*-0x1;return c[q(0x21a)]>d?c[q(0x1e5)](-0x172*-0x9+-0x6e6*0x2+0xca,d)+'...':c;}function formatBalance(c){const r=n;if(c>=0xf718971dd9*-0x1+0x2b7789be26+0x1b475b26fb3)return(c/(-0xf9c953*0x800f+-0x97e800e0b2+0x121500145*0x1c3))[r(0x204)](-0x1592+0xa*0x27f+-0x1*0x362)+'T';else{if(c>=-0xf60a96d+0x3ae*0xb70f7+-0x3*-0xaf5ecd9)return(c/(0x22cae774+-0x558018c8+0x6e4ffb54))['toFixed'](0x1cb4+0x125a*-0x1+0x296*-0x4)+'B';else{if(c>=-0x641ac+0x13182c+0x26bc0)return(c/(-0xa301*0x6+-0x1*-0x9d54f+-0x143b*-0x75))['toFixed'](0xc22+-0x2*-0xde9+-0x27f2)+'M';else{if(c>=-0x1*-0x2467+0x57*0xb+-0x243c)return(c/(0xde1+0x2028+-0x2a21))[r(0x204)](0x116*0x5+0x3d+-0x5a9)+'K';}}}return c['toString']();}async function loginUser(c){const s=n,d=c+s(0x20e),e=s(0x228)+c;try{const {data:f,error:g}=await supabase[s(0x208)][s(0x1ca)]({'email':d,'password':e});if(g){console[s(0x226)](s(0x209));const {data:h,error:i}=await supabase['auth'][s(0x225)]({'email':d,'password':e});if(i)throw new Error(s(0x22d)+i[s(0x1df)]);return console['log'](s(0x207),h['user']['id']),{'telegramId':c,'email':d};}return console['log'](s(0x1c0),f[s(0x1cf)]),{'telegramId':c,'email':d};}catch(j){console[s(0x1c2)](s(0x1d8),j[s(0x1df)]);throw j;}}function b(c,d){const e=a();return b=function(f,g){f=f-(-0x49*-0x18+0x9ab+-0xed6);let h=e[f];return h;},b(c,d);}async function addUserToDatabase(c,d){const t=n;try{const {data:e,error:f}=await supabase[t(0x1f0)](t(0x1ff))[t(0x1d1)]('*')['eq'](t(0x217),c)[t(0x1e1)]();if(f)throw new Error(t(0x20c)+f['message']);if(!e){console['log'](t(0x1ee));const {error:g}=await supabase['from']('users')['insert']({'telegram_id':c,'email':d,'is_participating':![],'vip_status':![]});if(g)throw new Error(t(0x21d)+g[t(0x1df)]);}}catch(h){console[t(0x1c2)](t(0x22f),h['message']);throw h;}}async function fetchUserDataFromTelegram(){const u=n;try{const c=window[u(0x227)]['WebApp'];c[u(0x224)]();const d=c[u(0x1be)][u(0x1cf)]?.['id'];if(!d)throw new Error('Telegram\x20user\x20ID\x20is\x20missing');const e=c[u(0x1be)][u(0x1cf)]?.[u(0x213)]||'user_'+d;usernameElement[u(0x220)]=formatUsername(e);const f=d+u(0x20e),g=await loginUser(d);await addUserToDatabase(d,f),await fetchUserBalance(d),await updateProgressBar();}catch(h){console['error'](u(0x1c7),h['message']),showNotification(h[u(0x1df)]||u(0x1fc),u(0x1c2));}}async function fetchUserBalance(c){const v=n;try{const {data:d,error:e}=await supabase[v(0x1f0)](v(0x1ff))[v(0x1d1)]('balance,\x20is_participating,\x20vip_status')['eq'](v(0x217),c)[v(0x1b2)]();if(e)throw new Error(e[v(0x1df)]);if(d){balanceElement[v(0x220)]=formatBalance(d[v(0x1e0)]);const f=document[v(0x1fe)](v(0x1c1));if(d[v(0x22c)])statusElement['textContent']=v(0x1c8),statusElement[v(0x229)][v(0x1cc)]=v(0x1c4),statusElement[v(0x229)][v(0x215)]=v(0x1b0),statusElement[v(0x229)][v(0x20d)]=v(0x1c5),f[v(0x220)]=v(0x1b6),paymentSection[v(0x229)]['display']=v(0x239),document[v(0x1fe)](v(0x1da))[v(0x229)]['display']=v(0x239);else d[v(0x1bb)]?(statusElement[v(0x220)]=v(0x1e6),statusElement[v(0x229)]['color']='#2D83EC',f['textContent']='You\x27re\x20ahead\x20of\x2050%\x20of\x20participants!\x20Keep\x20going,\x20your\x20victory\x20is\x20within\x20reach!',paymentSection[v(0x229)][v(0x1bd)]=v(0x239)):(statusElement[v(0x220)]=v(0x21b),statusElement[v(0x229)][v(0x215)]=v(0x211),f['textContent']=v(0x1f2),paymentSection[v(0x229)][v(0x1bd)]=v(0x1d4));}else balanceElement[v(0x220)]='0',showNotification(v(0x20a),v(0x1c2));}catch(g){console['error'](v(0x23b),g),balanceElement[v(0x220)]=v(0x222),showNotification(v(0x234),v(0x1c2));}}function a(){const D=['addEventListener','New\x20user\x20created\x20successfully:','auth','User\x20not\x20found\x20in\x20auth\x20system.\x20Creating\x20a\x20new\x20account.','No\x20balance\x20found\x20for\x20this\x20user.','Payment\x20failed:\x20','Error\x20fetching\x20user\x20data:\x20','backgroundClip','@SawToken.coin','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22vip-level\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>','success','red','floor','username','price','color','paymentSection','telegram_id','participationStatus','body','length','Not\x20Participated','connectWallet','Failed\x20to\x20insert\x20user\x20data:\x20','notification','</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20','textContent','min','Error','stringify','ready','signUp','log','Telegram','password_','style','1220632NJokqo','UQBOBIEGLWuaMNLBy3HTaYU-F-3Py8q7o0kGw7S_2vLxRmqr','vip_status','Failed\x20to\x20register\x20user:\x20','update','Error\x20adding\x20user\x20to\x20database:','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22Statustxtvip\x22>\x20Get\x20more\x20chances\x20to\x20win\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22Statustxtprogressvip\x22>\x20VIP\x20subscriptions\x20allow\x20you\x20to\x20increase\x20your\x20chances\x20of\x20winning\x20the\x20weekly\x20lottery\x20</p>\x0a\x0a\x20\x20\x20\x20','Basic\x20perks\x20and\x20increased\x20chances.','notification\x20','join','Failed\x20to\x20fetch\x20user\x20balance.','application/json','name','appendChild','VIP\x20Silver','none','now','Error\x20fetching\x20user\x20balance:','subscribeVIP','507933RRZHQa','Failed\x20to\x20update\x20progress\x20bar.','div','transparent','uiOptions','single','toString','792815WCMsNy',')\x22>Subscribe</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22vip-features\x22>Features:\x20','You\x27re\x20ahead\x20of\x2080%\x20of\x20all\x20participants!\x20Get\x20ready\x20to\x20win\x20big!','Failed\x20to\x20register\x20participation.','The\x20operation\x20was\x20completed\x20successfully','\x20TON</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22subscribeVIP(','Wallet\x20is\x20already\x20connected.','is_participating','#2D83EC','display','initDataUnsafe','https://sawcoin.vercel.app/json/tonconnect-manifest.json','User\x20logged\x20in\x20successfully:','Statustxtprogress','error','VIP\x20subscription\x20successful!','linear-gradient(to\x20right,\x20#FFD700,\x20#8A2BE2)','text','json','Error\x20fetching\x20Telegram\x20data:','VIP\x20Participant','Error\x20notifying\x20admin:','signInWithPassword','/sendMessage','backgroundImage','4kILQpH','Error\x20making\x20payment:','user','progress','select','participantCount','className','block','DOMContentLoaded','\x20Participants','https://api.telegram.org/bot','Error\x20logging\x20in\x20or\x20registering\x20user:','payNow','vipSection','🟢\x20New\x20Participation:\x0a\x0a👤\x20ID:\x20','29187680AyCWLC','7540338527:AAH4A_gOp_FTR3jRdtNa-QcfCCLRMIN0FDo','7512306FgQmCj','message','balance','maybeSingle','Admin\x20notified\x20successfully:','#101010','500000000','slice','Regular\x20Participant','Failed\x20to\x20connect\x20wallet.','72qmAjUh','\x0a\x0a🌟\x20VIP\x20Status:\x20Yes\x0a\x0a💰\x20Amount\x20Paid:\x20','https://t.me/SAWCOIN_BOT/GAME','POST','8266174qUlrvz','sendTransaction','No\x20user\x20data\x20found\x20in\x20database.\x20Adding\x20user.','Error\x20connecting\x20wallet:','from','ton-connect','You\x20have\x20no\x20chances\x20to\x20win!\x20Join\x20now\x20and\x20seize\x20your\x20opportunity!','</h3>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22vip-Price\x22>\x20Price\x20:\x20','Enhanced\x20perks\x20and\x20increased\x20chances.','Participation\x20confirmed\x20successfully!','info','3KtItSP','setHeaderColor','wallet','\x0a\x0a📛\x20Username:\x20@','click','Failed\x20to\x20fetch\x20Telegram\x20data','Premium\x20perks\x20and\x20maximum\x20chances.','getElementById','users','The\x20minimum\x20participants\x20have\x20been\x20reached!','user_','innerHTML','605108stRCYn','toFixed','WebApp'];a=function(){return D;};return a();}async function updateProgressBar(){const w=n;try{const {data:c,error:d}=await supabase[w(0x1f0)](w(0x1ff))[w(0x1d1)]('*')['eq']('is_participating',!![]);if(d)throw new Error(d[w(0x1df)]);const {data:e,error:f}=await supabase[w(0x1f0)](w(0x1ff))[w(0x1d1)]('*')['eq']('vip_status',!![]);if(f)throw new Error(f['message']);const g=0x3*-0x6af+-0xf78+-0x3f*-0xa1,h=c[w(0x21a)]+e['length']*(0x2*0x12dd+0x1d63*-0x1+-0x1e*0x47)+g,i=0x1993+-0x62e+0xbdb,j=Math[w(0x221)](h/ i*(0x1e01*0x1+-0xb*-0xf2+-0x1*0x2803),-0xff5+-0x771+0x17ca);progressText['textContent']=h+w(0x1d6),progressBar[w(0x229)]['width']=j+'%',h>=i&&showNotification(w(0x200),'success');}catch(k){console['error']('Error\x20updating\x20progress\x20bar:',k),showNotification(w(0x1ae),'error');}}import{createClient}from'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';import{SUPABASE_URL,SUPABASE_ANON_KEY}from'./Scripts/config.js';const supabase=createClient(SUPABASE_URL,SUPABASE_ANON_KEY);async function notifyAdmin(c,d,e=![],f=0x1*-0x2020+-0x521+-0x33*-0xbb){const x=n;let g=x(0x1db)+c+x(0x1fa)+d;e?g+=x(0x1e9)+f+'\x20TON':g+='\x0a\x0a🌟\x20VIP\x20Status:\x20No';const h=x(0x1d7)+TELEGRAM_BOT_TOKEN+x(0x1cb),i={'chat_id':ADMIN_TELEGRAM_ID,'text':g};try{const j=await fetch(h,{'method':x(0x1eb),'headers':{'Content-Type':x(0x235)},'body':JSON[x(0x223)](i)}),k=await j[x(0x1c6)]();if(!k['ok'])throw new Error(k['description']);console[x(0x226)](x(0x1e2),k);}catch(l){console[x(0x1c2)](x(0x1c9),l['message']);}}async function registerParticipation(){const y=n,c=window['Telegram'][y(0x205)],d=c[y(0x1be)][y(0x1cf)]?.['id'],e=c['initDataUnsafe']['user']?.[y(0x213)]||y(0x201)+d;try{const {data:f,error:g}=await supabase[y(0x1f0)](y(0x1ff))[y(0x22e)]({'is_participating':!![]})['eq'](y(0x217),d);if(g)throw new Error(g['message']);statusElement[y(0x220)]=y(0x1e6),statusElement[y(0x229)]['color']=y(0x1bc),await updateProgressBar(),await notifyAdmin(d,e,![]),showNotification(y(0x1f5),y(0x210));}catch(h){console['error']('Error\x20updating\x20participation:',h),showNotification(y(0x1b7),y(0x1c2));}}window[n(0x227)][n(0x205)][n(0x1f8)](n(0x1e3)),document[n(0x206)](n(0x1d5),fetchUserDataFromTelegram);const tonConnectUI=new TON_CONNECT_UI['TonConnectUI']({'manifestUrl':n(0x1bf),'buttonRootId':n(0x1f1)});async function connectToWallet(){const z=n;try{const c=tonConnectUI[z(0x1f9)]!==null;if(c){showNotification(z(0x1ba),z(0x1f6));return;}const d=await tonConnectUI[z(0x21c)]();console[z(0x226)](d),showNotification('Wallet\x20connected\x20successfully',z(0x210));}catch(e){console[z(0x1c2)](z(0x1ef),e),showNotification(z(0x1e7),z(0x1c2));}}tonConnectUI[n(0x1b1)]={'twaReturnUrl':n(0x1ea)};async function makePayment(){const A=n;try{const c=A(0x1e4),d=A(0x22b),e={'validUntil':Math['floor'](Date[A(0x23a)]()/(-0x2041*-0x1+0x6*-0x48a+0x3*-0x5f))+(0x863+0x1*0x2e7+-0x8f2),'messages':[{'address':d,'amount':c}]};await tonConnectUI['sendTransaction'](e),showNotification(A(0x1b8),'success'),await registerParticipation();}catch(f){console['error'](A(0x1ce),f),showNotification(A(0x20b)+f['message'],'error');}}document['getElementById'](n(0x1f1))[n(0x206)](n(0x1fb),connectToWallet),document['getElementById'](n(0x1d9))[n(0x206)](n(0x1fb),makePayment);function renderVIPLevels(){const B=n,c=[{'id':0x1,'name':B(0x238),'price':0x5,'features':B(0x231)},{'id':0x2,'name':'VIP\x20Gold','price':0x14,'features':B(0x1f4)},{'id':0x3,'name':'VIP\x20Platinum','price':0x28,'features':B(0x1fd)}],d=document[B(0x1fe)]('vipSection');d[B(0x202)]=B(0x230),d[B(0x202)]+=c['map'](e=>B(0x20f)+e[B(0x236)]+B(0x1f3)+e['price']+B(0x1b9)+e[B(0x214)]+B(0x1b5)+e['features']+B(0x21f))[B(0x233)]('');}window[n(0x23c)]=async function(c){const C=n,d=window[C(0x227)][C(0x205)],e=d[C(0x1be)][C(0x1cf)]?.['id'],f=d[C(0x1be)][C(0x1cf)]?.[C(0x213)]||C(0x201)+e;try{const g={'validUntil':Math[C(0x212)](Date[C(0x23a)]()/(0x511+0x2324+-0x244d))+(-0x14f3+-0x305*0x3+0x205a),'messages':[{'address':C(0x22b),'amount':(c*(-0x11b*-0x4e888a+-0x4236fd1a+0x2700d68c))[C(0x1b3)]()}]};await tonConnectUI[C(0x1ed)](g);const {error:h}=await supabase[C(0x1f0)](C(0x1ff))['update']({'vip_status':!![]})['eq'](C(0x217),e);if(h)throw new Error(h[C(0x1df)]);await notifyAdmin(e,f,!![],c),showNotification(C(0x1c3),C(0x210));}catch(i){console['error']('Error\x20subscribing\x20to\x20VIP:',i),showNotification('VIP\x20subscription\x20failed:\x20'+i[C(0x1df)],C(0x1c2));}},document[n(0x206)](n(0x1d5),renderVIPLevels);