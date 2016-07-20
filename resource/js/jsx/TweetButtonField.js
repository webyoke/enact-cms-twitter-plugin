Enact.react_class.Fields.TweetButton = React.createClass({displayName: "TweetButton",

    mixins: [Enact.react_class.Fields.BaseField],

    getInitialState: function(){

        if(!parseInt(this.props.field.entry_field_id)){
            return {
                show_button : true,
                atts        : this.props.field.options
            };
        }//if

        return JSON.parse(this.props.field.value);

    },//getInitialState

    store: function(){
        if(this.state.show_button){
            this.state.atts = this.refs['atts'].state;
        }//if
        this.props.field.value = _.pick(this.state,'show_button','atts');
    },//store

    checkForErrors: function(){
        return false;
    },//checkForErrors

    onChange: function(event){
        this.setState({
            show_button : event.target.checked
        });
    },//onChange

    render: function(){

        var atts;

        if(this.state.show_button){
            atts = React.createElement(Enact.react_class.TweetButtonAttributes, {data: this.state.atts, ref: "atts"});
        }//if

        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "checkbox-con clearfix"}, 
                    React.createElement("input", {type: "checkbox", name: "show_button", onChange: this.onChange, checked: this.state.show_button}), 
                    React.createElement("label", null, "Show Tweet Button?")
                ), 
                atts
            )
        );

    }//render

});
