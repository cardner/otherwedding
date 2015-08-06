"use strict";angular.module("weddingApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/registries",{templateUrl:"views/registries.html",controller:"RegistriesCtrl",controllerAs:"registries"}).when("/travel",{templateUrl:"views/travel.html",controller:"TravelCtrl",controllerAs:"travel"}).otherwise({redirectTo:"/"})}]),angular.module("weddingApp").controller("MainCtrl",["$scope","$location","$anchorScroll",function(a,b,c){a.gotoDirections=function(){b.hash("directions"),c()}}]),angular.module("weddingApp").controller("AboutCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("weddingApp").controller("RegistriesCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("weddingApp").controller("TravelCtrl",["$scope",function(a){a.message="Hello"}]);var app=angular.module("weddingApp");app.controller("RsvpCtrl",["$scope","$http","$log","$timeout",function(a,b,c,d){a.songs=[{id:"song1"}],a.addNewSong=function(){var b=a.songs.length+1;a.songs.push({id:"song"+b})},a.removeSong=function(){var b=a.songs.length-1;a.songs.splice(b)},a.rsvp=function(e){if(a.submitted=!0,!e.$invalid){var f={"entry.1339770440":a.name,"entry.1724497109":a.email,submit:"Submit"};b({url:"http://williamson-cardneau/api/google.php",method:"POST",data:f,dataType:"json",async:"isAsync",headers:{"Content-Type":"application/JSON","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, GET, OPTIONS","Access-Control-Allow-Headers":"status"}}).success(function(b,d){0===d||200===d||201===d?(a.name=null,a.email=null,a.attending=null,a.partyNum=null,a.guestname=null,a.dietary=null,a.songs=[{id:"song1"}],a.hotel=null,a.note=null,a.messages="We have successfully recieved your rsvp, and we are excited to have you share this day with us.",a.submitted=!1):(a.messages="Oops, i received your request, but it appears the monkies have miss-filed it.",c.error(d))}).error(function(b,c){a.messages="the internet tubes are clogged, try again later",console.log(c)})["finally"](function(){d(function(){a.messages=null},3e3)})}}}]),app.directive("honeypot",function(){return{require:"ngModel",link:function(a,b,c,d){d.$validators.integer=function(a){return d.$isEmpty(a)?!0:!1}}}}),angular.module("weddingApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Our Wedding",link:"#/"},{title:"About Us",link:"#/about"},{title:"Travel",link:"#/travel"},{title:"Registries",link:"#/registries"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}}]),angular.module("weddingApp").run(["$templateCache",function(a){a.put("views/about.html",'<nav ng-include="\'views/navbar.html\'"></nav> <div class="col-xs-12"> <h2>About</h2> <div class="col-xs-12 col-sm-6 sm-pad-l-0"> <p>Ryan and Cory met in August 2013, on a date at The Olde German, a bar that it turns out neither liked. In the first few months, they bonded over cycling, cocktails, food, and beer. Ryan wowed Cory with his baked spaghetti and willingness to work on her bike for free. Cory impressed him with [her sluttiness? constant grammar corrections? not being disgusted by dog vomit?].....</p> <p> Their first relationship test was the pets: Ryan\'s dog Ralph and Cory\'s cat Leloo. Ryan, never fond of cats, quickly became Leloo\'s favorite person, while Cory won Ralph\'s affection by letting him crawl all over her. By the summer of 2014, the pets were warming up to each other in Ryan and Cory\'s new house and welcoming another dog, Zelda.</p> </div> <div class="col-xs-12 col-sm-6 sm-pad-r-0"> <p> When Ryan\'s habit of getting up first and waking her with coffee continued for months after moving in together, Cory knew she had to "lock that sh*t down." The couple decided to get married sometime in the fall of 2014, but nobody can remember exactly when.</p> <p> These days, Cory still appreciates the coffee in the morning, but she\'s also grateful for Ryan\'s calm demeanor and steadiness to ground her when she\'s stressed. They still love cycling, cooking, eating, and boozing together, but they also spend a lot of evenings just cuddling with all their furry babies on the couch. They\'re so excited celebrate the next chapter of their relationship, together with their loved ones, at their wedding in January 2016.</p> </div> </div> <img src="images/wedding-homepage1.7620b6e1.jpg" class="col-xs-12 no-pad" alt="photo of cory and ryan loving each other deeply"> <div class="col-xs-12 col-sm-6"> <h3 class="gold cursive">Cory Williamson</h3> <p>Cory Williamson grew up in rainy, rural northern California, just 13 miles from the Oregon border. At University of California Berkeley, she earned a BA in Comparative Literature and spent 6 months living and studying in Bordeaux, France. After graduating, she combined her writing skills with her interest in tech to start her career as a software technical writer. Growing up, she always dreamed of moving to a big city, but after a few years in the SF Bay Area and Chicago, ended up in Ann Arbor and decided to put down roots. She spends her off-time listening to NPR, cycling, trying new restaurants, and watching copious television. Right now, her favorite shows are The Good Wife, Death in Paradise, Game of Thrones, and Orange is the New Black.</p> </div> <div class="col-xs-12 col-sm-6"> <h3 class="gold cursive">Ryan Cardneau</h3> <p>Ryan Cardneau thinks, therefore he is.</p> </div> <aside ng-include="\'views/rsvp.html\'" ng-show="rsvp"></aside> <footer ng-include="\'views/footer.html\'"></footer>'),a.put("views/footer.html",'<div class="col-xs-12"> <hr> <p class="uppercase navy bold">&copy;2015 williamson <span class="cursive gold">&ndash; &amp; &ndash;</span> cardneau</p> </div>'),a.put("views/main.html",'<nav ng-include="\'views/navbar.html\'"></nav> <div class="jumbotron no-pad" ng-controller="MainCtrl"> <div class="container no-pad no-marg"> <!-- <img src="images/wedding-homepage.82ec3ab0.jpg" class="img-responsive" alt="photo of cory and ryan loving each other deeply" /> --> <div class="col-sm-6 no-pad col-xs-12 xs-absolute"> <img src="images/flowers.470ca351.jpg" class="" alt="photo of cory and ryan loving each other deeply"> </div> <div class="col-sm-6 col-xs-11 xs-centered xs-bkg-white xs-pad-5"> <h2 class="font-center m-top-30">With great joy, we</h2> <h3 class="bold font-center">&ndash; Cory Williamson <span class="cursive">&amp;</span> Ryan Cardneau &ndash;</h3> <h4 class="font-center">annouce our wedding</h4> <h5 class="col-xs-12 col-sm-6 centered no-float block bold no-marg no-pad m-top-10 font-center">Ceremony <span class="cursive">&amp;</span> Afterparty</h5> <ul class="centered block no-float col-xs-12 col-sm-6 no-pad m-top-2 font-center no-bull"> <li>January 17, 2016 @ 4:15PM</li> <li>Vinology - Lower Level</li> <li><address>110 S Main St, Ann Arbor, MI 48104</address></li> </ul> <a class="btn btn-default col-xs-6 no-float block centered m-top-10" ng-click="gotoDirections()">Directions <span class="cursive">&amp;</span> RSVP</a> </div> </div> </div> <div class="row no-marg reception"> <hr> <div class="col-sm-6 col-xs-12"> <h5 class="cursive gold">Ceremony</h5> <blockquote> Come join us January 17th starting @ 4:15PM to celebrate the union of Cory <span class="cursive">&amp;</span> Ryan. </blockquote> </div> <div class="col-sm-6 col-xs-12"> <h5 class="cursive gold">Reception</h5> <blockquote> Reception to follow after a short ceremony hosted in Vinology\'s lovely Bubble Room. </blockquote> </div> <div class="col-xs-12"> <p>*Drinks and heavy horderves to be provided throughout the night.</p> </div> </div> <hr> <div id="directions" class="row"> <nav class="secondary-nav"> <button class="btn btn-default col-xs-12 col-sm-4 col-sm-offset-1" ng-class="{\'active\':rsvp}" title="rsvp our wedding" ng-click="[rsvp = ! rsvp]"><span class="glyphicon glyphicon-send"></span><span class="hidden-xs navy"> RSVP</span></button> <button class="btn btn-default col-xs-12 col-sm-4 col-sm-offset-2" ng-class="{\'active\':map}" title="directions to the wedding" ng-click="[map = ! map]"><span class="glyphicon glyphicon-map-marker"></span><span class="hidden-xs navy"> Directions</span></button> </nav> <aside ng-include="\'views/rsvp.html\'" ng-show="rsvp"></aside> <div class="map_container no-marg" ng-show="map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.8823363356123!2d-83.748958!3d42.28103500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae3da4e097d3%3A0x93101938b16068ef!2sVinology!5e0!3m2!1sen!2sus!4v1431272431251" width="100%" height="100%" frameborder="0" style="border:0" class="map_canvas"></iframe> </div> </div> <img class="col-xs-12 no-pad" src="images/homepage-footer-bkg.1bb97673.png" alt="ryan loving cory"> <footer ng-include="\'views/footer.html\'"></footer>'),a.put("views/navbar.html",'<header id="mainMenu" class="navbar navbar-default navbar-static-top" ng-controller="NavbarCtrl"> <div class="navbar-header"> <button class="navbar-toggle" type="button" ng-click="isCollapsed = !isCollapsed"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="/" class="navbar-brand">Williamson<br><span class="cursive gold">&ndash; &amp; &ndash;</span><br>Cardneau<br>Wedding</a> </div> <div collapse="isCollapsed" class="navbar-collapse collapse col-xs-12" id="navbar-main"> <ul class="nav navbar-nav"> <li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"> <a ng-href="{{item.link}}">{{item.title}}</a> </li> </ul> </div> </header>'),a.put("views/registries.html",'<nav ng-include="\'views/navbar.html\'"></nav> <div class="col-md-12"> <h2 class="">Registries</h2> <p>We are thrilled to have you at our wedding, witnessing our marriage and celebrating with us. Your presence is absolutely gift enough.</p> <p>If you want to give us something more, we\'ve listed some items that would do just that.</p> <div class="row"> <div class="col-xs-12 col-sm-6"> <h3 class="bold">Zola: Honeymoon Registry &amp; Group Gifts</h3> <p>We want to start our marriage off with some fun time away from the daily grind -- in Barcelona! We\'ve registered for experiences that we\'d love to have there -- bingeing on tapas and paella, visiting the Salvador Dali museum, cycling the surrounding wine region. We hope that these are moments we\'ll look back on fifty years from now.</p> </div> <div class="col-xs-12 col-sm-6"> <h3 class="bold">MyRegistry: Items to Fill Our Home</h3> <p>We are grateful to live very comfortably in a wonderful home. We\'ve registered for some items that would make that even better, like cocktail glasses for our dinner parties and 2+ player board games that\'ll keep us entertained through long Michigan winters.</p> </div> </div> </div> <aside ng-include="\'views/rsvp.html\'" ng-show="rsvp"></aside> <footer ng-include="\'views/footer.html\'"></footer>'),a.put("views/rsvp.html",'<div class="col-xs-12" id="rsvp"> <p id="messages" class="alert alert-success" ng-show="messages" ng-bind="messages"></p> <p ng-show="progress.active()">Sending&hellip;</p> <form class="form-horizontal col-sm-10 col-xs-12" ng-controller="RsvpCtrl" name="rsvpForm" novalidate role="form"> <div class="form-group"> <span class="label label-danger error" ng-show="submitted && rsvpForm.name.$error.required">please enter:</span> <label for="inputName" class="col-sm-4 col-xs-12 control-label">Name</label> <div class="col-sm-8 col-xs-12"> <input type="text" class="form-control" id="inputName" placeholder="First and Last name" list="names" required autocomplete="off" name="name" ng-model="name"> <datalist name="names" id="names"> <option value="Len Cardneau"> <option value="Lorel Gardner"> </datalist> </div> </div> <div class="form-group"> <span class="label label-danger error" ng-show="submitted && rsvpForm.email.$error.required">please enter:</span> <span class="label label-danger" ng-show="submitted && rsvpForm.$error.email">please enter a valid email address.</span> <label for="inputEmail" class="col-sm-4 col-xs-12 control-label">Email</label> <div class="col-sm-8 col-xs-12"> <input type="email" name="email" class="form-control" id="inputEmail" placeholder="Email" required name="email" ng-model="email" required> </div> </div> <div class="form-group"> <span class="label label-danger error" ng-show="submitted && rsvpForm.attending.$error.required">please select:</span> <label for="inputAttend" class="col-sm-4 col-xs-12 control-label">Are you able to attend?</label> <div class="radio col-xs-12 col-sm-4"> <label> <input type="radio" name="attending" ng-model="attending" id="attendingYes" value="Yes, I\'ll be there" required> Yes, I\'ll be there. </label> </div> <div class="radio col-xs-12 col-sm-4"> <label> <input type="radio" name="attending" ng-model="attending" id="attendingNo" value="No, I can\'t make it" required> No, I can\'t make it. </label> </div> </div> <div class="form-group"> <span class="label label-danger error" ng-show="submitted && rsvpForm.partyNum.$error.required">please enter:</span> <label for="inputParty" class="col-sm-4 col-xs-12 control-label">How many in your party?</label> <div class="radio col-xs-12 col-sm-3"> <label class="radio col-xs-6 col-sm-3"> <input type="radio" ng-model="partyNum" name="partyNum" id="partyNum1" value="1" required> 1 </label> <label class="radio col-xs-6 col-sm-3"> <input type="radio" ng-model="partyNum" name="partyNum" id="partyNum2" value="2" required> 2 </label> </div> </div> <div class="form-group animate-show" ng-show="partyNum == 2"> <label for="inputGuest" class="col-sm-4 col-xs-12 control-label">Guests name?</label> <div class="col-sm-8 col-xs-12"> <input type="text" class="form-control" name="guestname" ng-model="guestname" id="guestname" placeholder=""> </div> </div> <div class="form-group"> <label for="inputDietary" class="col-sm-4 col-xs-12 control-label">Food</label> <div class="checkbox dietary col-sm-8 col-xs-12"> <label> <input type="checkbox" value="" name="dietaryRestrictions" ng-model="ModelData.dietaryRestrictions"> I/we have dietary restrictions! </label> </div> </div> <div class="form-group" ng-show="ModelData.dietaryRestrictions"> <label for="inputDietary" class="col-sm-4 col-xs-12 control-label">What restrictions?</label> <div class="col-sm-8 col-xs-12"> <input type="text" class="form-control" name="dietary" id="dietary" placeholder="" ng-model="dietary"> </div> </div> <div class="form-group"> <label for="inputSong" class="col-sm-4 col-xs-12 control-label">What songs would get you dancing?</label> <ul class="col-sm-8 col-xs-12"> <li class="input-group m-top-2 col-xs-12" data-ng-repeat="song in songs"> <input type="text" ng-model="song.name" name="partySongs" class="form-control song" id="inputSong" placeholder="Artist - Title"><span ng-click="removeSong()" class="glyphicon glyphicon-remove input-group-addon font-center" ng-show="$last"></span> </li> </ul> <div class="col-sm-8 col-xs-12 col-sm-offset-4"> <a class="btn btn-default" ng-click="addNewSong(song)">Suggest Another Track</a> </div> </div> <div class="form-group"> <label for="inputHotel" class="col-sm-4 col-xs-12 control-label">Where will you be staying?</label> <div class="col-sm-8 col-xs-12"> <input type="text" class="form-control" name="hotel" id="inputHotel" placeholder="" describedby="inputSuccessHotel" ng-model="hotel"> </div> </div> <div class="form-group"> <label for="inputNote" class="col-sm-4 col-xs-12 control-label">Would you like to include a note with your RSVP?</label> <div class="col-sm-8 col-xs-12"> <textarea class="form-control" id="note" name="note" rows="3" ng-model="note"></textarea> </div> </div> <input type="text" name="honeypot" class="honeyPot visuallyhidden" value="" max="0"> <div class="form-group"> <div class="col-sm-offset-4 col-sm-8 col-xs-12"> <button class="btn btn-default bold col-sm-7 col-xs-12 green-bkg white" ng-disabled="progress.active()" ng-click="rsvp(rsvpForm)" name="submit" id="submit">RSVP</button> <button class="btn btn-default col-sm-4 col-xs-12 col-sm-offset-1" type="reset" name="reset">reset</button> </div> </div> </form> </div>'),a.put("views/travel.html",'<nav ng-include="\'views/navbar.html\'"></nav> <div class="row col-xs-12 header no-marg"> <h2>Travel/Directions</h2> <!-- <img src="images/skinnybubbles.694b3436.jpg" class="" alt="vinology resturant bubble room" /> --> <div class="map_container"> <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d2951.8823363356123!2d-83.748958!3d42.28103500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!1i0!3e6!4m0!4m5!1s0x883cae3da4e097d3%3A0x93101938b16068ef!2sVinology%2C+110+S+Main+St%2C+Ann+Arbor%2C+MI+48104!3m2!1d42.281034999999996!2d-83.748958!5e0!3m2!1sen!2sus!4v1431278790467" width="100%" height="100%" class="map_canvas" frameborder="0" style="border:0"></iframe> </div> </div> <div class="col-xs-12 col-sm-4"> <h3 class="bold">Where to Stay</h3> <p>We encourage you to look around at some different options, like <a href="https://www.airbnb.com/s/Ann-Arbor--MI--United-States?checkin=01%2F16%2F2016&checkout=01%2F18%2F2016&guests=2&room_types%5B%5D=Entire+home%2Fapt&room_types%5B%5D=Private+room&ss_id=wyune57j" title="AirBnB for wedding" class="gold">AirBnB</a>, but for your convenience we\'ve also reserved a block of rooms:</p> <h4 class="gold"><a class="gold" href="http://www.wyndham.com/hotels/michigan/ann-arbor/wyndham-garden-ann-arbor/hotel-overview" title="wyndham hotel ann arbor mi">Wyndham Garden</a> <address> 2900 Jackson Ave<br> Ann Arbor, Mi 48103 </address> <p>$120 + taxes/night</p> </h4></div> <div class="col-xs-12 col-sm-4"> <h3 class="bold">Getting Around Town</h3> <p>If you\'re staying at Wyndam Garden, you\'ll want a car to get around, but downtown Ann Arbor is most convenient by foot. If you\'re staying downtown, you\'ll have easy access to small grocery stores, restaurants, and drugstores without a car. Our venue, Vinology, is also located right on Main St. in the heart of downtown. Uber and Lyft also service the area.</p> </div> <div class="col-xs-12 col-sm-4"> <h3 class="bold">Getting to Ann Arbor</h3> <p>The nearest airport is Detroit Metro (DTW). From there, it\'s a 30-45 minute drive to Ann Arbor. If you aren\'t renting a car, we\'d recommend reserving a shuttle through <a href="http://www.annarborairportshuttle.net" target="_blank" title="Ann Arbor Airport shuttle to ryan and corys wedding">Ann Arbor Airport Shuttle</a>. Roundtrip for two people is under $100 through this service. Taxis are available at the airport, but prices vary and can be up to $80 one way.</p> </div> <div class="col-xs-12 col-sm-12"> <h3 class="bold">What to Eat</h3> <p class="col-xs-12 col-sm-8 no-pad clear no-float">For a midwestern town, Ann Arbor has some great food options. Most restaurants have good vegetarian selections and several have gluten-free options.</p> <div class="row"> <dl class="col-xs-12 col-sm-4"> <dt><h4 class="gold"><a href="http://www.isalita.com" target="_blank" title="Isalita restruant Ann Arbor MI">Isalita</a><h4></h4></h4></dt> <dd>Upscale Mexican fare</dd> <dd><address>341 E Liberty St, Ann Arbor, MI 48104</address></dd> <dd><i>Try Our Favorites:</i> Truffle Guacamole, Esquites, Margaritas</dd> </dl> <dl class="col-xs-12 col-sm-4"> <dt><h4 class="gold"><a href="http://savasrestaurant.com/" target="_blank" title="Sava restruant Ann Arbor MI">Sava</a><h4></h4></h4></dt> <dd>Contemporary restaurant with great Sunday brunch buffet</dd> <dd><address>216 S State St, Ann Arbor, MI 48104</address></dd> <dd><i>Try Our Favorites:</i> Pecan Chicken Salad, Brunch Buffet</dd> </dl> <dl class="col-xs-12 col-sm-4"> <dt><h4 class="gold"><a href="http://www.fritabatidos.com" target="_blank" title="Frita Batidos restruant Ann Arbor MI">Frita Batidos</a><h4></h4></h4></dt> <dd>Fast casual restaurant with Cuban-inspired food and drinks</dd> <dd><address>117 W Washington St, Ann Arbor, MI 48104</address></dd> <dd><i>Try Our Favorites:</i> Loaded Plantains, Chorizo Frita w/ Muenster Cheese, Sangria</dd> </dl> </div> <div class="row"> <dl class="col-xs-12 col-sm-4"> <dt><h4 class="gold"><a href="http://maniosteria.com" target="_blank" title="Mani restruant Ann Arbor MI">Mani</a><h4></h4></h4></dt> <dd>Isalita\'s Italian sister restaurant</dd> <dd><address>341 E Liberty St, Ann Arbor, MI 48104</address></dd> <dd><i>Try Our Favorites:</i> Farmer\'s Market Pizza, Cocktails</dd> </dl> <dl class="col-xs-12 col-sm-4"> <dt><h4 class="gold"><a href="http://thefleetwooddiner.com/" target="_blank" title="Fleetwood restruant Ann Arbor MI">Fleetwood</a><h4></h4></h4></dt> <dd>24-hour diner, complete with servers who call you "honey"</dd> <dd><address>300 S Ashley St, Ann Arbor, MI 48104</address></dd> <dd><i>Try Our Favorites:</i> Hippie Hash, Half & Half Burger</dd> </dl> <dl class="col-xs-12 col-sm-4"> <dt><h4 class="gold"><a href="http://www.jollypumpkin.com/jp/home" target="_blank" title="Jolly Pumpkin restruant Ann Arbor MI">Jolly Pumpkin</a><h4></h4></h4></dt> <dd>Brewery and restaurant known for sour ales</dd> <dd><address>311 S Main St, Ann Arbor, MI 48104</address></dd> <dd><i>Try Our Favorites:</i> Steak Salad, Mushroom Torta, Truffle Fries</dd> </dl> </div> <div class="row"> <dl class="col-xs-12 col-sm-4"> <dt><h4 class="gold"><a href="http://www.oldtownaa.com/" target="_blank" title="Old Town restruant Ann Arbor MI">Old Town</a><h4></h4></h4></dt> <dd>The townies\' favorite bar and restaurant</dd> <dd><address>122 W Liberty St, Ann Arbor, MI 48104</address></dd> <dd><i>Try Our Favorites:</i> Burgers, Clam Chowder, Rotating Tap</dd> </dl> </div> </div> <div class="col-xs-12 col-sm-12"> <h3 class="bold">Activities</h3> <p class="col-xs-12 col-sm-8 no-float clear no-pad">You can easily fill an afternoon just strolling around downtown and checking out the local shops, but if you\'d like to plan some activities, we recommend checking these out.</p> <div class="row"> <dl class="col-xs-12 col-sm-6"> <dt><h4 class="gold"><a href="http://www.lsa.umich.edu/mbg/see/matthaei.asp" target="_blank" title="Botanical Gardens fun times Ann Arbor MI">Botanical Gardens</a><h4></h4></h4></dt> <dd>The weather puts a damper on the outdoor portions, but the Converatory stays open through the winter.</dd> </dl> <dl class="col-xs-12 col-sm-6"> <dt><h4 class="gold"><a href="http://www.michtheater.org" target="_blank" title="Michigan & State Theaters fun times Ann Arbor MI">Michigan &amp; State Theaters</a><h4></h4></h4></dt> <dd>Located downtown, you won\'t find the latest blockbuster at these local cinemas, but you will find a nice calendar of independent film and classics.</dd> </dl> </div> <div class="row"> <dl class="col-xs-12 col-sm-6"> <dt><h4 class="gold"><a href="http://www.theark.org" target="_blank" title="The Ark fun times Ann Arbor MI">The Ark</a><h4></h4></h4></dt> <dd>This acoustic music venue has over 300 shows per year, mostly folk.</dd> </dl> <dl class="col-xs-12 col-sm-6"> <dt><h4 class="gold"><a href="http://www.a2gov.org/departments/Parks-Recreation/play/Pages/Ice-Skate-and-Play-Hockey.aspx" target="_blank" title="Ice Skating fun times Ann Arbor MI">Ice Skating</a><h4></h4></h4></dt> <dd>There are several ice skating rinks in town that open during the winter.</dd> </dl> </div> <div class="row"> <dl class="col-xs-12 col-sm-6"> <dt><h4 class="gold"><a href="http://www.literatibookstore.com" target="_blank" title="Literati Bookstore fun times Ann Arbor MI">Literati Bookstore</a><h4></h4></h4></dt> <dd>Literati opened a couple years ago and features events and a coffee shop, in addition to a lovely selection of books.</dd> </dl> <dl class="col-xs-12 col-sm-6"> <dt><h4 class="gold"><a href="http://www.vaultofmidnight.com/store/" target="_blank" title="Vault of Midnight fun times Ann Arbor MI">Vault of Midnight</a><h4></h4></h4></dt> <dd>Our local comic book and board game store has an amazing selection of graphic novels, indie board games, and just cool stuff.</dd> </dl> </div> </div> <aside ng-include="\'views/rsvp.html\'" ng-show="rsvp"></aside> <footer ng-include="\'views/footer.html\'"></footer>')}]);