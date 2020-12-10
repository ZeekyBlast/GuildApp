"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ping extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "Public",
            description: {
                content: "Checl the latency of ping to the Discord API",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3
        });
    }
    exec(message) {
        return message.channel.send(`Pong! \`${this.client.ws.ping}ms\``);
    }
}
exports.default = ping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMvcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixJQUFLLFNBQVEsd0JBQU87SUFDckM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsOENBQThDO2dCQUN2RCxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ04sTUFBTTtpQkFDVDthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQW5CRCx1QkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGluZyBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwicGluZ1wiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcInBpbmdcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlB1YmxpY1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJDaGVjbCB0aGUgbGF0ZW5jeSBvZiBwaW5nIHRvIHRoZSBEaXNjb3JkIEFQSVwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwicGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInBpbmdcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoYFBvbmchIFxcYCR7dGhpcy5jbGllbnQud3MucGluZ31tc1xcYGApO1xyXG4gICAgfVxyXG59Il19