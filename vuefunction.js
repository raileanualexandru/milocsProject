var Accueil = {template: `<div id="bodyindex">
<br><br>
<div class="container">
<div class="row">
    <div class="col-12 col-md-6">
        <div class="card">
            
            <div class="card-body">
                <h5 class="card-title">le film </h5>
                <img class="card-img-top" src="images/19.jpg" alt="film cover">
                <p class="card-text">
                  <ul>
                      <li><strong>ANNÉE:</strong> 2001</li>
                      <li><strong>DURÉE:</strong> 125 MINUTES</li>
                      <li><strong>UNIVERS:</strong> ANIMATION JAPONAISE, FANTASTIQUE, SURNATUREL</li>
                      <li><strong>THÈMES:</strong> AMOUR PARENTAL, ARGENT, ASIE, AUTONOMIE, CONSOMMATION, CUPIDITÉ, DÉMÉNAGEMENT, DRAGON, ÉCOLOGIE, INTÉGRATION, MAGIE, NOSTALGIE, POLITESSE, QUÊTE IDENTITAIRE, RELIGION, SURPROTECTION, TOLÉRANCE, TRAVAIL, VOYAGE INITIATIQUE</li>
                  </ul>
                </p>
            </div>
        </div>
    </div>  
    <div class="col-12 col-md-6">
   
        <div class="card">
            
            <div class="card-body">
                <h5 class="card-title">bande annonce</h5>
                <div class="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/5-cro68n7CE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="card-text"> Un film d'animation de Hayao Miyazaki

                    Avec les voix japonaises de Rumi Hiiragi, Miyu Irino, Yumi Tamai
                    
                    Chihiro, dix ans, a tout d'une petite fille capricieuse. Elle s'apprête à emménager avec ses parents dans une nouvelle demeure.
                    Sur la route, la petite famille se retrouve face à un immense bâtiment rouge au centre duquel s'ouvre un long tunnel. De l'autre côté du passage se dresse une ville fantôme. Les parents découvrent dans un restaurant désert de nombreux mets succulents et ne tardent pas à se jeter dessus. Ils se retrouvent alors transformés en cochons.
                    Prise de panique, Chihiro s'enfuit et se dématérialise progressivement. L'énigmatique Haku se charge de lui expliquer le fonctionnement de l'univers dans lequel elle vient de pénétrer. Pour sauver ses parents, la fillette va devoir faire face à la terrible sorcière Yubaba, qui arbore les traits d'une harpie méphistophélique. 
                     </p>
            
            </div>
        </div>

    </div>
</div>
</div>
<br><br>
</div>`};
var FilmEnLigne = {template:`<div id="filmonline">
<br>
<div class="container">
    <div class="row">
       <div class="col-12">
                <div class="card">
                     <div class="card-body" id="cardfilm">
                        <h5 class="card-title">le film en ligne </h5>
                        <div class="embed-responsive embed-responsive-16by9">
                        <iframe src="https://api1594742197.multikland.net/embed/movie/416" allow="autoplay"allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen=""></iframe>
                         </div>  
                        <p class="card-text">
                        </p>
                    </div>
                </div>
             </div>
         </div>
    </div>
    <br>
</div>`};
var Persons = {template:`<div id="ghiblipersons">
<center>
<h1>StudioGhibli personnes:</h1>
 <p v-for="people in people"><strong>{{people.name}}</strong></p>

  </center>  

</div>`,
data: function(){
    return{people: []}},
    created: function(){
        fetch("https://ghibliapi.herokuapp.com/people").then((response)=>{return response.json()}).then((data)=>{this.people = data}).catch(error=>console.log(error))}
    };
var Films = {
    template:`<div id="ghiblifilms">
     <div class="bs-docs-section">
            <h2 id="other" class="post-header">Other Short Films</h2>
            <hr class="header-line">
            <div class="row">
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#the_whale_hunt" title="The Whale Hunt" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/kujiratori.jpg" alt="The Whale Hunt" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">The Whale Hunt</h5></div>
                        </div>
                    </a>
                </div>
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#mei_and_the_baby_cat_bus" title="Mei and the Baby Cat Bus" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/meitokonekobasu.jpg" alt="Mei and the Baby Cat Bus" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">Mei and the Baby Cat Bus</h5></div>
                        </div>
                    </a>
                </div>
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#the_day_i_bought_a_star" title="The Day I Bought a Star" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/hoshiwokattahi.jpg" alt="The Day I Bought a Star" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">The Day I Bought a Star</h5></div>
                        </div>
                    </a>
                </div>
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#mon_mon_the_water_spider" title="Mon Mon the Water Spider" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/mizugumomonmon.jpg" alt="Mon Mon the Water Spider" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">Mon Mon the Water Spider</h5></div>
                        </div>
                    </a>
                </div>
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#a_sumo_wrestlers_tail" title="A Sumo Wrestler's Tail" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/chuzumo.jpg" alt="A Sumo Wrestler's Tail" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">A Sumo Wrestler's Tail</h5></div>
                        </div>
                    </a>
                </div>
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#mr_dough_and_the_eggprincess" title="Mr. Dough and the Egg Princess" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/pandanetotamagohime.jpg" alt="Mr. Dough and the Egg Princess" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">Mr. Dough and the Egg Princess</h5></div>
                        </div>
                    </a>
                </div>
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#treasure_hunting" title="Treasure Hunting" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/takarasagashi.jpg" alt="Treasure Hunting" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">Treasure Hunting</h5></div>
                        </div>
                    </a>
                </div>
                <div class="col-ss-6 col-sm-6 col-md-4">
                    <a href="http://www.ghibli-museum.jp/en/films/works/#boro_the_caterpillar" title="Boro the Caterpillar" class="panelarea">
                        <div class="panel panel-square panel-default">
                            <img src="http://www.ghibli-museum.jp/en/images/kemusshinoboro.jpg" alt="Boro the Caterpillar" class="panel-img-top">
                            <div class="panel-footer"><h5 class="text-ellipsis mt5 mb5">Boro the Caterpillar</h5></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>            
    </div>`,
    data: function(){
        return{films: []}},
        created: function(){
            fetch("https://ghibliapi.herokuapp.com/films").then((response)=>{return response.json()}).then((data)=>{this.films = data}).catch(error=>console.log(error))}
        };
var Contact = {
    template: `<div id = "contactpage">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
        
      <div class="carousel-item active">
        <img src="images/10.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="images/11.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="images/12.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
<!-- Form-->
<!-- form test 1-->
<div class="container">
    <div class="row">
        <div class="col">
            <form>
                <h5>Avez-vous des questions? Remplir le formulaire!</h5><br>
                <label for="fname">Nom:</label><br>
                <input type="text" id="fname" name="fname"><br>
                <label for="lname">Prenom:</label><br>
                <input type="text" id="lname" name="lname"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br><br>
                <label for="message">Laissez un message</label><br>
                <textarea id="message" name="message">Votre message</textarea><br>
                <button type="submit"class="btn btn-primary">Envoyé</button>
            </form>
        </div>
    </div>
</div>
    </div>`
};  

            
routes = [
        {path: "/accueil",component: Accueil},
        {path: "/filmenligne", component: FilmEnLigne},
        {path: "/films", component: Films},
        {path: "/persons",component:Persons},
        {path: "/contact",component:Contact}
            ];
            
 var router = new VueRouter({routes});
 var app = new Vue({router}).$mount("#app");

 
