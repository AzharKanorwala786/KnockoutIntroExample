$(document).ready(function () {

    var Model = function () {
        var self = this;

        self.name = ko.observable();
        self.meal = ko.observable();
        self.price = ko.observable();
        self.itemArray = ko.observableArray();

        self.addItem = function () {
            self.itemArray.push(new item(self.name(), self.meal(), self.price()));
            self.name('');
            self.meal('');
        };
    };

    function item(Name, Meal, Price) {
        var self = this;
        self.name = ko.observable(Name);
        self.meal = ko.observable(Meal);
        self.price = ko.observable(Price);
    }

    ko.applyBindings(new Model());

});