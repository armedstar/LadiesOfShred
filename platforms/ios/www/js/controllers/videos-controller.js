demoApp.controller('VideosController', function ($scope, videoTags){

			function getVideoOnly(tags){
				var feeds = [];

				for (var i=0; i < tags.length; i++){
					feeds.push(new Instafeed({
						get: 'tagged',
						tagName: tags[i],
						clientId: '751b92ddcf974bb0ab1bd0c4658c4508',
        				useHttp: true,
        				links: true,
        				sortBy: 'most-recent',
                        limit: 10,
        				filter: function(image){
        					return image.type === 'video';
        				},
        				resolution: 'standard_resolution',
        				template: '<video poster="{{image}}" src="{{model.videos.standard_resolution.url}}"></video><div class="info"><p class="caption">{{caption}}</p><p class="postedBy">Posted by: <span class="author">{{model.user.full_name}}</span></p></div>',
                        before: function(){
                            $("#pageLoader").show();
                        },
                        after: function(){
                            
                                             
        					var classID = 0;
        					var play = false;
        					
        					$('video').each(function(){
        						classID++;
        						$(this).attr('id', classID);
                                
                                /*$(function() {
                                    $('.' + classID).imageloader();
                                    console.log(classID + 'class image loaded');
                                });*/

        					});
                                             
                                             $(function() {
                                               $('video').imageloader();
                                               console.log('videos loaded');
                                             });
                                             
                            
                                             $(document).ready(function(){
                                                               $("#pageLoader").hide();
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