ngTodo.controller('NgTodoCtrl', ['$scope', function($scope)
{
   $scope.todos = [
      { val: "A new cool thing", completed: false },
      { val: "A newer cooler thing", completed: true },
      { val: "A new cooler thing", completed: false },
      { val: "A newer cooler thing", completed: true },
      { val: "A newest cool thing", completed: false },
      { val: "A new coolest thing", completed: false },
   ];

   //$scope.newTask = '';
}]);
