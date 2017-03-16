/**
 * Created by Buddhi on 3/15/2017.
 */

(function () {
    'use strict';

    angular.module('project-care')
        .service('webservice', webservice);

    webservice.$inject = ['$http', '$q'];

    function webservice($http, $q) {
        var service = {
            call: call
        };
        return service;

        function call(url, method, data) {
            console.log(url);

            url = 'http://localhost:8000' + url;

            var obj = {};

            var promises = [];
            if (method == "get") {
                promises.push($http.get(url));
            } else if (method == "post") {
                promises.push($http.post(url, data));
            } else if (method == "delete") {
                promises.push($http.delete(url + data));
            } else if (method == "put") {
                promises.push($http.put(url, data));
            }

            return $q.all(promises).then(function (response) {
                obj = response[0];
                var deferred = $q.defer();
                deferred.resolve(obj);
                return deferred.promise;
            });

        }

    }
})();

