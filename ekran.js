class Ekran{
    constructor(){
        this.sakaGetirBtn = document.querySelector('.saka-getir-btn');
        this.sakaGetirBtn.addEventListener('click', ()=>this.sakaGetir());
    }
    async sakaGetir(){
       const rastgeleResim = await new UnsplashApi().randomResimGetir();
       const rastgeleSaka = await new JokeApi().randomSakaGetir();

       const tumSonuclar = {
           rastgeleResim,
           rastgeleSaka
       }
       this.ekranaSonuclariYazdir(tumSonuclar);
    }

    ekranaSonuclariYazdir(sonuclar){
        document.querySelector('.sonuc').innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="${sonuclar.rastgeleResim}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text text-danger">${sonuclar.rastgeleSaka}</p>
        </div>
        <div class="card-body mt-4">
            <!--<p class="card-text text-danger">internetten Türkçe şaka gelecek buraya</p>-->
          </div>
      </div>`;
    }
}