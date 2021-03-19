const URL="https://covid19.mathdro.id/api";


let app = angular.module("Myapp",[]);
app.controller('Myctrl',($scope,$http)=>{
$scope.title="Stay Home Stay Safe";
$scope.changeValue=()=>{
    $scope.title="Covid-19 cases";
}

console.log("app loaded")

//calling api
$http.get(URL).then((response)=>{
    //success
console.log(response.data);
$scope.all_data=response.data;
},
(error)=>{
//error
console.log(error);
});
 
// get country data
let country=$scope.c;
$scope.get_country_data= () =>{
   
    if(country == ""){
        // $scope.c_data=undefined;
        return;
    }
}

// let country_URL = "https://covid19.mathdro.id/api/countries/" + country;
// 
$http.get('${URL}/countries/${country}').then((response)=>{
    //success
console.log(response.data);
$scope.c_data=response.data;
},
(error)=>{
//error
console.log(error);
});

});