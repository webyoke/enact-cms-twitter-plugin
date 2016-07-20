Enact.react_class.FieldOptions.TweetButton = React.createClass({

    write: function(){
        return this.refs['atts'].state;
    },//write

    render: function(){
        return (
            <div>
                <p>Set defaults which can be overridden by the user using the field</p>
                <Enact.react_class.TweetButtonAttributes data={this.props.options} ref='atts'/>
            </div>
        );
    }//render

});
