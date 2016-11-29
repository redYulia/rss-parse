'use strict';


google.load("feeds", "1"); 

angular.module('myApp', ['ngSanitize']) 
.controller('RSSController', ['$scope', function($scope) { 
	
	$scope.changeUrl = function(url) {
		$scope.search = url;
	};
	$scope.update = function(){	
		findNews(); 
	}; 
	
	
	function findNews(){ 
		var loadedFeed = [];
		var feed = new google.feeds.Feed($scope.search); 
		feed.setNumEntries(10);
  		feed.load(function(result) { 
    		if (!result.error) { 
      			for (var i = 0; i < result.feed.entries.length; i++) { 
        			loadedFeed.push(result.feed.entries[i]); 
      			}
				$scope.$apply(function(){
            		$scope.items = loadedFeed;
        		});
    		}
  		}); 
		
	} 	
	$scope.openLink = function(link) {
		window.open(link);
	}
	
	

}]);

