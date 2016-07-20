Enact.react_class.Fields.Tweet = React.createClass({

    mixins : [Enact.react_class.Fields.BaseField],

    statics: {
        included_embed : false
    },//statics

    componentWillMount: function(){
        if(!Enact.react_class.Fields.Tweet.included_embed){
            $('body').append('<script async defer id="twitter-wjs" src="https://platform.twitter.com/widgets.js"></script>'); 
        }//if
    },//componentWillMount

    checkForErrors: function(){
        if(!this.props.field.required == 1 && !this.state.field.value){
            this.setError('You must enter a Twitter tweet url');
            return true;
        }//if
    },//checkForErrors

    store: function(){
        this.props.field.value = this.state.field; 
    },//store

    getInitialState: function(){

        console.log('Tweet field',this.props.field);

        var field = this.props.field.value,
            value = null,
            options = this.props.field.options;

        if(field){
            field = JSON.parse(field);
            value = field.value;
            options = field.options;
        }//if

        return {
            field : {
                value : value,
                options : options
            }
        };

    },//getInitialState

    onChange: function(event){
        var v = event.target.value,
            that = this;
        this.setState(function(state){
            state.field.value = v;
            return state;
        },function(){
            that.requestData();
        });

    },//onChange

    requestData : function(){
        var that = this;
        console.warn('Requesting Twitter ' , this.state.field.value);
        $.ajax({
            url : 'https://api.twitter.com/1/statuses/oembed.json?omit_script=true&url=' + this.state.field.value,
            type : 'GET',
            dataType : 'jsonp',
            success:function(r){
                that.setState(function(state){
                    state.field.options = r;
                    return state;
                },function(){
                    twttr.widgets.load()
                });
                console.log(r);
            }//success
        });
    },//requestData

    render: function(){

        console.log(this.props.field);

        var tweet = (this.state.field.options && this.state.field.options.html) ? this.state.field.options.html : null;

        if(tweet){
            tweet = <div dangerouslySetInnerHTML={{ __html : tweet }}/>;
        }//if

        return (
                <div>
                    <input type='text' defaultValue={this.state.field.value} onChange={this.onChange} placeholder='Paste Twitter URL...'/>
                    <div className={this.getErrorClass()}>{this.state.error}</div>
                    {tweet}
                </div>
            );

    }//render

});
