flovigo.service('coreService', function() {

    var CoreService = this;

    this.get = function() {
        return CoreService.core;
    };

    this.core = [{
        title: "Health & Body",
        score: 6,
        id: 0
    },{
        title: "Emotional, Spiritual & Personal Growth",
        score: 5,
        id: 1        
    },{
        title: "Intimate Relationship",
        score: 5,
        id: 2        
    },{
        title: "Social & Fun",
        score: 5,
        id: 3        
    },{
        title: "Family & Friends",
        score: 6,
        id: 4        
    },{
        title: "Work & Career",
        score: 7,
        id: 5        
    },{
        title: "Money & Finance",
        score: 2,
        id: 6        
    },{
        title: "Something else!?",
        score: 2,
        id: 7        
    }];
})
