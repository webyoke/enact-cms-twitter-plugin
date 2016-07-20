Enact.react_class.TweetButtonAttributes = React.createClass({

    getInitialState: function(){
        return this.props.data;
    },//getInitialState

    onChange: function(event){
        this.state[event.target.getAttribute('name')] = event.target.value;
    },//onChange

    render: function(){
        return (
            <div>

                <label>Text</label>
                <small>Pre-populated text highlighted in the Tweet composer.</small>
                <input type='text' name='text' onChange={this.onChange} defaultValue={this.state.text}/>

                <label>URL</label>
                <small>URL included with the Tweet.</small>
                <input type='url' name='url' onChange={this.onChange} defaultValue={this.state.url}/>

                <label>Hash Tags</label>
                <small>A comma-separated list of hashtags to be appended to default Tweet text.</small>
                <input type='text' name='hashtags' onChange={this.onChange} defaultValue={this.state.hashtags}/>

                <label>Via</label>
                <small>Attribute the source of a Tweet to a Twitter username.<br></br>
                    Appears appended to Tweet text as via @username. The Twitter account may appear in a list of recommended accounts to follow.
                </small>
                <input type='text' name='via' onChange={this.onChange} defaultValue={this.state.via}/>

                <label>Related</label>
                <small>A comma-separated list of accounts related to the content of the shared URI.
                        <br></br>
                        An included Twitter account may appear in a list of recommended accounts to follow.
                </small>
                <input type='text' name='related' onChange={this.onChange} defaultValue={this.state.related}/>

            </div>
        );
    }//render
});
