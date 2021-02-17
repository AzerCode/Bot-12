# Bot-12 Command List

## Administrator [15]

 | Name | Description | Usage | Example | 
 | ---- | ----------- | ----- | ------- | 
 | ban | Ban a member from the server | ban <user> [reason] | ^ban @Kool being annoying | 
  | delwarn | Remove a user's warn using an id | delwarn <id> | ^delwarn x7WuyIV-lcTFj-Hjyldpg | 
  | goodbye | Set the goodbye channel/message for the server | goodbye <type> [value] | ^goodbye message {member:mention} has joined the {server:name}! :D | 
  | kick | Kick a member out of the server | kick <user> [reason] | ^kick 774352602678558790 masspinged | 
  | massban | Massban users | massban <@user1 @user2 @user3> [reason] | ^massban @Kool @Rythm @DankMemer cuz im mean >:D | 
  | mute | Mute a member | mute <user> [time] [reason] | ^mute @Kool 1d constant spam | 
  | plugins | Enable or show plugins | plugins <type> [<property> <value>] | ^plugins enable antilinks | 
  | poll | An advanced poll command able to hold multiple questions | poll <option1 \| option2 \| option3 \| ...> | ^poll "How's your day" Good \| Meh \| Terrible |
  | prefix | Show or set the prefix for the server | prefix [prefix] | ^prefix bot! | 
  | purge | Purge messages from a channel | purge <@user \| userID \| channel \| bots] <amount> | ^purge @Kool 10 | 
  | softban | Remove all messages from the user | softban <user> [reason] | ^softban @Kool ads | 
  | unmute | Unmute a user | unmute | ^unmute @Kool agreed to stop spamming | 
  | warn | Warn a user | warn <user> <reason> | ^warn @Kool does not like chicken nuggets :( | 
  | warnings | Display a user's warnings | warnings <user> | ^warnings @Kool | 
  | welcome | Set the welcome channel/message for the server | welcome <type> [value] | ^welcome channel #welcome

## Developer [6]

 | Name | Description | Usage | Example | 
 | ---- | ----------- | ----- | ------- | 
 | addemoji | Adds the emoji to the server | addemoji <emoji> [name] |
  | disable | Disable a command in either guild or globally | disable <command> [guildID] |
  | enable | Enable a command in either guild or globally | enable <command> [guildID] |
  | eval | Evaluates a piece of code | eval <code> |
  | reload | Reload a file/command | reload <command/alias> |
  | test | A test file for developers | test  |

## Economy [2]

> ECONOMY NOT FINISHED

 | Name | Description | Usage | Example | 
 | ---- | ----------- | ----- | ------- | 
 | balance | View the balance of a member | balance [user] | ^bal @Kool | 
  | work | Work a job gaining coins | work <user> | ^work | 

## General [11]

 | Name | Description | Usage | Example | 
 | ---- | ----------- | ----- | ------- | 
 | bitcoin | See bitcoin values or convert bitcoin to currency | bitcoin [amount] | ^bitcoin 3 | 
  | botinfo | Gives detailed information about the bot | botinfo | ^botinfo | 
  | calculate | Calculate a math expression | calculate <expression> | ^calculate ( 10^3 ) * 10 | 
  | docs | Look at the discord.js docs | docs [query] | ^docs GuildChannelManager#create | 
  | google | Google a query with valid search results | google <query>  | ^google Discord | 
  | help | Sends you a list of commands | help [command] | ^help ban | 
  | ping | A simple ping command | ping | ^ping | 
  | serverinfo | Get detailed information about the server | serverinfo | ^serverinfo | 
  | snipe | Check for deleted messages 👀 | snipe | ^snipe | 
  | userinfo | Get detailed information about a user | userinfo [user] | ^userinfo @Kool | 

## Music [21]

 | Name | Description | Usage | Example | 
 | ---- | ----------- | ----- | ------- | 
 | applyfilter | Apply a filter to the music | applyfilter <filter> |
  | bassboost | Bassboost the music | bassboost |
  | clean | Clean the queue of the bot for the server, improves music quality! | clean |
  | clearqueue | Clear the queue of the server | clearqueue |
  | filters | Show the applied filters to the server | filters [filter name] |
  | join | Make the bot join voice channel you are in | join  |
  | leave | Leave the voice channel the bot is in | leave |
  | loop | Loop the music | loop |
  | lyrics | Show the lyrics for the current song | lyrics |
  | nightcore | Enable nightcore mode  | nightcore |
  | pause | Pause the current playing music | pause |
  | play | Play music into the connected voice channel | play <youtube link \| youtube id \| youtube playlist> |
  | playing | View what you're playing with progress bar | playing |
  | queue | View the current queue in the server | queue |
  | resume | If the music was paused earlier, resume it again |  |
  | search | Search for a video with details | search <video> |
  | shuffle | Shuffle the queue for the server! | shuffle |
  | skip | Skip the current playing song | skip |
  | songinfo | Gives detailed information about a song | songinfo <video> |
  | stop | Stops the music | stop |
  | volume | Set the volume of the song | volume <volume> |