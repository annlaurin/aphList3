var Experigen =  {
	settings: {

        // SETUP: Enter Experiment Name
		experimentName: "aphRussianNumberList3", // use only A-Z, a-z, 0-9
		
		databaseServer: "http://db.phonologist.org/",

		online: true,
		
		strings: {
		    // SETUP: Enter Title for Browser Window
			windowTitle:     "HSE",
			connecting:		 "Подключаемся...",
			loading:         "Загружаю данные...",
			soundButton:     "    ►    ",
			continueButton:  "   Дальше   ",
			errorMessage:    "Возникла непредвиденная ошибка. Просим прощения за неудобство.",
			emptyBoxMessage: "Пожалуйста, заполните эту форму."
		},
		
		audio: true,
		
		recordResponseTimes: true,
		
		progressbar: {
			visible: true, 
			adjustWidth: 6,
			percentage: false
		},
		
		items: "resources/index.txt",
		
		otherresources: {	
		},

		folders: {
			views: "views/",
			sounds: "resources/sounds/",
			pictures: "resources/pictures/"
		},
	
		footer: "views/footer.html",
		missingview: "views/missingview.ejs"
	}	
};


