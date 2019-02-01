const Discord = require("discord.js");
const client = new Discord.Client();

  if(command === "ping")
    if(!message.member.roles.some(r=>["Owner", "Staff", "Donator"].includes(r.name)) )
      return message.reply("You don't have permission to use this command."); 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
}};

client.login(process.env.BOT_TOKEN);
