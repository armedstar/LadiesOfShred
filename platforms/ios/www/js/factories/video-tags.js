demoApp.factory('videoTags', function(){ //$http object can be passed 
			var hashtags = [
				'ladiesofshred',
				//'girlskateboarder',
				//'girlskater',
				//'girlswhoskate',
				'girlswhoshred', 
				'hooplaskate', 
				'meowskateboards',
				//'femaleskater',
                'girlskateuk',
                'skirtboarders',
				'woodwardtahoegirlsweek',
                'havefunordontcome',
				'girlsskatenetwork',
				'ogbetty'
			];

			var factory = {};
			
			factory.getHashtags = function(){
				return hashtags;
			};

			return factory;

		});
