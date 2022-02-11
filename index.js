const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Sends a msg in terminal to make sure bot is online
client.on('ready', () => 
{
  console.log(`Logged in as ${client.user.tag}`)
})

// Do something when user sends message
client.on('messageCreate', msg => 
{
  // Checking if message author is a user
  if (msg.author.bot === false)
  {
       if (msg.content.startsWith('$help') || msg.content.startsWith('$Help'))    
      {
        // Splitting user input to check if it's is valid
        var userArg = String(msg).split(' ')[1];  
        // Display basic help menu
        if (userArg === undefined)
        {
          msg.channel.send(`
          > Hi! I'm HTS help desk, here are the commands you can use:
          > $Help | Displays this help menu
          > $Help topics | Displays all available topics
          > $Help <topic> | Displays information about a specific topic
        `);
        }
        
        // Display topics menu
        else if (userArg === 'topics')
        {
          // sqli, bash, html, add more later
          msg.channel.send(`
          > Here are all the available topics:
          > Sqli (Sql __I__njection)
          > Bash (Linux shell commands)
          > PS (__P__ower__S__hell, windows' equivalent to bash) 
          > HTML (Found in client-side source code of websites)
          > PHP (Language found in backend(server side) of webpages)
          > XSS (Cross Site Scripting)
          > SSRF (Server Side Request Forgery)
          Use $Help <topic name> for info on that topic!
        `); // explain better later
        }
        else if (userArg === 'Sqli')
        {
          msg.channel.send(`
          > Heres an Sqli cheatsheet:
          > <https://portswigger.net/web-security/sql-injection/cheat-sheet>
          > And here are a couple youtube videos covering Sqli:
          > <https://www.youtube.com/watch?v=_jKylhJtPmI>
          > <https://www.youtube.com/watch?v=ciNHn38EyRc>
      `)
        }
        else if (userArg === 'Bash')
      {//add instructions for accessing otw later
        msg.channel.send(`
        > Heres an online game: 
        > <https://overthewire.org/wargames/bandit/>
        > And here are a couple youtube videos covering Bash: 
        > <https://www.youtube.com/watch?v=J2zquYPJbWY> 
        > <https://www.youtube.com/watch?v=oxuRxtrO2Ag> 
        `)
      }
      else if (userArg === 'PS')
      {
        msg.channel.send(`
        > Cheatsheet here
        > And here are a couple youtube video covering PowerShell:
        > https://www.youtube.com/watch?v=dQw4w9WgXcQ
      `)
      }
      else if (userArg === 'HTML')
      {
        msg.channel.send(`
        > Cheatsheet here
        > And here are a couple youtube video covering HTML:
        > https://www.youtube.com/watch?v=dQw4w9WgXcQ
        `)
      }
      else if (userArg === 'PHP')
      {
        msg.channel.send(`
        > Cheatsheet here
        > And here are a couple youtube video covering PHP:
        > https://www.youtube.com/watch?v=dQw4w9WgXcQ
        `)
      }
      else if (userArg === 'XSS')
      {
        msg.channel.send(`
        > Cheatsheet here
        > And here are a couple youtube video covering XSS:
        > https://www.youtube.com/watch?v=dQw4w9WgXcQ
        `)
      }
      else if (userArg === 'SSRF')
      {
        msg.channel.send(`
        > Cheatsheet here
        > And here are a couple youtube video covering SSRF:
        > https://www.youtube.com/watch?v=dQw4w9WgXcQ
        `)
      }
      else // inavlid cases
      {
        msg.channel.send(`
        > Invalid or unlisted topic!
      Please use $Help topics to see all available topics.
        `)
      }
      
    }    
  }
})

client.login('nope')
