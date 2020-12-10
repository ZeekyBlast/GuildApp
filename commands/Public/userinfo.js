"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class botinfo extends discord_akairo_1.Command {
    constructor() {
        super("userinfo", {
            aliases: ["userinfo", "user"],
            category: "Public",
            description: {
                content: "Gets the a userinfo",
                usage: "userinfo @user",
                examples: [
                    "userinfo @zeekyblast",
                    "user @zeekyblast"
                ]
            },
            ratelimit: 3,
            ownerOnly: false,
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg) => `${msg.author}, please provide a member to look at...`,
                        retry: (msg) => `${msg.author}, please provide a valid member to look at...`
                    }
                },
                {
                    id: "size",
                    type: (_, str) => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str)))
                            return Number(str);
                        return null;
                    },
                    match: "option",
                    flag: ["-size="],
                    default: 2048
                }
            ]
        });
    }
    exec(message, { member, size }) {
        let botembed = new discord_js_1.MessageEmbed()
            .setColor("RED")
            .setTitle(`UserInfo: ${member.user.username}`)
            .setThumbnail(member.user.displayAvatarURL({ size: size }))
            .addField("User", member.user.username)
            .addField("Tag", `${member.user.tag}`)
            .addField("NickName", `${member.nickname}`)
            .addField("JoinedAt", `${member.joinedAt.toLocaleString()}`)
            .addField("AccountCreated", `${member.user.createdAt.toLocaleString()}`);
        return message.channel.send(botembed);
    }
}
exports.default = botinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljL3VzZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLDJDQUFtRDtBQUVuRCxNQUFxQixPQUFRLFNBQVEsd0JBQU87SUFDeEM7UUFDSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztZQUM3QixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLHFCQUFxQjtnQkFDOUIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsUUFBUSxFQUFFO29CQUNOLHNCQUFzQjtvQkFDdEIsa0JBQWtCO2lCQUNyQjthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSx5Q0FBeUM7d0JBQy9FLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSwrQ0FBK0M7cUJBQ3hGO2lCQUNKO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQWlCLEVBQUU7d0JBQzdDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQUUsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3BILE9BQU8sSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUNELEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsT0FBTyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0o7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF5QztRQUNqRixJQUFJLFFBQVEsR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDNUIsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLFFBQVEsQ0FBQyxhQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDN0MsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBaUIsRUFBRSxDQUFDLENBQUM7YUFDdkUsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0QyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNyQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7YUFDM0QsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzVFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDekMsQ0FBQztDQUNKO0FBakRELDBCQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgSW1hZ2VTaXplIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgR3VpbGRNZW1iZXIgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm90aW5mbyBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwidXNlcmluZm9cIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJ1c2VyaW5mb1wiLCBcInVzZXJcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlB1YmxpY1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJHZXRzIHRoZSBhIHVzZXJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJ1c2VyaW5mbyBAdXNlclwiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInVzZXJpbmZvIEB6ZWVreWJsYXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyIEB6ZWVreWJsYXN0XCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICBvd25lck9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcmdzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCBwbGVhc2UgcHJvdmlkZSBhIG1lbWJlciB0byBsb29rIGF0Li4uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCBwbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG1lbWJlciB0byBsb29rIGF0Li4uYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IG51bGwgfCBOdW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyICYmICFpc05hTihOdW1iZXIoc3RyKSkgJiYgWzE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTIsIDEwMjQsIDIwNDhdLmluY2x1ZGVzKE51bWJlcihzdHIpKSkgcmV0dXJuIE51bWJlcihzdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBcIm9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWc6IFtcIi1zaXplPVwiXSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAyMDQ4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyBtZW1iZXIsIHNpemUgfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyLCBzaXplOiBudW1iZXIgfSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGxldCBib3RlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSRURcIilcclxuICAgICAgICAgICAgLnNldFRpdGxlKGBVc2VySW5mbzogJHttZW1iZXIudXNlci51c2VybmFtZX1gKVxyXG4gICAgICAgICAgICAuc2V0VGh1bWJuYWlsKG1lbWJlci51c2VyLmRpc3BsYXlBdmF0YXJVUkwoeyBzaXplOiBzaXplIGFzIEltYWdlU2l6ZSB9KSlcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiVXNlclwiLCBtZW1iZXIudXNlci51c2VybmFtZSlcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiVGFnXCIsIGAke21lbWJlci51c2VyLnRhZ31gKVxyXG4gICAgICAgICAgICAuYWRkRmllbGQoXCJOaWNrTmFtZVwiLCBgJHttZW1iZXIubmlja25hbWV9YClcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiSm9pbmVkQXRcIiwgYCR7bWVtYmVyLmpvaW5lZEF0LnRvTG9jYWxlU3RyaW5nKCl9YClcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiQWNjb3VudENyZWF0ZWRcIiwgYCR7bWVtYmVyLnVzZXIuY3JlYXRlZEF0LnRvTG9jYWxlU3RyaW5nKCl9YClcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoYm90ZW1iZWQpXHJcbiAgICB9XHJcbn0iXX0=