flovigo.service('attributeService', function() {

    var attributeService = this;

    this.getAttributesForCore = function(id) {
        return _.filter(attributeService.get(), function(item){
            return item.core === id;
        });
    };

    this.get = function(id) {
        if (!id && id != 0) return attributeService.attributes;
        else return _.find(attributeService.attributes, {id: id});
    };

    this.attributes = [{
        title: "Create daily finance plan",
        is_focus: true,
        core: 1,
        id: 0
    },{
        title: "Be more patient and realistic",
        is_focus: false,
        core: 1,
        id: 1
    },{
        title: "Be more compassionate",
        is_focus: true,
        core: 0,
        id: 2        
    },{
        title: "Assess how to become better skilled for work",
        is_focus: true,
        core: 0,
        id: 3        
    }];
})
