console.log('start');

var rest_api = angular.module("rest_api", []);

rest_api.config(["$routeProvider",function ($routeProvider) {
        $routeProvider
            .when('/user', {
                controller: 'userController',
                templateUrl: 'partial/user.html'
            })
            .when('/user/showSingleUser', {
                controller: 'userController',
                templateUrl: 'partial/userPages/showSingleUser.html'
            })
            .when('/user/showAllUser', {
                controller: 'userController',
                templateUrl: 'partial/userPages/showAllUser.html'
            })
            .when('/user/updateUser', {
                controller: 'userController',
                templateUrl: 'partial/userPages/updateUser.html'
            })
            .when('/user/showSingleBook', {
                controller: 'userController',
                templateUrl: 'partial/userPages/showSingleBook.html'
            })
            .when('/user/showAllBooks', {
                controller: 'userController',
                templateUrl: 'partial/userPages/showAllBooks.html'
            })
           .when('/admin', {
                controller: 'adminController',
                templateUrl: 'partial/admin.html'
            })
            .when('/admin/addNewAdmin', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/addNewAdmin.html'
            })
            .when('/admin/showSingleAdmin', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/showSingleAdmin.html'
            })
            .when('/admin/showAllAdmins', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/showAllAdmins.html'
            })
            .when('/admin/deleteAdmin', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/deleteAdmin.html'
            })
            .when('/admin/updateAdmin', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/updateAdmin.html'
            })
            .when('/admin/addUser', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/addNewUser.html'
            })
            .when('/admin/ShowSingleUser', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/showSingleUser.html'
            })
            .when('/admin/showAllUser', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/showAllUser.html'
            })
            .when('/admin/deleteUser', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/deleteUser.html'
            })
            .when('/admin/updateUser', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/updateUser.html'
            })
            .when('/admin/addNewBook', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/addNewBook.html'
            })
            .when('/admin/showSingleBook', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/showSingleBook.html'
            })
            .when('/admin/showAllBooks', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/showAllBooks.html'
            })
            .when('/admin/deleteBook', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/deleteBook.html'
            })
            .when('/admin/updateBook', {
                controller: 'adminController',
                templateUrl: 'partial/adminPages/updateBook.html'
            })
            .when('/book', {
                controller: 'bookController',
                templateUrl: 'partial/book.html'
            })
            .when('/book/showSingleBook', {
                controller: 'bookController',
                templateUrl: 'partial/bookPages/showSingleBook.html'
            })
            .when('/book/showAllBooks', {
                controller: 'bookController',
                templateUrl: 'partial/bookPages/showAllBooks.html'
            })
            .when('/login', {
                controller: 'loninController',
                templateUrl: 'partial/login.html'
            })
           .otherwise({
                redirectTo:"/"
            })
    }
]);

