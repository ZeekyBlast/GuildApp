"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class botinfo extends discord_akairo_1.Command {
    constructor() {
        super("botinfo", {
            aliases: ["bot"],
            category: "Public",
            description: {
                content: "Gets the botinfo",
                usage: "botinfo",
                examples: [
                    "botinfo"
                ]
            },
            ratelimit: 3,
            ownerOnly: false
        });
    }
    exec(message) {
        let botembed = new discord_js_1.MessageEmbed()
            .setColor("Red")
            .setTitle("Botinfo")
            .addField("Owner:", "Zeeky")
            .addField("Commands:", `;help`);
        return message.channel.send(botembed);
    }
}
exports.default = botinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMvYm90aW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFFbkQsTUFBcUIsT0FBUSxTQUFRLHdCQUFPO0lBQ3hDO1FBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRTtvQkFDTixTQUFTO2lCQUNaO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0I7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzVCLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixRQUFRLENBQUMsU0FBUyxDQUFDO2FBQ25CLFFBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQzNCLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0NBQ0o7QUF4QkQsMEJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm90aW5mbyBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiYm90aW5mb1wiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcImJvdFwiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUHVibGljXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkdldHMgdGhlIGJvdGluZm9cIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOiBcImJvdGluZm9cIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJib3RpbmZvXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICBvd25lck9ubHk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICBsZXQgYm90ZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgLnNldENvbG9yKFwiUmVkXCIpXHJcbiAgICAgICAgICAgIC5zZXRUaXRsZShcIkJvdGluZm9cIilcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiT3duZXI6XCIsIFwiWmVla3lcIilcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiQ29tbWFuZHM6XCIsIGA7aGVscGApO1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChib3RlbWJlZClcclxuICAgIH1cclxufSJdfQ==