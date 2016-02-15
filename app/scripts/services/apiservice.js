'use strict';

/**
 * @ngdoc service
 * @name anthropocenesiteApp.apiService
 * @description
 * # apiService
 * Factory in the anthropocenesiteApp.
 */
angular.module('anthropocenesiteApp')
  .factory('apiService', function () {
    var baseurl = 'http://dicto-ao.herokuapp.com/api/'
        return {
            getEntities : function() {
                var deferred = $q.defer();
                $http.get(baseurl+'entities').success(function(data){
                    deferred.resolve(data);
                }).error(function(){
                    deferred.reject("An error occured while fetching file");
                });
                return deferred.promise;
            },
            getEntity : function(id) {
                var deferred = $q.defer();
                $http.get(baseurl+'entities/'+id).success(function(data){
                    deferred.resolve(data);
                }).error(function(){
                    deferred.reject("An error occured while fetching file");
                });
                return deferred.promise;
            },
            getChunk : function(id) {
                var deferred = $q.defer();
                $http.get(baseurl+'chunks/'+id).success(function(data){
                    deferred.resolve(data);
                }).error(function(){
                    deferred.reject("An error occured while fetching file");
                });
                return deferred.promise;
            },
            getPlaylists : function() {
                var deferred = $q.defer();
                $http.get(baseurl+'playlists').success(function(data){
                    deferred.resolve(data);
                }).error(function(){
                    deferred.reject("An error occured while fetching file");
                });
                return deferred.promise;
            },
            getPlaylist : function(id) {
                var deferred = $q.defer();
                $http.get(baseurl+'playlists/'+id).success(function(data){
                    deferred.resolve(data);
                }).error(function(){
                    deferred.reject("An error occured while fetching file");
                });
                return deferred.promise;
            },
            getNetwork : function(params){
              var serviceUrl = 'network';
              var deferred = $q.defer();

              $http({
                  method: 'GET',
                  url : baseUrl + serviceUrl,
                  params : params
                })
              .success(function(data){
                deferred.resolve(data);
              }).error(function(){
                deferred.reject("An error occured while fetching file");
              });

              return deferred.promise;
            },
            getFile : function(url){
                var deferred = $q.defer();
                $http.get(url).success(function(data){
                    deferred.resolve(data);
                }).error(function(){
                    deferred.reject("An error occured while fetching file");
                });

                return deferred.promise;
            },
            getVideoUrl : function(id) {
                return videobaseurl + id + ".mp4";
            },
            getThumbUrl : function(videoId, chunkId) {
                var thumburl = "antropovids/thumbs/output/";
                chunkId = chunkId.replace(videoId+"-","");
                var ch = chunkId.split("-")[0];
                return baseurl + thumburl + videoId + "/chunk-" + (parseInt(ch)+1) + "-sh-2.png";
            }
        }
    });
