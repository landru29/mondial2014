'use strict';

/* Services */

angular.module('userService', [])
        .factory('UserService', function() {
            var ParseService = {
                name: 'Parse',

                /**
                 * login a user
                 * 
                 * @return promise
                 */
                login: function(username, password) {
                    return Parse.User.logIn(username, password);
                },


                /**
                 * logout a user
                 * 
                 * @return promise
                 */
                logout: function() {
                    return Parse.User.logOut();
                },

                /**
                 * get the current user
                 * 
                 * @return Parse.User
                 */
                getCurrentUser: function() {
                    return Parse.User.current();
                },
                
                /**
                 * Create a new user
                 * 
                 * @return promise
                 */
                userNew: function(username, password, email, language) {
                    return Parse.User.signUp(username, password, {email: email, lang: language});
                },

                /**
                 * Check if someone is connected
                 * 
                 * @return boolean
                 */
                isLoggedIn: function() {
                    return (this.getCurrentUser() !== null);
                }
            };

            return ParseService;

        });