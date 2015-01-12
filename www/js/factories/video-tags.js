demoApp.factory('videoTags', function(){ //$http object can be passed 
			var hashtags = [
				'ladiesofshred',
				'girlskateboarder', 
				'girlskater', 
				'girlswhoskate', 
				'girlswhoshred', 
				'hooplaskate', 
				'meowskateboards',
				'femaleskater', 
				'woodwardtahoegirlsweek',
				'girlsskatenetwork',
				'ogbetty'
			];

			var factory = {};
			
			factory.getHashtags = function(){
				return hashtags;
			};

			return factory;

		});
