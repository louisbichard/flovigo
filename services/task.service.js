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

    this.groupByUrgenceAndImportance = function(task) {
        if (task.important && task.urgent) return "Urgent & Important";
        if (task.urgent) return "Urgent";
        if (task.important) return "Important";
        return "Trivial";
    };

    this.getByContext = function(tasks) {
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
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        contexts: ['Computer', 'Home'],
        urgent: false,
        important: false
    }, {
        id: 1,
        title: "Create insight template",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        contexts: ['Computer'],
        urgent: true,
        important: true
    }];
})
