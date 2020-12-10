"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const common_tags_1 = require("common-tags");
class help extends discord_akairo_1.Command {
    constructor() {
        super("help", {
            aliases: ["help", "cmd", "commands"],
            category: "Public",
            description: {
                content: "View available commands",
                usage: "help [command]",
                examples: [
                    "help",
                    "help ping"
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: "command",
                    type: "commandAlias",
                    default: null
                }
            ]
        });
    }
    exec(message, { command }) {
        if (command) {
            return message.channel.send(new discord_js_1.MessageEmbed()
                .setAuthor(`Help | ${command}`, this.client.user.displayAvatarURL())
                .setColor("GREEN")
                .setDescription(common_tags_1.stripIndents `
                    **Description:**
                    ${command.description.content || "No content provided."}

                    **Usage:**
                    ${command.description.usage || "No usage provided."}

                    **Examples:**
                    ${command.description.examples ? command.description.examples.map(e => `\`${e}\``).join("\n") : "No examples provided."}
                `));
        }
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Help | ${this.client.user.username}`, this.client.user.displayAvatarURL())
            .setColor("GREEN")
            .setFooter(`${this.client.commandHandler.prefix}help [command] for more information on a command`);
        for (const category of this.handler.categories.values()) {
            if (["default"].includes(category.id))
                continue;
            embed.addField(category.id, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `**\`${cmd}\`**`)
                .join(", ") || "No commands in this category");
        }
        return message.channel.send(embed);
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMvaGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFDbkQsNkNBQTJDO0FBRTNDLE1BQXFCLElBQUssU0FBUSx3QkFBTztJQUNyQztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNwQyxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsUUFBUSxFQUFFO29CQUNOLE1BQU07b0JBQ04sV0FBVztpQkFDZDthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFNBQVM7b0JBQ2IsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2lCQUNoQjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsT0FBTyxFQUF3QjtRQUMzRCxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBWSxFQUFFO2lCQUN6QyxTQUFTLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUNuRSxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNqQixjQUFjLENBQUMsMEJBQVksQ0FBQTs7c0JBRXRCLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLHNCQUFzQjs7O3NCQUdyRCxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxvQkFBb0I7OztzQkFHakQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtpQkFDMUgsQ0FBQyxDQUNMLENBQUM7U0FDTDtRQUVELE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUMzQixTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3JGLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDakIsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxrREFBa0QsQ0FBQyxDQUFDO1FBRXZHLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUFFLFNBQVM7WUFFaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVE7aUJBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztpQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDhCQUE4QixDQUNoRCxDQUFDO1NBQ0w7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQTFERCx1QkEwREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHN0cmlwSW5kZW50cyB9IGZyb20gXCJjb21tb24tdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGVscCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiaGVscFwiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcImhlbHBcIiwgXCJjbWRcIiwgXCJjb21tYW5kc1wiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUHVibGljXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlZpZXcgYXZhaWxhYmxlIGNvbW1hbmRzXCIsXHJcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJoZWxwIFtjb21tYW5kXVwiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImhlbHBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhlbHAgcGluZ1wiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbW1hbmRcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNvbW1hbmRBbGlhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyBjb21tYW5kIH06IHsgY29tbWFuZDogQ29tbWFuZCB9KTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAgICAgLnNldEF1dGhvcihgSGVscCB8ICR7Y29tbWFuZH1gLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSlcclxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIkdSRUVOXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oc3RyaXBJbmRlbnRzYFxyXG4gICAgICAgICAgICAgICAgICAgICoqRGVzY3JpcHRpb246KipcclxuICAgICAgICAgICAgICAgICAgICAke2NvbW1hbmQuZGVzY3JpcHRpb24uY29udGVudCB8fCBcIk5vIGNvbnRlbnQgcHJvdmlkZWQuXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICoqVXNhZ2U6KipcclxuICAgICAgICAgICAgICAgICAgICAke2NvbW1hbmQuZGVzY3JpcHRpb24udXNhZ2UgfHwgXCJObyB1c2FnZSBwcm92aWRlZC5cIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKipFeGFtcGxlczoqKlxyXG4gICAgICAgICAgICAgICAgICAgICR7Y29tbWFuZC5kZXNjcmlwdGlvbi5leGFtcGxlcyA/IGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMubWFwKGUgPT4gYFxcYCR7ZX1cXGBgKS5qb2luKFwiXFxuXCIpIDogXCJObyBleGFtcGxlcyBwcm92aWRlZC5cIn1cclxuICAgICAgICAgICAgICAgIGApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0QXV0aG9yKGBIZWxwIHwgJHt0aGlzLmNsaWVudC51c2VyLnVzZXJuYW1lfWAsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJHUkVFTlwiKVxyXG4gICAgICAgICAgICAuc2V0Rm9vdGVyKGAke3RoaXMuY2xpZW50LmNvbW1hbmRIYW5kbGVyLnByZWZpeH1oZWxwIFtjb21tYW5kXSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBhIGNvbW1hbmRgKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoW1wiZGVmYXVsdFwiXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZW1iZWQuYWRkRmllbGQoY2F0ZWdvcnkuaWQsIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNtZCA9PiBjbWQuYWxpYXNlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgLm1hcChjbWQgPT4gYCoqXFxgJHtjbWR9XFxgKipgKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKSB8fCBcIk5vIGNvbW1hbmRzIGluIHRoaXMgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGVtYmVkKTtcclxuICAgIH1cclxufSJdfQ==