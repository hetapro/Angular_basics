var app= angular.module("app",[]);

app.controller("helloWorldCtrl",function($scope)
        {

            $scope.helloMessage="Hello World";
			$scope.event={
				name:"ASDF",
				address:"India",
				sessions:[
				{
					name: "ABC"
				},
				{
					name: "DEF"
				},
				{
					name: "GHI"
				}
				
				],
				upVoteCount:0
			}
			$scope.upvoteClick=function(event){
				$scope.message="";
				event.upVoteCount++;
			};
			$scope.downvoteClick=function(event){
				if(event.upVoteCount!=0)
				{
				event.upVoteCount--;
				}
				else
				{
				$scope.message="*Can't decrease value as It reached 0."
				}
			};
        });

