demoApp.controller('VideosController', function ($scope, videoTags){

			function getVideoOnly(tags){
				var feeds = [];
				var videos = [];
        		var buttons = [];

				for (var i=0; i < tags.length; i++){
					feeds.push(new Instafeed({
						get: 'tagged',
						tagName: tags[i],
						clientId: '751b92ddcf974bb0ab1bd0c4658c4508',
        				useHttp: true,
        				links: true,
        				sortBy: 'most-recent',
        				filter: function(image){
        					return image.type === 'video';
        				},
        				resolution: 'standard_resolution',
        				template: '<video autoplay="false" webkit-playsinline><source src="{{model.videos.standard_resolution.url}}"></video><div id="videoControls"><button type="button">Play</button></div><div class="info"><p class="caption">{{caption}}</p><p class="postedBy">Posted by: <span class="author">{{model.user.full_name}}</span></p></div>',
        				after: function(){
        					var classID = 0;
        					var btnID = 0;
        					var play = false;
        					
        					$('video').each(function(){
        						classID++;
        						$(this).attr('id', classID);

        					});

        					$('button').each(function(){
        						btnID++;
        						$(this).attr('id', btnID);
        					});

			    			$('button').click(function(event){
			    				var id = event.target.id;

			    				if( $('#' + id).get(0).paused == true){
			    					$('#' + id).get(0).play();
			    					$('button').html('Pause');
			    				} else {
			    					$('#' + id).get(0).pause();
			    					$('button').html('Play');
			    				}

			    				$(window).one('scroll', function(){
			 						console.log('scroll');
			 						$('#' + id).get(0).currentTime = 0;
			 						$('#' + id).get(0).pause();
			    					$('button').html('Play');
			 					
			 					});

			    			});

        				}

					}));

				}

				return feeds;

			}

			var videoOnly = getVideoOnly(videoTags.getHashtags());

			for(var i=0; i < videoOnly.length; i++){
				videoOnly[i].run();
			}
			

			
		});