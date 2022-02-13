
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


/**
 * ユニークIDを生成
 * @param {number} [digits=1000] 末尾に付与する乱数の桁
 * @return {string} 生成したユニークIDを返す
 */
export function getUniqueId( myStrong?: number | undefined ) {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}