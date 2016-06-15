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

    this.get = function() {
        return TaskService.tasks;
    };

    this.tasks = [{
        title: "A new task",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        urgent: false,
        important: false
    }, {
        title: "A new task 2",
        pretty_date: moment().add(1, 'days').calendar(null, calendar_opts),
        date: new Date(),
        urgent: false,
        important: false
    }, {
        title: "A new task 2",
        pretty_date: moment().add(2, 'days').calendar(null, calendar_opts),
        date: new Date(),
        urgent: false,
        important: true
    }, {
        title: "A new task 2",
        pretty_date: moment().add(3, 'days').calendar(null, calendar_opts),
        date: new Date(),
        urgent: true,
        important: true
    }, {
        title: "A new task 2",
        pretty_date: moment().add(1, 'days').calendar(null, calendar_opts),
        date: new Date(),
        urgent: true,
        important: false
    }, {
        title: "A new task 2",
        pretty_date: moment().add(4, 'days').calendar(null, calendar_opts),
        date: new Date(),
        urgent: true,
        important: true
    }, {
        title: "A new task 2",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        urgent: true,
        important: true
    }, {
        title: "A new task 2",
        pretty_date: moment().calendar(null, calendar_opts),
        date: new Date(),
        urgent: true,
        important: true
    }, {
        title: "A new task 2",
        pretty_date: moment().calendar(null, calendar_opts),
        date: moment().format('Do MMMM'),
        urgent: true,
        important: false
    }];
})
