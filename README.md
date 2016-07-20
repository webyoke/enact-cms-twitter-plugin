#Twitter Plugin for Enact CMS
Plugin for [Twitter](https://twitter.com).

##Functionality

Provides two custom fields you can use in your section layouts:

- **Tweet** : Alows content authors to paste Tweet URLs generating an embeded tweet.
- **Tweet Button** : Allows content authors to create custom tweet buttons for sharing content.

Also provides the ability to embed timelines and follow buttons.

###Tweets
Create a Tweet field and add it to one of your section layouts, paste in a twitter post url and your good to go.

Embed the widget by calling the field:
```
{{ entry.yourTweetField }}

{# or #}

{{ entry.yourTweetField.getTweetHtml }}
```

If you want to embed a Tweet widget without using a field you can do so by accessing the plugin:
```
{{ enact.plugin.Twitter.embed('https://twitter.com/linode/status/721067700231999488') }}
```

You can pass in options to customize the embeded tweet widget as described
[here](https://dev.twitter.com/web/embedded-tweets/parameters).

```
{% set options = { 'theme' : 'dark', 'link-color' : #FFF' } %}

{{ entry.yourTweetField.getTweetHtml(options) }}

{{ enact.plugin.Twitter.embed('https://twitter.com/linode/status/721067700231999488', options) }}
```


###Tweet Button
Create a Tweet Button field and add it to one of your section layouts. You can specify defaults options when
creating the field as specified [here](https://dev.twitter.com/web/tweet-button/parameters).

Embed the Tweet Button by calling the field:
```
{{ entry.yourTweetButtonField }}

{# or #}

{{ entry.yourTweetButtonField.getButtonHtml }}
```

If you want to embed a Tweet Button without using a field you can do so by accessing the plugin:
```
{{ enact.plugin.Twitter.tweetButton }}
```

You can pass in options to customize the tweet button as described
[here](https://dev.twitter.com/web/tweet-button/parameters). If you pass options they will override any set options
by the field or the content author.

```
{% set options = { 'text' : 'Spread the love', 'hashtags' : 'love,viral,hippie' } %}

{{ entry.yourTweetButtonField.getButtonHtml(options) }}

{{ enact.plugin.Twitter.tweetButton(options) }}
```


###Follow Button
You can create a follow button super easy, pass the users handle as the first arguement and any options as defined
[here](https://dev.twitter.com/web/follow-button/parameters) as the second arguement.

```
{{ enact.plugin.Twitter.followButton('TwitterDev', { 'show_count' : 'false' }) }}
```


###Timelines
You can embed a timeline super easy, pass the users handle as the first arguement and any options as defined
[here](https://dev.twitter.com/web/embedded-timelines/parameters) as the second arguement.

```
{{ enact.plugin.Twitter.timeline('TwitterDev', { 'tweet-limit' : 3 }) }}
```

