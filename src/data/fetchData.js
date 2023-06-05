
const fetchData = async (path)=>{
    const source = 'https://api.jikan.moe/v4/'

    try{
        let data = await fetch(source+path
            
        )
        if (!data){
            throw Error('No data')
        }
        return data.json()
    }catch(e){
        Error.value = e.message
    }
}


export default fetchData