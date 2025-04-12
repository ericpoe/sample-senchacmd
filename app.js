/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Sample.senchacmd.Application',

    name: 'Sample.senchacmd',

    requires: [
        // This will automatically load all classes in the Sample.senchacmd namespace
        // so that application classes do not need to require each other.
        'Sample.senchacmd.*'
    ],

    // The name of the initial view to create.
    mainView: 'Sample.senchacmd.view.main.Main'
});
