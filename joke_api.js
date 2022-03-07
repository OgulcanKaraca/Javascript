class JokeApi{
    constructor(){
        this.baseUrl = 'https://api.chucknorris.io';
        this.axiosNesne =axios.create({
            baseURL : this.baseURL,
        });
    }
    
   async randomSakaGetir(){
    try{
        const sakaResponse = await this.axiosNesne.get('https://api.chucknorris.io/jokes/random');
        //console.log(sakaResponse.data.value);
        return sakaResponse.data.value;
    }catch(err){
        console.log(err);
    }
    }
}