rest_api.controller('userController', ['$scope', '$http',
    function ($scope, $http) {

        $scope.status;
        $scope.users;
        $scope.user;
        var urlBase = 'http://localhost:3000/user';

//        $scope.getUsers = function () {
            $http.get(urlBase)
                .success(function (users) {
                    $scope.users = users;
                    console.log(users);
                })
                .error(function (error) {
                    $scope.status = 'Unable to load users data: ' + error.message;
                });
//        };

        $scope.getUser = function (id) {
             $http.get(urlBase + '/' + id)
                .success(function (user) {
                    $scope.status = 'record fetched';
                    $scope.user = user;
                    console.log(user);
                })
                .error(function (error) {
                    $scope.status = 'Error retrieving user! ' + error.message;
                });
        };

        $scope.addUser = function (uname, gen) {
            //Fake customer data
            var usr = {
                name: uname,
                gender: gen
            };
            $http.post(urlBase, user)
                .success(function () {
                    $scope.status = 'Inserted user! Refreshing customer list.';
                    $scope.users.push(usr);
                    console.log(usr);
                }).
                error(function (error) {
                    $scope.status = 'Unable to insert customer: ' + error.message;
                });
        };

        $scope.updateUser = function (id,data) {
            $http.put(urlBase + '/' + id, data)
                .success(function () {
                    $scope.status = 'Updated user! Refreshing user list.';
                    console.log(id,data);
                })
                .error(function (error) {
                    $scope.status = 'Unable to update user: ' + error.message;
                });
        };

        $scope.deleteUser = function (id) {
            $http.delete(urlBase + '/' + id)
                .success(function () {
                    $scope.status = 'Deleted user! Refreshing customer list.';
                    for (var i = 0; i < $scope.users.length; i++) {
                        var usr = $scope.users[i];
                        if (usr._id === id) {
                            console($scope.users.splice(i, 1));
                            break;
                        }
                    }
                })
                .error(function (error) {
                    $scope.status = 'Unable to delete user: ' + error.message;
                });
        };


    }])
    .controller('adminController', ['$scope','$http',
        function ($scope, $http) {
            console.log("caught to grt users")

            $scope.status;
            $scope.admins;
            $scope.admin;

            var urlBase = 'http://localhost:3000/admin';

//            $scope.getAdmins = function () {
                $http.get(urlBase)
                    .success(function (admins) {
                        $scope.admins = admins;
                        console.log(admins);
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load users data: ' + error.message;
                    });
//            };

            $scope.getAdmin = function (id) {
                $http.get(urlBase + '/' + id)
                    .success(function (admin) {
                        $scope.status = 'record fetched';
                        $scope.admin = admin;
                        console.log(admin);
                    })
                    .error(function (error) {
                        $scope.status = 'Error retrieving user! ' + error.message;
                    });
            };

            $scope.addAdmin = function (uname, ugen) {
                //Fake customer data
                var data = {
                    name: uname,
                    gender: ugen
                };

                $http.post(urlBase, user)
                    .success(function () {
                        $scope.status = 'Inserted user! Refreshing customer list.';
                        $scope.admins.push(data);
                        $scope.admin=data;
                        console.log(data);
                    }).
                    error(function (error) {
                        $scope.status = 'Unable to insert customer: ' + error.message;
                    });
            };

            $scope.updateAdmin = function (id,data) {
                $http.put(urlBase + '/' + id, data)
                    .success(function () {
                        $scope.status = 'Updated user! Refreshing user list.';
                        console.log(id,data);
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to update user: ' + error.message;
                    });
            };

            $scope.deleteAdmin = function (id) {
                $http.delete(urlBase + '/' + id)
                    .success(function () {
                        $scope.status = 'Deleted user! Refreshing customer list.';
                        for (var i = 0; i < $scope.admins.length; i++) {
                            var adm = $scope.admins[i];
                            if (adm._id === id) {
                               console.log($scope.admins.splice(i, 1));
                                break;
                            }
                        }
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to delete user: ' + error.message;
                    });
            };
        }])
    .controller('bookController', ['$scope', '$http',
        function ($scope, $http) {

            $scope.status;
            $scope.books;
            $scope.book;

            var urlBase = 'http://localhost:3000/book';

//            $scope.getBooks = function () {
                $http.get(urlBase)
                    .success(function (books) {
                        $scope.books = books;
                        console.log(books);
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load users data: ' + error.message;
                    });
//            };

            $scope.getBook = function (id) {
                $http.get(urlBase + '/' + id)
                    .success(function (book) {
                        $scope.status = 'record fetched';
                        $scope.book = book;
                        console.log(book);
                    })
                    .error(function (error) {
                        $scope.status = 'Error retrieving user! ' + error.message;
                    });
            };

            $scope.addBook = function (bname, auth) {
                //Fake customer data
                var data = {
                    name: bname,
                    auther: auth
                };

                $http.post(urlBase, data)
                    .success(function () {
                        $scope.status = 'Inserted user! Refreshing customer list.';
                        $scope.books.push(data);
                        console.log(data);
                    }).
                    error(function (error) {
                        $scope.status = 'Unable to insert customer: ' + error.message;
                    });
            };

            $scope.updateBOOK = function (id,data) {
                $http.put(urlBase + '/' + id, data)
                    .success(function () {
                        $scope.status = 'Updated user! Refreshing user list.';
                        console.log(id+" "+data);
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to update user: ' + error.message;
                    });
            };

            $scope.deleteBook = function (id) {
                $http.delete(urlBase + '/' + id)
                    .success(function () {
                        $scope.status = 'Deleted user! Refreshing customer list.';
                        for (var i = 0; i < $scope.books.length; i++) {
                            var bk = $scope.books[i];
                            if (bk._id === id) {
                                console.log($scope.books.splice(i, 1));
                                break;
                            }
                        }
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to delete user: ' + error.message;
                    });
            };
        }]);