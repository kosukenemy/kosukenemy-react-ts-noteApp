
export function convertStrToBool(str:string){
  if(typeof str != 'string'){ 
    return Boolean(str); 
  }
  try{
    var obj = JSON.parse(str.toLowerCase());
    return obj == true;
  }catch(e){
    return str != '';
  }
}