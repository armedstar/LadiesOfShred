demoApp.factory('photoTags', function(){ //$http object can be passed 
			var hashtags = [
				'ladiesofshred',
                'girlskateuk',
                'skirtboarders',
				//'girlskater', 
				//'girlswhoskate', 
				//'girlswhoshred', 
				//'hooplaskate',
                //'meowskateboards',
				//'femaleskater', 
				//'woodwardtahoegirlsweek',
                'havefunordontcome'
				//'girlsskatenetwork',
				//'ogbetty'
			];

			var factory = {};
			
			factory.getHashtags = function(){
				return hashtags;
			};

			return factory;

		});