const gen = require('generate-password')
const db = require('quick.db')
const request = require('request')
const Discord = require('discord.js')
const { send } = require('process')
const client = new Discord.Client()
const date = new Date()
const ashgdasvfasdjasgdj = 'ODM3MDMzNzAwMzI3NTU1MTYz.YImqYQ.fVmt72DsifFCHjY4_Dfpm5RadE4'
const express = require('express')
const Crypto = require("crypto");
const fs = require('fs')

// its da hub gamer btw


const app = express();

var keyofday;

/*
keyofday = gen.generate({
	length: 10,
	numbers: true 
});
*/

	client.on('ready',()=>{
		console.log(`proman active made by catcat`)
		client.user.setActivity('i want sex where cah WHEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE', { type: 'PLAYING' })
	})
	
	client.on('message', message => {

	  if (message.content === 'd?0d6c3d5051b8eaa9902f6690eed8f1e5d5ff39b9c32b5a9f9fbeda24791117b73b19627f5ff7c5efd1748f9c677005322e908e1cb651492c4dfa6998ba04c02f') {
		
		//850331670313828382
		console.log(`${message.author.id} tried to generate a key testing if he has perms...`)
  
	if (whitelistedppl.includes(message.author.id)){
		  let logschannel = client.channels.cache.find(channel=>channel.id ==='861991657825370113')
		  console.log('Key Succesfully Generated!!')
		  keyofday = gen.generate({
		length: 10,
		numbers: true 
		});
		client.channels.cache.get(keychannel).send(`<@&861915484273115147> New Key Is: ${keyofday}`)
		message.reply(`New Key Is Out: ${message.guild.channels.cache.find(channel => channel.name === "key").toString()}`)
		console.log(keyofday)
		logschannel.send(`${message.author.id} generated a key!`)


  
	  // api 
	  /*
	  app.get('/keyplsnohooknohttppysussybaka',function(req,res){
		  res.write(keyofday)
		  res.end('')
	  })*/

	}
   else{
	   message.reply(`Sorry you can't generate keys`)
	   console.log(`Not whitelisted`)
   }
	}

	var muteperms = '875355628242079755'
	var mutedrole = '875829469229744139'
	
	if (message.content.startsWith('?verify')){
		  if (message.content === '?verify'){
		  message.reply('Ping someone')
	  }else{
	  var target = message.mentions.members.first()
	  if(message.member.roles.cache.has(muteperms)) {
		  if (message.author.id === '692933721312985158'){
			  if(target.roles.cache.has(mutedrole)){
				  const blackshit4 = new nigger.MessageEmbed()
				  .setColor(0xFF0000)
				  .setTimestamp()
				  .addField('Error', `User already have Server Access`)
				  message.reply(blackshit4)
			  }else{
				  let logschannel = client.channels.cache.find(channel=>channel.id ==='876439636048764938')
				  db.set("Skat",{"?verify": date})
				  logschannel.send('Logs: Command Name: ?verify: Skat gave Server Access '+target+' Succesfull!')
				  const blackshit3 = new nigger.MessageEmbed()
				  .setColor(0xFF0000)
				  .setTimestamp()
				  .addField('Done', `Access Gaved`)
				  message.reply(blackshit3)
				  // mute
				  target.roles.add(mutedrole)
				  // target.roles.remove('849388295732330566')
			  }
		  }else{
			  if(target.roles.cache.has(mutedrole)){
				const embed4 = new Discord.MessageEmbed()
				.setDescription(`User Already Have Access`)
				.setFooter('', message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
			.setColor("RANDOM")
				.setTimestamp()
				message.channel.send(embed4)
			  }else{
			  let logschannel = client.channels.cache.find(channel=>channel.id ==='876439636048764938')
			  console.log(`Logs: Command Name: k.access: userid: ${message.author.id}`)
			  db.set(message.author.id,{"?verify": date})
			  logschannel.send(`Logs: Command Name: ?verify: userid: ${target}`)
			  const embed = new Discord.MessageEmbed()
			  .setDescription(`Changed roles for ${target},+Access`)
			  .setFooter('voidmommy', message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
			  .setColor("RANDOM")
			  .setTimestamp()
              message.channel.send(embed)
			  
			  // mute
			  target.roles.add(mutedrole)
			  // target.roles.remove('849388295732330566')
		  }
		  }
		}else{
			message.reply(`You need role called gate inspector for access someone`)
			// can't mute
	
		}}
	  }


	  var muteperms = '876441988046663711'
	  var mutedrolex = '875829470093783080'
	  var remove = '875829469229744139'
	  
	  if (message.content.startsWith('?gate')){
			if (message.content === '?gate'){
			message.reply('Ping someone')
		}else{
		var target = message.mentions.members.first()
		if(message.member.roles.cache.has(muteperms)) {
			if (message.author.id === '692933721312985158'){
				if(target.roles.cache.has(mutedrolex)){
					const blackshit4 = new nigger.MessageEmbed()
					.setColor(0xFF0000)
					.setTimestamp()
					.addField('Error', `User already have Dont Verify`)
					message.reply(blackshit4)
				}else{
					let logschannel = client.channels.cache.find(channel=>channel.id ==='876439636048764938')
					db.set("Skat",{"?gate": date})
					logschannel.send('Logs: Command Name: ?gate: Skat removed Server Access '+target+' Succesfull!')
					const blackshit3 = new nigger.MessageEmbed()
					.setColor(0xFF0000)
					.setTimestamp()
					.addField('Done', `Server Access Removed`)
					message.reply(blackshit3)
					// mute
					target.roles.add(mutedrolex)
					target.roles.remove(remove)
				}
			}else{
				if(target.roles.cache.has(mutedrolex)){
				  const embed4 = new Discord.MessageEmbed()
				  .setDescription(`User Already Have Dont Verify`)
				  .setFooter('', message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
			  .setColor("RANDOM")
				  .setTimestamp()
				  message.channel.send(embed4)
				}else{
				let logschannel = client.channels.cache.find(channel=>channel.id ==='876439636048764938')
				console.log(`Logs: Command Name: ?: user: ${target}`)
				db.set(message.author.id,{"?gate": date})
				logschannel.send(`Logs: Command Name: ?Gate: user: ${target}`)
				const embed = new Discord.MessageEmbed()
				.setDescription(`Changed roles for ${target},-Access`)
				.setFooter('kittenassist.me', message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
				.setColor("RANDOM")
				.setTimestamp()
				message.channel.send(embed)
				
				// mute
				target.roles.add(mutedrolex)
				target.roles.remove(remove)
			}
			}
		  }else{
			  message.reply(`You need role called gate inspector for access someone`)
			  // can't mute
	  
		  }}
		}
  
	
		if (message.content.startsWith('sex.av')){
			if (message.content === 'sex.av'){
				let embed = new Discord.MessageEmbed()
				.setColor("#985ce7")
				.setAuthor(message.author.tag, message.author.displayAvatarURL())
				.setDescription(`[Avatar URL Link](${message.author.displayAvatarURL()})`)
				.setImage(message.author.displayAvatarURL({dynamic : true}))
				 message.channel.send(embed)
			}else{
				var target2 = message.mentions.members.first()
				if (target2){			
					
					let embed = new Discord.MessageEmbed()
					.setColor("#985ce7")
					.setAuthor(target2.user.tag, target2.user.displayAvatarURL())
					.setDescription(`[Avatar URL Link](${message.author.displayAvatarURL()})`)
					.setImage(target2.user.displayAvatarURL({dynamic : true}))
					 message.channel.send(embed)
					}
	
			}
	
		}
		if(message.content.startsWith('sex.avatar')){
			if (message.content === 'sex.avatar'){
				let embed = new Discord.MessageEmbed()
				.setColor("#985ce7")
				.setAuthor(message.author.tag, message.author.displayAvatarURL())
				.setDescription(`[Avatar URL Link](${message.author.displayAvatarURL()})`)
				.setImage(message.author.displayAvatarURL({dynamic : true}))
				 message.channel.send(embed)
			}else{
				var target3 = message.mentions.members.first()
				if (target3){
					
					let embed = new Discord.MessageEmbed()
					.setColor("#985ce7")
					.setAuthor(target3.user.tag, target3.user.displayAvatarURL())
					.setDescription(`[Avatar URL Link](${message.author.displayAvatarURL()})`)
					.setImage(target3.user.displayAvatarURL({dynamic : true}))
					 message.channel.send(embed)
				}
	
	
			}
	
		}
		if (message.content === 'sssssssssssssssss'){
			const embed8 = new Discord.MessageEmbed()
			.setDescription(`**CMON BRI U CAN DO IT**`)
			.setFooter('Bri wifi', message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
			.setColor("RANDOM")
			.setTimestamp()
			message.channel.send(embed8)
		}


		if (message.mentions.members.first()){
			const target = message.mentions.members.first()
			
			if (target.id == '822077804149473292'){
			message.channel.send('Pro Fps Gui Lockwer 123')
			}
			}
	
		
		if (message.content === 'id'){
			const embed8 = new Discord.MessageEmbed()
			.setTitle('Group Id')
			.setDescription(`9062095`)
			.setFooter('voidmommy', message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
			.setColor("RANDOM")
			.setTimestamp()
			message.channel.send(embed8)
		}
	})
	
		function hmac(secret, data){
			const hash = Crypto.createHash("sha512");
			hash.update(secret + data + secret);
			return hash.digest("hex").toString();
		};


		app.use(express.static("public"))


		app.get('/keysyscheck1',(req,res)=>{


			const Key = req.query.prokey;
			const Pro = req.query.pro;
			const secretkey2 = 'E);{Q6_<bkrEo;ITBzLfLxTdpMuzSzVIs?}5vyus3l@>+?=>O}uL-(A}M/PJ`w';

			if (Key&&Pro){
				if (Key === keyofday){
					res.write(hmac(secretkey2, Key + Pro)) // we'll send the data of the whitelist response to the client once the key is valid
					// webhookfunction("https://discord.com/api/webhooks/862290175878365184/Nkgb-9cFqomfKBvfqpZl5hJA7aN1_AjMdsjCEv4s-pnt7picr28WopS1jxRzU0RkN8kN")
				}else{
					res.write('Not Whitelisted')
					//webhookfunction("https://discord.com/api/webhooks/862290087874134047/7Js90B8cIug-hpW14ME1prLYkasDh9Tas6O-TenIe8yrPjJxelCFwKXZKegT-qpJEm53")
				}
			}else{
				res.write('Not Whitelisted')
				//webhookfunction("https://discord.com/api/webhooks/862290087874134047/7Js90B8cIug-hpW14ME1prLYkasDh9Tas6O-TenIe8yrPjJxelCFwKXZKegT-qpJEm53")
			}

			res.end('')

		})


		/*
		if (message.content.startsWith('d?whitelist')){
			
		const id = message.content.substring(12);

			if (whitelistedppl.includes(message.author.id)){
	
				

				if (id){

					// make save file to json and array shit

					message.reply('Currently shutted down')
					console.log(id)

				}
				
				else{
					message.reply('Insert the id noob')
				}


			}else{
				message.reply('You cannot whitelist people')
			}



		}

		if (message.content === 'd?databaserun'){
			if (whitelistedppl.includes(message.author.id)){
				// show database
				
				message.reply('Currently shutted down')
			}
		}
		*/
		
	app.get('/status',function(req,res){

		fs.readFile('status.html',function(err,data){
			//webhookfunction("https://discord.com/api/webhooks/862290855590363187/UcQimII5SnFG31uiKmKZ_Q3QXpwSUwgyR4ZlUhX8g8ECN4_IIqv_Vj7bt5IlEAFkoEw-")
			res.write(data);
			res.end('')
		})
	})

	app.get('/',function(req,res){

		fs.readFile('index.html',function(err,data){
			//webhookfunction("https://discord.com/api/webhooks/862290997115486218/GXu6-hElUAwD8i4UMCeAREu7smgQumnemWOkmEP_eKuqNu4Lb9z-ijmtjEml5Vw1WLNc")
			res.write(data);
			res.end('')
		})
	})

client.login(ashgdasvfasdjasgdj)
app.listen(process.env.PORT || 3000);
