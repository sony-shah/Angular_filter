/// <reference path="angular.min.js" />
var filter = angular.module("mymodule", []);

filter.controller("mycontroller", function ($scope) {

    var emp = [

        { firstName: "soni", lastName: "Shah", gender: "female", salary: "500000" },
        { firstName: "varun", lastName: "yadav", gender: "male", salary: "50000" },
        { firstName: "shivam", lastName: "Dixit", gender: "male", salary: "450000" },
        { firstName: "kusum", lastName: "sharma", gender: "female", salary: "5000" },
        { firstName: "pinki", lastName: "sahani", gender: "female", salary: "600000" },
        { firstName: "pooja", lastName: "gupta", gender: "female", salary: "100000" }

    ];
    $scope.emp = emp;
});
   
