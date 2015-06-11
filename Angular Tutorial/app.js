(function() {
  var app = angular.module('wandStore', []);

  app.controller('StoreController', function(){
    this.products = wands;
  });


  var wands = [
    { name: 'Elder', inches: 13.5, core: 'Dragon Heartstring', price: 2.95 },
    { name: 'Holly', inches: 11, core: 'Unicorn Hair', price: 5.95 },
    { name: 'Oak', inches: 10, core: 'Phoenix Feather', price: 3.95 }
  ];
})();