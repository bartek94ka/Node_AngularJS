var nodeTodo = angular.module('nodeTodo', []);

function mainController($scope, $http) {
        $scope.formData = {};
        $scope.status = true;

        $scope.cos = 'Ala ma kota';

        $scope.todoOption = 1;

        // when landing on the page, get all todos and show them
        $http.get('/api/todos')
                .success(function(data) {
                        $scope.todos = data;
                        console.log($scope.todos);
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {
                $http.post('/api/todos', $scope.formData)
                        .success(function(data) {
                                $('input').val('');
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
                $http.delete('/api/todos/' + id)
                        .success(function(data) {
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

        // update todo status
        // $scope.updateTodo = function(id, status){
        //         console.log(status);
        //         json = { "done": status }
        //         $http({ method: 'PATCH', url: '/api/todos/' + id, data : json
                        
        //         }).success(function(data) {
        //                 console.log(data);      
        //         })
        //         .error(function(data){
        //                 console.log('Error: ' + data);
        //         });
        // }
        $scope.updateTodo = function(id, status){
                console.log(status);
                json = { "done": status }
                $http.put( '/api/todos/' + id, json)
                .success(function(data) {
                        console.log(data);      
                })
                .error(function(data){
                        console.log('Error: ' + data);
                });
        }
}