// using the IIFE concept here. This is great that it will help us stop polluting the global scope.
// the larger picture of this can be seen when we minfy our code and try to push it and we see that different 
// files using potentially the same variable names might end up collapsing our application.

(function(){
    const app = angular.module('storeApp',[]);
app.controller('panelController',function($scope){
    
$scope.tab = 2;
    
    $scope.setTab = function(newValue){
        $scope.tab = newValue;
    };
    
    $scope.isSet = function(selectedTab){
       return $scope.tab === selectedTab;
    };
    
    
});
  const gems =[
        {
        name: 'Bangalore Gem',
        price: 2.95,
        description: 'Found in Urban areas!',
        canPurchase: false,
        soldOut:false,
            images:[{ full:  "table_imges1.jpg" }]
                
    },
        {
        name: 'Hyderabad Gem',
        price: 2.95,
        description: 'Found in Hyderabad deep forests!',
        canPurchase: true,
        soldOut: true,
            images:[{ full:  "table_imges1.jpg" }]
               
    },
      {
        name: 'Chennai Gem',
        price: 2.95,
        description: 'Found in Chennai beaches!',
        canPurchase: true,
        soldOut: false,
            images:[{ full:  "table_imges1.jpg" }]
    }
    ];
app.controller('gemProductController',function($scope){
    $scope.gemProducts = gems;
});
})();
    
