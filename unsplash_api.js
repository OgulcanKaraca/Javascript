class UnsplashApi{
    constructor(){
        this.baseUrl = 'https://api.unsplash.com';
        this.clientID = 'Client-ID OqkeSm2RCk8Lx1mpNVPP9RPTUJI5eeDEY9gPbLUHYwE';
        this.axiosNesne =axios.create({
            baseURL : this.baseURL,
            headers: {
            Authorization : this.clientID
            },
            params: {
                query: 'animal'
            }
        });
    }
    
   async randomResimGetir(){
    try{
        const resimResponse = await this.axiosNesne.get('https://api.unsplash.com//photos/random');
       // console.log(resimResponse.data.urls.regular);
        return resimResponse.data.urls.regular;
    }catch(err){
        console.log(err);
    }
    }
}