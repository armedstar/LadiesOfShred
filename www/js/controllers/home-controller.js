demoApp.controller('HomeController', function ($scope, videoTags){
			
			function getAll(tags){
				var feeds = [];
				for (var i=0; i < tags.length; i++){
					feeds.push(new Instafeed({
						get: 'tagged',
						tagName: tags[i],
						clientId: '751b92ddcf974bb0ab1bd0c4658c4508',
						sortBy: 'random',
        				useHttp: true,
        				links: false,
        				resolution: 'low_resolution'
					}));
				}

				return feeds;

			}

			var allPhotos = getAll(videoTags.getHashtags());

			for(var i=0; i < allPhotos.length; i++){
				allPhotos[i].run();
			}

			
		});