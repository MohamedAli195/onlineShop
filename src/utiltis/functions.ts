/**
 * 
 * @param {string} txt - text that i want slice it 
 * @param {number} [max=50] - number of chars that i want max txt lenght
 * @returns - text that i slice it 
 */
export function txtSlicer(txt:string,max:number=20){
    if(txt.length>=max)return  `${txt.slice(0,max)} ...`
    return txt

}