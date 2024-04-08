(()=>{var Pe=Object.defineProperty;var A=(e,l)=>{for(var r in l)Pe(e,r,{get:l[r],enumerable:!0})};var _={};A(_,{displayComponents:()=>je,draw:()=>J,explain:()=>Re,groups:()=>Be,highlightLocation:()=>We,key:()=>Q,locationFromCoordinates:()=>Ge,name:()=>ge,regex:()=>Ie});var E="#689F38",G="#1B5E20",M="#FFA000",P="#E65100",me="rgba(102, 187, 106, 0.2)",I="#004D40",S="#00695C",he="rgba(255, 235, 59, 0.25)",Y="rgba(253, 216, 53, 0.8)",q='"Skranji", sans-serif',F=`bold 0.8em ${q}`,B=`bold 1.1em ${q}`,R=`bold 1.5em ${q}`;var ge="Mathebau",Q="mb",Ie=/^MB((-1|[0-4])(\.)?([0-3])?)?$/i,Be={floor:2,corner:4},m=133,h=98,x=h+24,Z={"-1":[],0:[],1:["1","2","3"],2:["1","2","3"],3:["1","2","3"],4:[]},de={0:{x:-32,y:28},1:{x:-28,y:32},2:{x:-32,y:28},3:{x:-28,y:32}},H=1,p=H;function Oe(e){e.strokeRect(1,1,m-2,h-2),p>0&&e.strokeRect(36,22,m-72,h-44),p===0&&e.fillText("FSM",4,h-5)}function pe(e,l){let r=e.getTransform();e.translate(m/2,h/2),e.rotate(parseInt(l,10)*(Math.PI/2)),e.translate(-(m/2),-(h/2)),e.translate(de[l].x,de[l].y),e.beginPath(),e.moveTo(m/2,h/2),e.lineTo(m/2+9,h/2),e.lineTo(m/2+9,h/2+8),e.lineTo(m/2-8,h/2+8),e.lineTo(m/2-8,h/2-9),e.lineTo(m/2,h/2-9),e.closePath(),e.fill(),e.stroke(),e.setTransform(r)}function $e(e){let l;p<0?l=`${Math.abs(p)}.UG`:p===0?l="EG":l=`${p}.OG`,e.fillText(l,m/2,h/2+2),p<4&&(e.beginPath(),e.moveTo(m/2-5,h/2-11),e.lineTo(m/2+5,h/2-11),e.lineTo(m/2,h/2-19),e.closePath(),e.fill(),e.stroke()),p>-1&&(e.beginPath(),e.moveTo(m/2-5,h/2+11),e.lineTo(m/2+5,h/2+11),e.lineTo(m/2,h/2+19),e.closePath(),e.fill(),e.stroke())}var w;function J(e){w=Math.max(Math.min(window.innerWidth*.8/x,5),1);let l=e.getContext("2d");l.canvas.width=w*m,l.canvas.height=w*x,l.scale(w,w),l.lineWidth=2,l.strokeStyle=I,l.fillStyle=S,l.font=F,Oe(l),l.lineWidth=1,l.strokeStyle=G,l.fillStyle=E;for(let r of Z[p])pe(l,r);l.textAlign="center",l.textBaseline="middle",$e(l),l.fillStyle=S,l.fillText("Campus",m/2,x-13)}function V(e,l,r,t){return Math.sqrt((r-e)**2+(t-l)**2)}function Ge(e,l){let r=V(e/w,l/w,m/2,h/2-15),t=V(e/w,l/w,m/2,h/2+15);if(r<8&&p<4)return{floor:p+1,corner:null};if(t<8&&p>-1)return{floor:p-1,corner:null};let o=1/0,s=null;for(let n of Z[p]){let a=(["0","1"].includes(n)?-1:1)*32,g=(["1","2"].includes(n)?-1:1)*28,d=V(e/w,l/w,m/2+a,h/2+g);d<o&&(o=d,s=n)}return o<20?{floor:p,corner:s}:{floor:p,corner:null}}function We(e,l){if(J(e),l===null)return;p=l.floor===null?H:parseInt(l.floor,10),J(e);let r=e.getContext("2d");if(r.fillStyle=M,r.strokeStyle=P,l.corner!==null){if(!Z[p].includes(l.corner))return;pe(r,l.corner)}}function je(e){if(e===null)return null;let l=["MB",e.floor===null?H:e.floor];return e.corner!==null&&l.push(".",e.corner),l}function Re(e){if(e===null)return null;let l=e.floor===null?H:parseInt(e.floor,10),r;l<0?r=`${Math.abs(l)}. Untergeschoss`:l===0?r="Erdgeschoss":r=`${l}. Obergeschoss`;let t=e.corner===null?null:`Lernecke Nr. ${e.corner}`;return[ge,r,null,t]}var ee={};A(ee,{displayComponents:()=>Ne,draw:()=>Te,explain:()=>Xe,groups:()=>Ae,highlightLocation:()=>ze,key:()=>C,locationFromCoordinates:()=>Ke,name:()=>K,regex:()=>De});var K="Mensa \xFCber [k\u0153ri]werk",C="muek",De=/^M(ü|ue)K((1(,2)?|2(,3)?|3(,4)?|4(,5)?|5(,6)?|6(,7)?|7(,8)?|8(,9)?|9(,10)?|10(,11)?|11(,12)?|12)([ai]?))?$/i,Ae={angle:3,ring:15},z=222,v=186,N={1:{i:[],a:[]},"1,2":{i:[],a:[]},2:{i:[[146,44,!0,!0],[156,44,!1,!0]],a:[]},"2,3":{i:[[146,58,!0,!0],[156,58,!1,!0]],a:[]},3:{i:[[146,72,!0,!0],[156,72,!1,!0]],a:[[186,65,!1,!0],[194,65,!1,!0],[202,65,!1,!0],[210,65,!1,!0],[186,78,!1,!0],[194,78,!1,!0],[202,78,!1,!0],[210,78,!1,!0]]},"3,4":{i:[[146,86,!0,!0],[156,86,!1,!0]],a:[[186,91,!1,!0],[194,91,!1,!0],[202,91,!1,!0],[210,91,!1,!0],[186,104,!1,!0],[194,104,!1,!0],[202,104,!1,!0],[210,104,!1,!0]]},4:{i:[[146,100,!0,!0],[156,100,!1,!0]],a:[[186,117,!1,!0],[194,117,!1,!0],[202,117,!1,!0],[210,117,!1,!0],[186,130,!1,!0],[194,130,!1,!0],[202,130,!1,!0],[210,130,!1,!0]]},"4,5":{i:[],a:[[186,143,!1,!0],[194,143,!1,!0],[202,143,!1,!0],[210,143,!1,!0],[186,156,!1,!0],[194,156,!1,!0],[202,156,!1,!0],[210,156,!1,!0],[186,169,!1,!0],[194,169,!1,!0],[202,169,!1,!0],[210,169,!1,!0]]},5:{i:[[138,110,!1,!1],[138,118,!0,!1]],a:[[166,150,!1,!1],[166,158,!1,!1],[166,166,!1,!1],[166,174,!1,!1],[153,150,!1,!1],[153,158,!1,!1],[153,166,!1,!1],[153,174,!1,!1]]},"5,6":{i:[[126,110,!1,!1],[126,118,!0,!1]],a:[[140,150,!1,!1],[140,158,!1,!1],[140,166,!1,!1],[140,174,!1,!1],[127,150,!1,!1],[127,158,!1,!1],[127,166,!1,!1],[127,174,!1,!1]]},6:{i:[[114,110,!1,!1],[114,118,!0,!1],[102,110,!1,!1],[102,118,!0,!1]],a:[[114,150,!1,!1],[114,158,!1,!1],[114,166,!1,!1],[114,174,!1,!1],[101,150,!1,!1],[101,158,!1,!1],[101,166,!1,!1],[101,174,!1,!1]]},"6,7":{i:[[90,110,!1,!1],[90,118,!0,!1]],a:[[88,150,!1,!1],[88,158,!1,!1],[88,166,!1,!1],[88,174,!1,!1]]},7:{i:[[78,110,!1,!1],[78,118,!0,!1]],a:[[57,156,!1,!1],[57,164,!1,!1],[57,172,!0,!1]]},"7,8":{i:[],a:[[4,172,!1,!0],[12,172,!1,!0],[20,172,!0,!0],[4,158,!0,!0],[14,158,!1,!0],[22,158,!1,!0],[4,144,!0,!0],[14,144,!1,!0],[22,144,!1,!0]]},8:{i:[[58,99,!1,!0],[66,99,!0,!0]],a:[[4,130,!0,!0],[14,130,!1,!0],[22,130,!1,!0],[30,130,!0,!0]]},"8,9":{i:[[58,86,!1,!0],[66,86,!0,!0]],a:[]},9:{i:[[58,73,!1,!0],[66,73,!0,!0]],a:[[4,82,!1,!0],[12,82,!1,!0],[20,82,!0,!0],[30,82,!1,!0],[4,69,!1,!0],[12,69,!1,!0],[20,69,!1,!0],[28,69,!1,!0]]},"9,10":{i:[[58,60,!1,!0],[66,60,!0,!0]],a:[[4,56,!1,!0],[12,56,!1,!0],[20,56,!1,!0],[28,56,!1,!0],[4,43,!1,!0],[12,43,!1,!0],[20,43,!1,!0],[28,43,!1,!0]]},10:{i:[[58,47,!1,!0],[66,47,!0,!0]],a:[[4,30,!1,!0],[12,30,!1,!0],[20,30,!1,!0],[28,30,!1,!0],[4,17,!1,!0],[12,17,!1,!0],[20,17,!1,!0],[28,17,!1,!0],[4,4,!0,!0],[14,4,!1,!0],[22,4,!0,!0]]},"10,11":{i:[],a:[]},11:{i:[],a:[]},"11,12":{i:[],a:[]},12:{i:[],a:[]},"12,1":{i:[],a:[]}},O;function ce(e,l){let r=l[2]?10:8,t=l[3]?r:6,o=l[3]?6:r;e.fillRect(l[0],l[1],t,o),e.strokeRect(l[0],l[1],t,o)}function Ue(e,l,r){let s=Math.max(z,v);e.fillStyle=me,e.moveTo(111,75),e.beginPath(),e.arc(111,75,s,l-Math.PI/2,r-Math.PI/2,!1),e.lineTo(111,75),e.fill(),e.closePath()}function Te(e){O=Math.max(Math.min(window.innerWidth*.9/z,3),2);let l=e.getContext("2d");l.canvas.width=O*z,l.canvas.height=O*v,l.scale(O,O),l.lineWidth=2,l.strokeStyle=I,l.fillStyle=S,l.font=F,l.strokeRect(2,2,z-4,v-4),l.strokeRect(78,42,66,66),l.fillText("L1",30,20),l.fillText("L2",80,20),l.fillText("MS",180,20),l.lineWidth=1,l.fillStyle=E,l.strokeStyle=G;for(let r of Object.values(N))for(let t of Object.values(r))for(let o of t)ce(l,o)}function He(e,l,r,t,o,s){let n=Math.max(r-e,0,e-(r+o)),a=Math.max(t-l,0,l-(t+s));return Math.sqrt(n*n+a*a)}function Ke(e,l){let r=1/0,t=null;for(let[o,s]of Object.entries(N))for(let[n,a]of Object.entries(s))for(let g of a){let d=He(e/O,l/O,g[0],g[1],g[2]?10:8,g[2]?6:8);d<r&&(r=d,t={angle:o,ring:n})}return r<20?t:{angle:null,ring:null}}function ze(e,l){if(Te(e),l===null)return;let r=e.getContext("2d");if(l.angle===null)return;let t=2*Math.PI/24,o=parseInt(l.angle.split(",")[0],10)%12*2;l.angle.includes(",")&&(o+=1),Ue(r,(o-.5)*t,(o+1-.5)*t),r.fillStyle=M,r.strokeStyle=P;let s=[];if(l.ring!==null)s.push(...N[l.angle][l.ring.toLowerCase()]);else if(l.angle!==null)for(let n of Object.values(N[l.angle]))s.push(...n);for(let n of s)ce(r,n)}function Ne(e){return e===null?null:["M\xFCK",e.angle,e.ring===null?null:e.ring.toLowerCase()]}function Xe(e){if(e===null)return null;if(e.angle===null)return[K,null,null];let l=e.angle.split(","),r=`${l.length===2?`zwischen ${l[0]} und ${l[1]}`:e.angle} Uhr`;if(e.ring===null)return[K,r,null];let t=e.ring.toLowerCase()==="i"?"innerer Ring":"\xE4u\xDFerer Ring";return[K,r,t]}var te={};A(te,{displayComponents:()=>Ze,draw:()=>we,explain:()=>_e,groups:()=>qe,highlightLocation:()=>Qe,key:()=>re,locationFromCoordinates:()=>Je,name:()=>ye,regex:()=>Ye});var ye="Mensa Gro\xDFer Speisesaal",re="ms",Ye=/^MS(([1-9])([a-d]))?$/i,qe={row:2,column:3},W=154,le=334,b={};function xe(){let e=["8","8","7","7","7","6","6","5","5","5","4","4","4","3","3","3","2","2"],l=["a","b","c","d"];for(let r=0;r<18;r+=1){let t=54+13*r+1;for(let o=0;o<4;o+=1){let s=e[r],n=l[o];if(b[s]===void 0&&(b[s]={}),b[s][n]===void 0&&(b[s][n]=[]),!(r===6&&o>0))switch(o){case 0:b[s][n].push([4,t,!0],[16,t,!1]);break;case 1:b[s][n].push([40,t,!0],[52,t,!0]);break;case 2:b[s][n].push([80,t,!0],[92,t,!0]);break;case 3:b[s][n].push([120,t,!1],[128,t,!1]);break;default:break}}}}xe();var $;function be(e,l){let r=l[2]?12:8,t=6;e.fillRect(l[0],l[1],r,t),e.strokeRect(l[0],l[1],r,t)}function ke(e,l,r){let t=4+36*r+12+2,o=4+3*12*(8-l)+12+2;e.fillRect(t,o,10,10)}function we(e){$=Math.max(Math.min(window.innerHeight*.8/le,3),2);let l=e.getContext("2d");l.canvas.width=$*W,l.canvas.height=$*le,l.scale($,$),l.lineWidth=2,l.strokeStyle=I,l.fillStyle=S,l.font=F,l.strokeRect(2,2,W-4,le-4),l.fillText("SB",70,20),l.fillText("M\xFCK",7,25),l.textAlign="center",l.fillText("L3",3+3.5*((W-6)/4),325),l.fillText("L4",3+2.5*((W-6)/4),325),l.fillText("L5",3+1.5*((W-6)/4),325),l.fillText("L6",3+.5*((W-6)/4),325),l.lineWidth=1,l.fillStyle=E,l.strokeStyle=G;for(let r of Object.values(b))for(let t of Object.values(r))for(let o of t)be(l,o);l.fillStyle=he,l.lineWidth=0;for(let r=0;r<9;r+=1)for(let t=0;t<4;t+=1)ke(l,r,t)}function Ve(e,l,r,t,o,s){let n=Math.max(r-e,0,e-(r+o)),a=Math.max(t-l,0,l-(t+s));return Math.sqrt(n*n+a*a)}function Je(e,l){let r=1/0,t=null;for(let[o,s]of Object.entries(b))for(let[n,a]of Object.entries(s))for(let g of a){let d=Ve(e/$,l/$,g[0],g[1],g[2]?12:8,6);d<r&&(r=d,t={row:o,column:n})}return r<20?t:{row:null,column:null}}function Qe(e,l){if(we(e),l===null)return;let r=e.getContext("2d");if(l.row===null||l.column===null)return;r.fillStyle=M,r.strokeStyle=P;let t=[];if(l.row!==null&&l.column!==null)t.push(...b[l.row][l.column.toLowerCase()]);else if(l.row!==null)for(let o of Object.keys(b[l.row]))t.push(...b[l.row][o]);else if(l.column!==null)for(let o of Object.keys(b))t.push(...b[o][l.column.toLowerCase()]);for(let o of t)be(r,o);r.shadowColor=Y,r.shadowBlur=15,r.fillStyle=Y,ke(r,parseInt(l.row,10)-1,l.column.toLowerCase().charCodeAt(0)-97)}function Ze(e){return e===null?null:["MS",e.row,e.column]}function _e(e){if(e===null)return null;let l=e.column===null?null:`Lampenspalte ${e.column.toUpperCase()}`,r=e.row===null?null:`Lampenreihe ${e.row}`;return[ye,r,l]}var ne={};A(ne,{displayComponents:()=>il,draw:()=>ie,explain:()=>sl,groups:()=>Ce,highlightLocation:()=>ol,key:()=>se,locationFromCoordinates:()=>tl,name:()=>Se,regex:()=>ve});var Se="InformatiKOM",se="kom",ve=/^KOM((A)|(\d{3})|([0-3])(G([NOSW])?|B|T|)?([sc])?)?$/i,Ce={atrium:2,room:3,floor:4,area:5,areaCardinal:6,seat:7},oe=590,el=489,Fe=0,i=Fe,c={x:138,y:145},y={ground:{x:300,y:170},east:{x:258,y:170},west:{x:292,y:355}},f={0:{atrium:{x:240,y:300,text:"Atrium"},gro\u00DFraum:{x:430,y:190,text:"Gro\xDFraum"}},1:{room117:{x:260,y:420,text:"117"},balcony:{x:551,y:140,text:"\u263C"},gro\u00DFraum:{x:380,y:140,text:"Gro\xDFraum"},gro\u00DFraumN:{x:250,y:107,text:"N"},gro\u00DFraumO:{x:390,y:185,text:"O"},gro\u00DFraumS:{x:322,y:290,text:"S"}},2:{gro\u00DFraum:{x:165,y:312,text:"Gro\xDFraum"},balcony:{x:260,y:424,text:"\u263C"},room202:{x:59,y:348,text:"202"},room203:{x:59,y:320,text:"203"},room204:{x:59,y:292,text:"204"},room205:{x:59,y:264,text:"205"},room206:{x:59,y:236,text:"206"},room207:{x:59,y:208,text:"207"},room208:{x:59,y:180,text:"208"},room209:{x:59,y:152,text:"209"},room210:{x:59,y:124,text:"210"},room211:{x:59,y:96,text:"211"},room212:{x:59,y:68,text:"212"},room213:{x:59,y:40,text:"213"}},3:{balcony:{x:476,y:260,text:"\u263C"},gro\u00DFraum:{x:320,y:216,text:"Gro\xDFraum"}}};function u(e,l,r=!1){e.fillText(l.text,l.x,l.y),r&&(e.lineWidth=1.25,e.strokeText(l.text,l.x,l.y))}function ll(e){i===0?(e.beginPath(),e.moveTo(84,68),e.lineTo(177,68),e.lineTo(177,188),e.lineTo(84,188),e.stroke(),e.beginPath(),e.moveTo(197,35),e.lineTo(267,35),e.lineTo(267,113),e.lineTo(197,113),e.lineTo(197,35),e.closePath(),e.stroke(),e.beginPath(),e.moveTo(288,6),e.lineTo(288,129),e.lineTo(410,129),e.lineTo(410,6),e.stroke(),e.beginPath(),e.moveTo(439,6),e.lineTo(439,68),e.lineTo(519,68),e.lineTo(519,246),e.lineTo(347,246),e.lineTo(347,413),e.stroke(),e.beginPath(),e.moveTo(230,370),e.lineTo(287,370),e.lineTo(287,414),e.lineTo(230,414),e.closePath(),e.stroke(),u(e,f[0].atrium),u(e,f[0].gro\u00DFraum)):i===1?(e.beginPath(),e.moveTo(84,68),e.lineTo(177,68),e.lineTo(177,188),e.lineTo(84,188),e.stroke(),e.beginPath(),e.moveTo(177,6),e.lineTo(177,68),e.lineTo(584,68),e.moveTo(519,68),e.lineTo(519,246),e.lineTo(347,246),e.lineTo(347,413),e.moveTo(519,188),e.lineTo(584,188),e.stroke(),e.beginPath(),e.moveTo(519,129),e.lineTo(462,129),e.lineTo(462,188),e.lineTo(519,188),e.stroke(),e.beginPath(),e.moveTo(177,129),e.lineTo(301,129),e.lineTo(301,370),e.stroke(),e.beginPath(),e.moveTo(167,370),e.lineTo(347,370),e.stroke(),u(e,f[1].room117),e.font=R,u(e,f[1].balcony),e.font=B,u(e,f[1].gro\u00DFraum),u(e,f[1].gro\u00DFraumN),u(e,f[1].gro\u00DFraumO),u(e,f[1].gro\u00DFraumS)):i===2?(e.beginPath(),e.moveTo(82,6),e.lineTo(82,370),e.stroke(),e.beginPath(),e.moveTo(102,6),e.lineTo(102,48),e.lineTo(192,48),e.moveTo(192,68),e.lineTo(102,68),e.lineTo(102,246),e.lineTo(177,246),e.lineTo(177,110),e.lineTo(192,110),e.lineTo(192,6),e.moveTo(177,129),e.lineTo(347,129),e.lineTo(347,370),e.stroke(),u(e,f[2].gro\u00DFraum),e.font=R,u(e,f[2].balcony),e.font=F,u(e,f[2].room202),u(e,f[2].room203),u(e,f[2].room204),u(e,f[2].room205),u(e,f[2].room206),u(e,f[2].room207),u(e,f[2].room208),u(e,f[2].room209),u(e,f[2].room210),u(e,f[2].room211),u(e,f[2].room212),u(e,f[2].room213),e.font=B):i===3&&(e.beginPath(),e.moveTo(406,246),e.lineTo(347,246),e.lineTo(347,314),e.lineTo(322,314),e.lineTo(322,246),e.lineTo(227,246),e.lineTo(227,314),e.lineTo(177,314),e.lineTo(177,129),e.lineTo(406,129),e.stroke(),e.beginPath(),e.moveTo(406,188),e.lineTo(586,188),e.stroke(),e.font=R,u(e,f[3].balcony),e.font=B,u(e,f[3].gro\u00DFraum)),e.lineWidth*=3,e.beginPath(),e.moveTo(i>1?34:82,4),e.lineTo(586,4),e.lineTo(586,250),e.lineTo(411,370),i<3&&e.lineTo(243,485),e.lineTo(166,370),i<2?e.lineTo(82,245):e.lineTo(34,370),e.closePath(),e.stroke(),e.beginPath(),i===2?(e.moveTo(167,370),e.lineTo(410,370)):i===3&&(e.moveTo(406,6),e.lineTo(406,370)),e.stroke(),e.lineWidth/=3}function j(e,l,r,t){e.lineWidth=6,e.beginPath(),e.moveTo(l,r);for(let a=1;a<=4;a+=1)e.lineTo(l+(a-1)*6*t*1.4,r-a*6),e.lineTo(l+a*6*t*1.4,r-a*6);e.lineTo(l+4*6*t*1.4,r),e.closePath(),e.stroke(),e.fill()}function rl(e){let l;i===0?l="EG":l=`${i}.OG`,e.fillText(l,c.x,c.y+2),e.lineWidth=2,i<3&&(e.beginPath(),e.moveTo(c.x-10,c.y-18),e.lineTo(c.x+10,c.y-18),e.lineTo(c.x,c.y-32),e.closePath(),e.fill(),e.stroke()),i>0&&(e.beginPath(),e.moveTo(c.x-10,c.y+18),e.lineTo(c.x+10,c.y+18),e.lineTo(c.x,c.y+32),e.closePath(),e.fill(),e.stroke())}var T;function ie(e){T=Math.max(Math.min(window.innerWidth*.8/oe,1.8),1);let l=e.getContext("2d");l.canvas.width=T*oe,l.canvas.height=T*el,l.scale(T,T),l.lineWidth=2,l.strokeStyle=I,l.fillStyle=S,l.font=B,l.textAlign="center",l.textBaseline="middle",ll(l),l.fillStyle=E,i===0?j(l,y.ground.x,y.ground.y,1):j(l,y.east.x,y.east.y,1),i>0&&i<3&&j(l,y.west.x,y.west.y,-1),rl(l),l.fillStyle=S,l.font=F,l.rotate(Math.PI/2),l.fillText("Adenauerring",oe/4,-12),l.rotate(Math.PI/-2)}function D(e,l,r,t){return Math.sqrt((r-e)**2+(t-l)**2)}function tl(e,l){let r={floor:null,atrium:null,room:null,area:null,areaCardinal:null,seat:null},t=D(e/T,l/T,c.x,c.y-24),o=D(e/T,l/T,c.x,c.y+24);if(t<16&&i<3)return{...r,floor:i+1};if(o<16&&i>0)return{...r,floor:i-1};let s=14*T;if(D(e/T,l/T,y[i===0?"ground":"east"].x+17,y[i===0?"ground":"east"].y-12)<s)return{...r,floor:i%2===0?i:i-1,area:"T"};if(D(e/T,l/T,y.west.x-17,y.west.y-12)<s&&i>0)return{...r,floor:i%2===0?i-1:i,area:"T"};let g=1/0,d=null;for(let k of Object.values(f[i])){if(i===1&&k.text==="Gro\xDFraum")continue;let X=D(e/T,l/T,k.x,k.y);k.text.match(/\d{3}/)&&(X*=2),X<g&&(g=X,k.text==="Atrium"?d={atrium:"A"}:k.text==="Gro\xDFraum"?d={area:"G"}:k.text.match(/[NOSW]/)?d={area:"G",areaCardinal:k.text}:k.text==="\u263C"?d={area:"B"}:k.text.match(/\d{3}/)&&(d={room:k.text}))}return d.floor=i,g<150*T?{...r,...d}:{...r,floor:i}}function ol(e,l){if(ie(e),l===null)return;l.floor!==null&&(l.floor=parseInt(l.floor,10)),i=Fe,l.floor!==null&&(i=l.floor),l.room!==null&&(i=Math.floor(l.room/100)),ie(e);let r=e.getContext("2d");r.fillStyle=M,r.strokeStyle=P,l.atrium?(r.font=B,u(r,f[i].atrium,!0)):l.room?(r.font=i===2?F:B,u(r,f[i][`room${l.room}`],!0)):l.area&&l.area.toUpperCase()[0]==="G"?(r.font=B,i===1&&l.areaCardinal?u(r,f[i][`gro\xDFraum${l.areaCardinal.toUpperCase()}`],!0):u(r,f[i].gro\u00DFraum,!0)):l.area&&l.area.toUpperCase()==="B"?(r.font=R,u(r,f[i].balcony,!0)):l.area&&l.area.toUpperCase()==="T"&&(i===0?j(r,y.ground.x,y.ground.y,1):i%2===0?j(r,y.east.x,y.east.y,1):j(r,y.west.x,y.west.y,-1))}function il(e){if(e===null)return null;let l=["KOM"];return e.atrium!==null&&l.push("A"),e.room!==null&&l.push(e.room),e.atrium===null&&e.room===null&&e.floor!==null&&l.push(e.floor),e.area!==null&&l.push(e.area.toUpperCase()[0]),e.areaCardinal!==null&&l.push(e.areaCardinal.toUpperCase()),e.seat!==null&&l.push(e.seat.toLowerCase()),l}function sl(e){if(e===null)return null;let l=[Se];return e.atrium!=null&&l.push("Atrium"),e.room!=null&&l.push(`Raum ${e.room}`),e.floor!==null&&(parseInt(e.floor,10)===0?l.push("Erdgeschoss"):l.push(`${e.floor}. Obergeschoss`)),e.area!=null&&l.push({G:"Gro\xDFraum",B:"Balkon",T:"Treppe"}[e.area.toUpperCase()[0]]),e.areaCardinal!=null&&l.push({N:"Norden",O:"Osten",S:"S\xFCden"}[e.areaCardinal.toUpperCase()]),e.seat!=null&&l.push(e.seat),l}var L={};L[Q]=_;L[C]=ee;L[re]=te;L[se]=ne;var Ee=navigator.share&&navigator.canShare({title:"IGGG",text:"\u2026",url:"https://team-gecko.de"});function fe(e,l){let r=document.getElementById("location-code"),t=document.getElementById("location-code-explanation"),o=document.getElementById("copy-btn"),s=document.getElementById("share-btn");if(e===null){window.location.hash="",r.innerHTML="\u2026",t.innerHTML="&nbsp;",o.style.display="none",s.style.display="none";return}o.style.display="inline-block",s.style.display=Ee?"inline-block":"none",r.innerHTML="",t.innerHTML="";for(let[n,a]of e.entries()){let g=document.createElement("span");if(g.textContent=a,g.title=l[n],r.appendChild(g),l[n]!==null){let d=document.createElement("span");d.textContent=l[n],t.appendChild(d)}}window.location.hash=r.innerText.toLowerCase()}function ue(e){function l(o){document.getElementById(`map-${o}`).style.display="none",document.getElementById(`map-selector-${o}`).classList.remove("selected")}if(e===null){fe(null,null);for(let o of Object.values(L))l(o.key);return}for(let o of Object.values(L))o.key!==e.key&&l(o.key);let r=document.getElementById(`map-${e.key}`);r.style.display="block";let t=L[e.key];t.highlightLocation(r,e.location),fe(t.displayComponents(e.location),t.explain(e.location)),document.getElementById(`map-selector-${e.key}`).classList.add("selected")}function ae(e){for(let[l,r]of Object.entries(L)){let t=r.regex.exec(e.replace(/\s+/g,""));if(t===null)continue;let o={key:l,location:{}};for(let[s,n]of Object.entries(r.groups))o.location[s]=t[n]?t[n]:null;return o}return null}function nl(){let e=document.getElementById("canvas-wrapper"),l=document.getElementById("map-selector");for(let[r,t]of Object.entries(L)){let o=document.createElement("canvas");o.id=`map-${r}`,e.appendChild(o);let s=document.createElement("span");s.textContent=t.name,s.id=`map-selector-${r}`,s.addEventListener("click",()=>{ue(ae(r)),document.getElementById("location-code").scrollIntoView()}),l.appendChild(s),t.draw(o),o.addEventListener("click",n=>{let a=t.locationFromCoordinates(n.offsetX,n.offsetY);t.highlightLocation(o,a),fe(t.displayComponents(a),t.explain(a))})}}function Me(){let e=window.decodeURIComponent(window.location.hash.slice(1));ue(ae(e))}function fl(){window.addEventListener("hashchange",()=>{Me()})}function ul(){let e=document.getElementById("location-code");e.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),e.blur())}),e.addEventListener("focus",()=>{e.innerText==="\u2026"&&(e.innerText="")}),e.addEventListener("blur",()=>{ue(ae(e.innerText)),e.innerText.trim()===""&&(e.innerHTML="\u2026")})}function al(){document.getElementById("copy-btn").addEventListener("click",()=>{let e=document.getElementById("location-code").innerText;navigator.clipboard.writeText(e)})}function ml(){let e=document.getElementById("share-btn");if(!Ee){e.style.display="none";return}e.addEventListener("click",()=>{let l=document.getElementById("location-code").innerText,r=window.location.href,t={title:"IGGG",text:l,url:r};navigator.canShare(t)?navigator.share(t):navigator.clipboard.writeText(`${l} \u2014 ${r}`)})}function Le(){nl(),Me(),fl(),ul(),al(),ml(),window.addEventListener("resize",()=>{for(let[e,l]of Object.entries(L)){let r=document.getElementById(`map-${e}`);l.draw(r)}})}document.readyState!=="loading"?Le():window.addEventListener("DOMContentLoaded",()=>{Le()});})();
