const valeurs=[0, 1, "", "0", null, undefined, NaN, false, [], {}];
for(let i=0; i<10; ++i)
{
    if(valeurs[i]===""){
        console.log("(chaine vide)-> truthy");
    }
    else {
        if(valeurs[i]){
            console.log(String(valeurs[i]) + "-> truthy");
        } else{
            console.log(String(valeurs[i]) + "-> falsy");
        }
    }
}