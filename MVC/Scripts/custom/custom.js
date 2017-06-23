var demo = demo || {

    Init: function () {

        //var model = function () {

        //    var self = this;
        //    self.valone = ko.observable();
        //    self.valtwo = ko.observable();

        //    item = function (valueone, valuetwo) {
        //        var self = this;
        //        self.valone = ko.observable(valueone);
        //        self.valtwo = ko.observable(valuetwo);
        //    }

        //    self.addItem = function () {
        //        var self = this;
        //        self.sum = 

        //    }
        //}


        var Viewmodel = function () {
            var self = this;
            self.name = ko.observable();
            self.meal = ko.observable();
            self.price = ko.observable();
            self.itemArray = ko.observableArray();

            item = function(Name,Meal,Price) {
                var self = this;
                self.name = ko.observable(Name);
                self.meal = ko.observable(Meal);
                self.price = ko.observable(Price);
            }

            self.addItem = function () {
                self.itemArray.push(new item(self.name(), self.meal(), self.price()));
                self.name('');
                self.meal('');
            };
        }
        ko.applyBindings(new Viewmodel());
    },
}