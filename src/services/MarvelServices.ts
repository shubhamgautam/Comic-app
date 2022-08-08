const ts = "ab"
const publicKey = "5a3c59448c760a8e41efe4da9b5bf57b";
const authToken = "2886dcaa132cdfaee956b42b561cbb34";
const baseUrl = 'https://gateway.marvel.com/v1/public/';
const authString = `ts=${ts}&apikey=${publicKey}&hash=${authToken}`;

export type apiParams = {
    titleStartsWith: string;
     characters: number[];
}
export type ReqParams = {
    queryKey: [string, apiParams, number]

}

export const GetComics = async (params: ReqParams ) => {
    const [, apiParams, page] = params.queryKey;
    const offset = page-1;
    const paramString = generateParamString(apiParams);
    const endPoint = "/comics";
    const response =  await fetch(`${baseUrl+endPoint}?${authString}${paramString}&limit=10${offset?'&offset='+offset*10:''}`);
    const data = await response.json();
    return data.data;
}

export const GetCharacters =  async () => {
    const endPoint = "/characters";
    console.log("inside get characters");
    const response =  await fetch(`${baseUrl+endPoint}?${authString}`);
    const data = await response.json();
    return data.data;
}

const generateParamString = (params: apiParams): string => {
    let paramString = '';
    Object.keys(params).forEach((key) =>{ 
        const currKey = key as keyof apiParams;
        let currentItem  = params[currKey];
        if(currentItem && currentItem.length){
            if(Array.isArray(currentItem)){
                currentItem = currentItem.join(',');
            }
            paramString+=`&${key}=${currentItem}` 
        }
    })
    return paramString;
}
