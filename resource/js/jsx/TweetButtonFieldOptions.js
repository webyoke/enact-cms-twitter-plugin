Enact.react_class.FieldOptions.TweetButton = React.createClass({displayName: "TweetButton",

    write: function(){
        return this.refs['atts'].state;
    },//write

    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("p", null, "Set defaults which can be overridden by the user using the field"), 
                React.createElement(Enact.react_class.TweetButtonAttributes, {data: this.props.options, ref: "atts"})
            )
        );
    }//render

});
