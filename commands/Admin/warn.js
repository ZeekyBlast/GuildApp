"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Warns_1 = require("../../models/Warns");
class warn extends discord_akairo_1.Command {
    constructor() {
        super("warn", {
            aliases: ["warn", "w"],
            category: "Admin",
            description: {
                content: "Warns a user",
                usage: "warn [ member ]",
                examples: [
                    "warn @zeekyblast test"
                ]
            },
            ratelimit: 3,
            userPermissions: ["MANAGE_MESSAGES"],
            ownerOnly: false,
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg) => `${msg.author}, please provide a member to warn...`,
                        retry: (msg) => `${msg.author}, please provide a valid member to warn...`
                    }
                },
                {
                    id: "reason",
                    type: "string",
                    match: "rest",
                    default: "No reason provided"
                }
            ]
        });
    }
    async exec(message, { member, reason }) {
        const warnRepo = this.client.db.getRepository(Warns_1.Warns);
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.util.reply("this member has or same role as you!");
        await warnRepo.insert({
            guild: message.guild.id,
            user: member.id,
            moderator: message.author.id,
            reason: reason
        });
        return message.util.send(`**${member.user.tag}** has been warn by **${message.author.tag}** for **${reason}**`);
    }
}
exports.default = warn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9BZG1pbi93YXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBSXpDLDhDQUEyQztBQUUzQyxNQUFxQixJQUFLLFNBQVEsd0JBQU87SUFDckM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztZQUN0QixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFFBQVEsRUFBRTtvQkFDTix1QkFBdUI7aUJBQzFCO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLHNDQUFzQzt3QkFDNUUsS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLDRDQUE0QztxQkFDckY7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLG9CQUFvQjtpQkFDaEM7YUFDSjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUEyQztRQUMzRixNQUFNLFFBQVEsR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQUssQ0FBQyxDQUFDO1FBQ3hFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3JILE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUV0RSxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDZixTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQTtRQUVGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcseUJBQXlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDcEgsQ0FBQztDQUNKO0FBaERELHVCQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgR3VpbGRNZW1iZXIsIFRleHRDaGFubmVsIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBXYXJucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvV2FybnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdhcm4gZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIndhcm5cIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJ3YXJuXCIsIFwid1wiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQWRtaW5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiV2FybnMgYSB1c2VyXCIsXHJcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJ3YXJuIFsgbWVtYmVyIF1cIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3YXJuIEB6ZWVreWJsYXN0IHRlc3RcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW1wiTUFOQUdFX01FU1NBR0VTXCJdLFxyXG4gICAgICAgICAgICBvd25lck9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcmdzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCBwbGVhc2UgcHJvdmlkZSBhIG1lbWJlciB0byB3YXJuLi4uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCBwbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG1lbWJlciB0byB3YXJuLi4uYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVhc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXCJObyByZWFzb24gcHJvdmlkZWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7IG1lbWJlciwgcmVhc29uIH06IHsgbWVtYmVyOiBHdWlsZE1lbWJlciwgcmVhc29uOiBzdHJpbmcgfSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGNvbnN0IHdhcm5SZXBvOiBSZXBvc2l0b3J5PFdhcm5zPiA9IHRoaXMuY2xpZW50LmRiLmdldFJlcG9zaXRvcnkoV2FybnMpO1xyXG4gICAgICAgIGlmIChtZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiA+PSBtZXNzYWdlLm1lbWJlci5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uICYmIG1lc3NhZ2UuYXV0aG9yLmlkICE9PSBtZXNzYWdlLmd1aWxkLm93bmVySUQpXHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwucmVwbHkoXCJ0aGlzIG1lbWJlciBoYXMgb3Igc2FtZSByb2xlIGFzIHlvdSFcIik7XHJcblxyXG4gICAgICAgIGF3YWl0IHdhcm5SZXBvLmluc2VydCh7XHJcbiAgICAgICAgICAgIGd1aWxkOiBtZXNzYWdlLmd1aWxkLmlkLFxyXG4gICAgICAgICAgICB1c2VyOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgICAgIG1vZGVyYXRvcjogbWVzc2FnZS5hdXRob3IuaWQsXHJcbiAgICAgICAgICAgIHJlYXNvbjogcmVhc29uXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGAqKiR7bWVtYmVyLnVzZXIudGFnfSoqIGhhcyBiZWVuIHdhcm4gYnkgKioke21lc3NhZ2UuYXV0aG9yLnRhZ30qKiBmb3IgKioke3JlYXNvbn0qKmApO1xyXG4gICAgfVxyXG59Il19