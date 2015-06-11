(function() {
  var app = angular.module('wandStore', []);

  app.controller('StoreController', function(){
    this.products = wands;
  });


  var wands = [
    { 
    	name: 'Elder', 
    	inches: 13.5, 
    	core: 'Dragon Heartstring', 
    	price: 2,
    	images:[
    	{
    		full: 'http://img4.wikia.nocookie.net/__cb20130807175734/harrypotter/images/4/43/Elder.png',
    		thumb: 'http://img2.wikia.nocookie.net/__cb20130807175734/harrypotter/images/thumb/4/43/Elder.png/250px-Elder.png'
    	}] 
    },
    { 
    	name: 'Holly', 
    	inches: 11, 
    	core: 'Unicorn Hair', 
    	price: 5.95,
    	images: [
    	{
    		full: 'http://img3.wikia.nocookie.net/__cb20130807192409/harrypotter/images/b/b8/Holly.png',
    		thumb: 'http://img2.wikia.nocookie.net/__cb20130807192409/harrypotter/images/thumb/b/b8/Holly.png/230px-Holly.png'
    	}] },
    { 
    	name: 'Oak', 
    	inches: 10, 
    	core: 'Phoenix Feather', 
    	price: 3.95,
    	images: [
    	{
    		full: 'http://img3.wikia.nocookie.net/__cb20120718231206/harrypotter/images/b/bf/Oak.png',
    		thumb: 'http://img3.wikia.nocookie.net/__cb20120718231206/harrypotter/images/thumb/b/bf/Oak.png/250px-Oak.png'
    	}]
    }
  ];
})();