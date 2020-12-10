"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const ms_1 = __importDefault(require("ms"));
const Giveaways_1 = require("../../models/Giveaways");
const GiveawayManger_1 = __importDefault(require("../../structures/giveaways/GiveawayManger"));
const discord_js_1 = require("discord.js");
class giveaway extends discord_akairo_1.Command {
    constructor() {
        super("giveaway", {
            aliases: ["giveaway", "give"],
            category: "Admin",
            description: {
                content: "Make a giveaway",
                usage: "giveaway [time] [item]",
                examples: [
                    "give 10m nitro",
                    "giveaway 10m nitro"
                ]
            },
            ratelimit: 3,
            userPermissions: ["MANAGE_MESSAGES"],
            ownerOnly: false,
            args: [
                {
                    id: "time",
                    type: (msg, str) => {
                        return Number(ms_1.default(str));
                    },
                    prompt: {
                        start: (msg) => `${msg.author}, you must provide a time!`,
                        retry: (msg) => `${msg.author}, you must provide a valid time!`
                    }
                },
                {
                    id: "item",
                    type: "string",
                    match: "rest",
                    prompt: {
                        start: (msg) => `${msg.author}, you must provide a item to giveaway`
                    }
                }
            ]
        });
    }
    async exec(message, { time, item }) {
        const giveawayRepo = this.client.db.getRepository(Giveaways_1.Giveaways);
        const end = Date.now() + time;
        const msg = await message.channel.send(new discord_js_1.MessageEmbed()
            .setAuthor(`Giveaway | ${item}`)
            .setColor("GREEN")
            .setDescription(`${message.author} is giveaway **${item}**`)
            .setFooter("Giveaway Ends")
            .setTimestamp(end));
        msg.react("🎉");
        giveawayRepo.insert({
            channel: msg.channel.id,
            message: msg.id,
            end: end
        });
        setTimeout(() => {
            GiveawayManger_1.default.end(giveawayRepo, msg);
        }, time);
    }
}
exports.default = giveaway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZWF3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvQWRtaW4vZ2l2ZWF3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBeUM7QUFHekMsNENBQW9CO0FBRXBCLHNEQUFtRDtBQUNuRCwrRkFBc0U7QUFDdEUsMkNBQTBDO0FBRTFDLE1BQXFCLFFBQVMsU0FBUSx3QkFBTztJQUN6QztRQUNJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQzdCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixRQUFRLEVBQUU7b0JBQ04sZ0JBQWdCO29CQUNoQixvQkFBb0I7aUJBQ3ZCO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBVyxFQUFFLEVBQUU7d0JBQ2hDLE9BQU8sTUFBTSxDQUFDLFlBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUNELE1BQU0sRUFBRTt3QkFDSixLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sNEJBQTRCO3dCQUNsRSxLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sa0NBQWtDO3FCQUMzRTtpQkFDSjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLHVDQUF1QztxQkFDaEY7aUJBQ0o7YUFDSjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFrQztRQUM5RSxNQUFNLFlBQVksR0FBMEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsQ0FBQztRQUNwRixNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXRDLE1BQU0sR0FBRyxHQUFZLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBWSxFQUFFO2FBQzdELFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO2FBQy9CLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDakIsY0FBYyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sa0JBQWtCLElBQUksSUFBSSxDQUFDO2FBQzNELFNBQVMsQ0FBQyxlQUFlLENBQUM7YUFDMUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNyQixDQUFDO1FBQ0YsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQixZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsR0FBRyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osd0JBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Q0FDSjtBQTlERCwyQkE4REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFRleHRDaGFubmVsIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBtcyBmcm9tIFwibXNcIjtcclxuXHJcbmltcG9ydCB7IEdpdmVhd2F5cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvR2l2ZWF3YXlzXCI7XHJcbmltcG9ydCBHaXZlYXdheU1hbmdlciBmcm9tIFwiLi4vLi4vc3RydWN0dXJlcy9naXZlYXdheXMvR2l2ZWF3YXlNYW5nZXJcIlxyXG5pbXBvcnQgeyBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2l2ZWF3YXkgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcImdpdmVhd2F5XCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wiZ2l2ZWF3YXlcIiwgXCJnaXZlXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJBZG1pblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJNYWtlIGEgZ2l2ZWF3YXlcIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOiBcImdpdmVhd2F5IFt0aW1lXSBbaXRlbV1cIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJnaXZlIDEwbSBuaXRyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ2l2ZWF3YXkgMTBtIG5pdHJvXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbnM6IFtcIk1BTkFHRV9NRVNTQUdFU1wiXSxcclxuICAgICAgICAgICAgb3duZXJPbmx5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInRpbWVcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAobXNnOiBNZXNzYWdlLCBzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKG1zKHN0cikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgJHttc2cuYXV0aG9yfSwgeW91IG11c3QgcHJvdmlkZSBhIHRpbWUhYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCB5b3UgbXVzdCBwcm92aWRlIGEgdmFsaWQgdGltZSFgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJpdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgJHttc2cuYXV0aG9yfSwgeW91IG11c3QgcHJvdmlkZSBhIGl0ZW0gdG8gZ2l2ZWF3YXlgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7IHRpbWUsIGl0ZW0gfTogeyB0aW1lOiBudW1iZXIsIGl0ZW06IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBnaXZlYXdheVJlcG86IFJlcG9zaXRvcnk8R2l2ZWF3YXlzPiA9IHRoaXMuY2xpZW50LmRiLmdldFJlcG9zaXRvcnkoR2l2ZWF3YXlzKTtcclxuICAgICAgICBjb25zdCBlbmQ6IG51bWJlciA9IERhdGUubm93KCkgKyB0aW1lO1xyXG5cclxuICAgICAgICBjb25zdCBtc2c6IE1lc3NhZ2UgPSBhd2FpdCBtZXNzYWdlLmNoYW5uZWwuc2VuZChuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgLnNldEF1dGhvcihgR2l2ZWF3YXkgfCAke2l0ZW19YClcclxuICAgICAgICAgICAgLnNldENvbG9yKFwiR1JFRU5cIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAke21lc3NhZ2UuYXV0aG9yfSBpcyBnaXZlYXdheSAqKiR7aXRlbX0qKmApXHJcbiAgICAgICAgICAgIC5zZXRGb290ZXIoXCJHaXZlYXdheSBFbmRzXCIpXHJcbiAgICAgICAgICAgIC5zZXRUaW1lc3RhbXAoZW5kKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbXNnLnJlYWN0KFwi8J+OiVwiKTtcclxuXHJcbiAgICAgICAgZ2l2ZWF3YXlSZXBvLmluc2VydCh7XHJcbiAgICAgICAgICAgIGNoYW5uZWw6IG1zZy5jaGFubmVsLmlkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtc2cuaWQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBHaXZlYXdheU1hbmdlci5lbmQoZ2l2ZWF3YXlSZXBvLCBtc2cpO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfVxyXG59Il19