let a = "0";
let b ="";
let c=false;
let d= null;
let e= NaN;
let f=undefined;
let g=1;
let h="1";
let i="\t\n"
let j=0;
let cmpt1=0;
let cmpr1;
let cmptr2;
cmpr1= (j==b);
cmptr2= (j===b);
console.log(JSON.stringify(j) + "==" + JSON.stringify(b).padEnd(10)+ "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(j) + "===" + JSON.stringify(b).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((j==b)==true && (j===b)==false){
    cmpt1+=1;
}
cmpr1= (j==a);
cmptr2= (j===a);
console.log(JSON.stringify(j) + "==" + JSON.stringify(a).padEnd(10) + "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(j) + "===" + JSON.stringify(a).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((j==a)==true && (j===a)==false){
    cmpt1+=1;
}
cmpr1= (j==c);
cmptr2= (j===c);
console.log(JSON.stringify(j) + "==" + JSON.stringify(c).padEnd(10)+ "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(j) + "===" + JSON.stringify(c).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((j==c)==true && (j===c)==false){
    cmpt1+=1;
}
cmpr1= (b==c);
cmptr2= (b===c);
console.log(JSON.stringify(b) + "==" + JSON.stringify(c).padEnd(10) + "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(b) + "===" + JSON.stringify(c).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((b==c)==true && (b===c)==false){
    cmpt1+=1;
}
cmpr1= (d==f);
cmptr2= (d===f);
console.log(JSON.stringify(d) + "==" + String(JSON.stringify(f)).padEnd(10) + "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(d) + "===" + String(JSON.stringify(f)).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((d==f)==true && (d===f)==false){
    cmpt1+=1;
}
cmpr1= (d==c);
cmptr2= (d===c);
console.log(JSON.stringify(d) + "==" + JSON.stringify(c).padEnd(10) + "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(d) + "===" + JSON.stringify(c).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((d==c)==true && (d===c)==false){
    cmpt1+=1;
}
cmpr1= (e==e);
cmptr2= (e===e);
console.log(JSON.stringify(e) + "==" + JSON.stringify(e).padEnd(10) + "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(e) + "===" + JSON.stringify(e).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((e==e)==true && (e===e)==false){
    cmpt1+=1;
}
cmpr1= (g==h);
cmptr2= (g===h);
console.log(JSON.stringify(g) + "==" + JSON.stringify(h).padEnd(10) + "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(g) + "===" + JSON.stringify(h).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((g==h)==true && (g===h)==false){
    cmpt1+=1;
}
cmpr1= (i==j);
cmptr2= (i===j);
console.log(JSON.stringify(i) + "==" + JSON.stringify(j).padEnd(10) + "->" + JSON.stringify(cmpr1) + "|" + JSON.stringify(i) + "===" + JSON.stringify(j).padEnd(10) + "->" + JSON.stringify(cmptr2));
if((i==j)==true && (i===j)==false){
    cmpt1+=1;
}
console.log("-----------------------------------------------------------------\n");
console.log(JSON.stringify(cmpt1).padEnd(2) + "paire(s) où == et === donnent des résultats différents");