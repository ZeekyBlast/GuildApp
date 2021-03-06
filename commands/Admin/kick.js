"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class kick extends discord_akairo_1.Command {
    constructor() {
        super("kick", {
            aliases: ["kick", "k", "remove"],
            category: "Admin",
            description: {
                content: "kick a user",
                usage: "kick <user>",
                examples: [
                    "kick @zeekyblast#2158"
                ]
            },
            ratelimit: 5
        });
    }
    exec(message) {
        let args = message.content.split(" ").slice(1);
        const user = message.mentions.users.first();
        let reason = args.slice(1).join(" ");
        const channel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
        const moderator = message.author.username;
        if (!reason)
            reason = "No reason given";
        if (!message.guild.member(user).kickable)
            return message.channel.send(`${user.tag} is not kickable`);
        let nouser = new discord_js_1.MessageEmbed()
            .setColor("RED")
            .setDescription(`${message.author} please mention a user`);
        if (!user)
            return message.channel.send(nouser);
        let send = new discord_js_1.MessageEmbed()
            .setColor("Red")
            .setTitle("Moderation: Kick")
            .addField("Type:", `Kick`)
            .addField("Date:", message.createdAt.toLocaleString())
            .addField("Reason:", `${reason}`);
        let noperms = new discord_js_1.MessageEmbed()
            .setColor("RED")
            .setDescription(`${message.author.tag} you do not have the right perms`);
        if (!message.member.hasPermission("KICK_MEMBERS"))
            return message.channel.send(noperms);
        user.send(send).then(() => message.guild.member(user).kick(reason));
        let doneembed = new discord_js_1.MessageEmbed()
            .setColor("RED")
            .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL())
            .setFooter(`${message.guild.name} ModLogs`, message.guild.iconURL())
            .addField("Moderation:", "Kick", true)
            .addField("User:", user.username, true)
            .addField("Moderator:", moderator, true)
            .addField("Reason:", reason, true)
            .addField("Date:", message.createdAt.toLocaleString(), true)
            .setThumbnail(message.guild.iconURL({ dynamic: true }));
        channel.send(doneembed);
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9BZG1pbi9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQVFuRCxNQUFxQixJQUFLLFNBQVEsd0JBQU87SUFDckM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxhQUFhO2dCQUN0QixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsUUFBUSxFQUFFO29CQUNOLHVCQUF1QjtpQkFDMUI7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUV4QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzdGLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRTFDLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxHQUFHLGlCQUFpQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUM7UUFFckcsSUFBSSxNQUFNLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixjQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSx3QkFBd0IsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxJQUFJLElBQUksR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDeEIsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzthQUM1QixRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQzthQUN6QixRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDckQsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzNCLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixjQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsa0NBQWtDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkUsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25FLFFBQVEsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzthQUNyQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO2FBQ3RDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQzthQUN2QyxRQUFRLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7YUFDakMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQzthQUMzRCxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTNELE9BQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7Q0FDSjtBQTlERCx1QkE4REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBUZXh0Q2hhbm5lbCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHVybCB9IGZyb20gXCJpbnNwZWN0b3JcIjtcclxuaW1wb3J0IHsgRW1vamkgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBSZWFjdGlvbkVtb2ppIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgb3duZXJzIH0gZnJvbSBcIi4uLy4uL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mga2ljayBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwia2lja1wiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcImtpY2tcIiwgXCJrXCIsIFwicmVtb3ZlXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJBZG1pblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJraWNrIGEgdXNlclwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwia2ljayA8dXNlcj5cIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJraWNrIEB6ZWVreWJsYXN0IzIxNThcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuXHJcbiAgICAgICAgbGV0IGFyZ3MgPSBtZXNzYWdlLmNvbnRlbnQuc3BsaXQoXCIgXCIpLnNsaWNlKDEpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBtZXNzYWdlLm1lbnRpb25zLnVzZXJzLmZpcnN0KCk7XHJcbiAgICAgICAgbGV0IHJlYXNvbiA9IGFyZ3Muc2xpY2UoMSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IG1lc3NhZ2UubWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLm5hbWUgPT09IFwibG9nc1wiKTtcclxuICAgICAgICBjb25zdCBtb2RlcmF0b3IgPSBtZXNzYWdlLmF1dGhvci51c2VybmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFyZWFzb24pIHJlYXNvbiA9IFwiTm8gcmVhc29uIGdpdmVuXCI7XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLmd1aWxkLm1lbWJlcih1c2VyKS5raWNrYWJsZSkgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGAke3VzZXIudGFnfSBpcyBub3Qga2lja2FibGVgKTtcclxuXHJcbiAgICAgICAgbGV0IG5vdXNlciA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSRURcIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAke21lc3NhZ2UuYXV0aG9yfSBwbGVhc2UgbWVudGlvbiBhIHVzZXJgKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQobm91c2VyKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgLnNldENvbG9yKFwiUmVkXCIpXHJcbiAgICAgICAgICAgIC5zZXRUaXRsZShcIk1vZGVyYXRpb246IEtpY2tcIilcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiVHlwZTpcIiwgYEtpY2tgKVxyXG4gICAgICAgICAgICAuYWRkRmllbGQoXCJEYXRlOlwiLCBtZXNzYWdlLmNyZWF0ZWRBdC50b0xvY2FsZVN0cmluZygpKVxyXG4gICAgICAgICAgICAuYWRkRmllbGQoXCJSZWFzb246XCIsIGAke3JlYXNvbn1gKTtcclxuXHJcbiAgICAgICAgbGV0IG5vcGVybXMgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgLnNldENvbG9yKFwiUkVEXCIpXHJcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgJHttZXNzYWdlLmF1dGhvci50YWd9IHlvdSBkbyBub3QgaGF2ZSB0aGUgcmlnaHQgcGVybXNgKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLm1lbWJlci5oYXNQZXJtaXNzaW9uKFwiS0lDS19NRU1CRVJTXCIpKSByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQobm9wZXJtcyk7XHJcblxyXG4gICAgICAgIHVzZXIuc2VuZChzZW5kKS50aGVuKCgpID0+XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZ3VpbGQubWVtYmVyKHVzZXIpLmtpY2socmVhc29uKSk7XHJcblxyXG4gICAgICAgIGxldCBkb25lZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgLnNldENvbG9yKFwiUkVEXCIpXHJcbiAgICAgICAgICAgIC5zZXRBdXRob3IoYCR7bWVzc2FnZS5ndWlsZC5uYW1lfSBNb2RMb2dzYCwgbWVzc2FnZS5ndWlsZC5pY29uVVJMKCkpXHJcbiAgICAgICAgICAgIC5zZXRGb290ZXIoYCR7bWVzc2FnZS5ndWlsZC5uYW1lfSBNb2RMb2dzYCwgbWVzc2FnZS5ndWlsZC5pY29uVVJMKCkpXHJcbiAgICAgICAgICAgIC5hZGRGaWVsZChcIk1vZGVyYXRpb246XCIsIFwiS2lja1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYWRkRmllbGQoXCJVc2VyOlwiLCB1c2VyLnVzZXJuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAuYWRkRmllbGQoXCJNb2RlcmF0b3I6XCIsIG1vZGVyYXRvciwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiUmVhc29uOlwiLCByZWFzb24sIHRydWUpXHJcbiAgICAgICAgICAgIC5hZGRGaWVsZChcIkRhdGU6XCIsIG1lc3NhZ2UuY3JlYXRlZEF0LnRvTG9jYWxlU3RyaW5nKCksIHRydWUpXHJcbiAgICAgICAgICAgIC5zZXRUaHVtYm5haWwobWVzc2FnZS5ndWlsZC5pY29uVVJMKHsgZHluYW1pYzogdHJ1ZSB9KSk7XHJcblxyXG4gICAgICAgIChjaGFubmVsIGFzIFRleHRDaGFubmVsKS5zZW5kKGRvbmVlbWJlZClcclxuICAgIH1cclxufSJdfQ==