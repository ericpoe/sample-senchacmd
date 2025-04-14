/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Sample.senchacmd.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },



    onConfirm: function (choice) {
        let testing1 = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };
        let testing2 = [
            'Strawberry',
            'Eggplant',
            'Nectarine',
            'Cherry',
            'Huckleberry',
            'Apple',
        ];
        if (choice === 'yes') {
            Ext.Msg.alert('Testing ES11 Optional Chaining & Null Coalescing', 'You chose: ' + testing1?.city ?? 'City not found');
            console.log(testing1?.city ?? 'City not found');
        }
        if (choice === 'no') {
            Ext.Msg.alert('Testing ES14 Array toSorted', 'You chose: ' + testing2.toSorted());
            console.log(testing2.toSorted());
        }
    }
});
