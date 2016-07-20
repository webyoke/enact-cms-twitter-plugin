Enact.react_class.TweetButtonAttributes = React.createClass({displayName: "TweetButtonAttributes",

    getInitialState: function(){
        return this.props.data;
    },//getInitialState

    onChange: function(event){
        this.state[event.target.getAttribute('name')] = event.target.value;
    },//onChange

    render: function(){
        return (
            React.createElement("div", null, 

                React.createElement("label", null, "Text"), 
                React.createElement("small", null, "Pre-populated text highlighted in the Tweet composer."), 
                React.createElement("input", {type: "text", name: "text", onChange: this.onChange, defaultValue: this.state.text}), 

                React.createElement("label", null, "URL"), 
                React.createElement("small", null, "URL included with the Tweet."), 
                React.createElement("input", {type: "url", name: "url", onChange: this.onChange, defaultValue: this.state.url}), 

                React.createElement("label", null, "Hash Tags"), 
                React.createElement("small", null, "A comma-separated list of hashtags to be appended to default Tweet text."), 
                React.createElement("input", {type: "text", name: "hashtags", onChange: this.onChange, defaultValue: this.state.hashtags}), 

                React.createElement("label", null, "Via"), 
                React.createElement("small", null, "Attribute the source of a Tweet to a Twitter username.", React.createElement("br", null), 
                    "Appears appended to Tweet text as via @username. The Twitter account may appear in a list of recommended accounts to follow."
                ), 
                React.createElement("input", {type: "text", name: "via", onChange: this.onChange, defaultValue: this.state.via}), 

                React.createElement("label", null, "Related"), 
                React.createElement("small", null, "A comma-separated list of accounts related to the content of the shared URI.", 
                        React.createElement("br", null), 
                        "An included Twitter account may appear in a list of recommended accounts to follow."
                ), 
                React.createElement("input", {type: "text", name: "related", onChange: this.onChange, defaultValue: this.state.related})

            )
        );
    }//render
});
