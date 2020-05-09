

export function existEmote(emotes,mensaje){
  var ArrPalabras = mensaje.split(' ');
  for(let i=0;i<ArrPalabras.length;++i){
      let isEmote = findEmote(emotes,ArrPalabras[i]) 
      if( isEmote.length > 0 ){
          console.log(isEmote[0]['code'])
          console.log('existe')
          return isEmote;
      }
      
  }
  return null
}

function findEmote(emotes,code){
  return emotes.filter(
      function(emotes){ return emotes.code == code }
  );  
}