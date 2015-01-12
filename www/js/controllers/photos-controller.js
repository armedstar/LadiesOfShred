demoApp.controller('PhotosController', function ($scope, photoTags){
			
			function getImageOnly(tags){
				var feeds = [];
				for (var i=0; i < tags.length; i++){
					feeds.push(new Instafeed({
						get: 'tagged',
						tagName: tags[i],
						clientId: '751b92ddcf974bb0ab1bd0c4658c4508',
        				useHttp: true,
        				links: false,
        				filter: function(image){
        					return image.type === 'image';
        				},
        				sortBy: 'most-recent',
        				resolution: 'standard_resolution',
        				template: '<img src="{{image}}"><br><div class="info"><p class="caption">{{caption}}</p><p class="postedBy">Posted by: <span class="author">{{model.user.full_name}}</span></p></div>',
        				after: function(){
        					$(function(){
    							var srcs = [],
        						temp;
    							$(".home img").filter(function(){
        							temp = $(this).attr("src");
        							if($.inArray(temp, srcs) < 0){
            							srcs.push(temp);   
            							return false;
        							}
        							return true;
    							}).remove();
							});
        				}
					}));
				}

				return feeds;

			}

			var imagesOnly = getImageOnly(photoTags.getHashtags());

			for(var i=0; i < imagesOnly.length; i++){
				imagesOnly[i].run();
			}

			
		});