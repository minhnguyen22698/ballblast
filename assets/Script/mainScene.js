cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        button: {
            default: null,
            type: cc.Button,
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Welcome to ball blast'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.button.node.on('click', this.callback, this)
    },
    callback: function () {
        cc.director.loadScene('gameScene')
    },
    // called every frame
    update: function (dt) {

    },
});
