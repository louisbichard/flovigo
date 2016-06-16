flovigo.service('attributeService', function() {

    var attributeService = this;

    this.get = function() {
        return attributeService.attributes;
    };

    this.attributes = [{
        title: "Create daily finance plan",
        is_focus: true,
        id: 0
    },{
        title: "Be more compassionate",
        is_focus: true,
        id: 1        
    },{
        title: "Assess how to become better skilled for work",
        is_focus: true,
        id: 2        
    }];
})
