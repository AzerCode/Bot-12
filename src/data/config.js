module.exports = {
    /**
     * Fill config values with your desired things
     */
    "token": "ODA4NDEwNzkyNDIwMDQ4OTc2.YCGJOA.l-81-tMvbl2Uz26ttVyMSeoGdeE",
    "google_api_key": "AIzaSyCbtj-nkM0sTjWXSyyPGoegCBtUQtAikwE",
    "support":"https://discord.gg/JHJQ4tG2rf",
    "owners": [
        "774352602678558790",
        "660552441166823462"
    ],
    "defaultSettings": {
        "prefix": "^",
        "joinchannel": null,
        "joinmessage": "Welcome to the server {member:mention}! We are now at {server:members} members!",
        "leavechannel": null,
        "leavemessage": "{member:mention} left the server... We are down to {server:members} members",
        "modrole": null
    },
    "defaultPlugins": {
        "welcomemessages": false,
        "links": false,
        "invites": false,
        "spoilers": false,
        "deletemodcmds": false,
        "antibots": false,
        "antialt":false
    },
    "antiAltSettings": { // Default for antiAlt
        "age": 30, // Days
        "punishment":"kick",
        "whitelisted":[],
        "log":""
    },
    "status": [{
            "type": "PLAYING",
            "name": "@{client} 🤖"
        },
        {
            "type": "WATCHING",
            "name": "{guilds} servers"
        }
    ]

    /**
     * Multiple statuses
     * If you only want one, leave one
     * Variable templates include:
     * {client} - Client's username
     * {guilds} - Client's guilds
     * {users} - Client's cached users
     * {channels} - Client's channels
    */
}