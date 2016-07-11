flovigo.service('TaskService', function() {

    var TaskService = this;

    var calendar_opts = {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
    };

    this.getTasksForAttribute = function(id) {
        return _.filter(TaskService.get(), function(item){
            return item.attributes === id;
        });
    };

    this.groupByUrgenceAndImportance = function(task) {
        if (task.important && task.urgent) return "Urgent & Important";
        if (task.urgent) return "Urgent";
        if (task.important) return "Important";
        return "Trivial";
    };

    this.getByContext = function(tasks) {
        tasks = _.reject(tasks, 'is_closed');
        return _.reduce(TaskService.get(), function(result, task) {
            return _.reduce(task.contexts, function(prev, task_properties) {
                (prev[task_properties] || (prev[task_properties] = [])).push(task);
                return prev;
            }, result);
        }, {});
    };

    this.get = function(id) {
        if (!id && id != 0) return TaskService.tasks;
        else return _.find(TaskService.tasks, {id: id});
    };

    this.tasks = [{
        id: 0,
        title: "Look at Cal Newport blog from Rory",
        is_closed: false,
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        attributes: null,
        contexts: ['Computer', 'Home'],
        urgent: false,
        important: false
    }, {
        id: 1,
        is_closed: false,
        title: "Create insight template",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        attributes: null,
        contexts: ['Computer'],
        urgent: true,
        important: true
    },{
        id: 2,
        is_closed: false,
        title: "Action siteground email",
        description: "Hello Lou Bichard, There are 30 days left until the expiration of your Domain name with .co.uk extension (survivorsunited.co.uk) on 14th July, 2016. In order to provide you with a smooth and uninterrupted service, we will renew it automatically on the next bill date - 29th June, 2016. We will charge you 12.95 GBP (excluding VAT) for the renewal period of 24 months. If you need any help, you are welcome to come to our live chat or phone line (1.866.605.2484). If you consider cancelling the service, you can request it from your Customer area -> Billing section.",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        attributes: null,
        contexts: ['Computer'],
        urgent: true,
        important: true
    }, {
        id: 3,
        is_closed: false,
        title: "Investigate paypal emails",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        attributes: null,
        contexts: ['Computer'],
        urgent: true,
        important: false
    },{
        id: 4,
        is_closed: false,
        title: "Write finance template in excel",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        attributes: 0,
        contexts: ['Computer', 'Morning'],
        urgent: true,
        important: false
    }];


})
