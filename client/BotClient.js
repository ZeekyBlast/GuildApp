"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const Config_1 = require("../Config");
const Database_1 = __importDefault(require("../structures/Database"));
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: Config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    timeout: "You took too long, the command has now been cancelled...",
                    ended: "You exceeded the maximum amouny of tries, this command has now been cancelled...",
                    cancel: "This command is now cancelled...",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: Config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
        this.db = Database_1.default.get(Config_1.dbname);
        await this.db.connect();
        await this.db.synchronize();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUFtRDtBQUduRCxzRUFBOEM7QUFlOUMsTUFBcUIsU0FBVSxTQUFRLDZCQUFZO0lBNkIvQyxZQUFtQixNQUFrQjtRQUNqQyxLQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFDO1FBN0JBLG9CQUFlLEdBQW9CLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDaEUsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFDSSxtQkFBYyxHQUFtQixJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFO1lBQzdELFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7WUFDNUMsTUFBTSxFQUFFLGVBQU07WUFDZCxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixtQkFBbUIsRUFBRSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNkLE1BQU0sRUFBRTtvQkFDSixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsOENBQThDO29CQUN0RyxXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsOENBQThDO29CQUN0RyxPQUFPLEVBQUUsMERBQTBEO29CQUNuRSxLQUFLLEVBQUUsa0ZBQWtGO29CQUN6RixNQUFNLEVBQUUsa0NBQWtDO29CQUMxQyxPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLEVBQUUsR0FBRztpQkFDWjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNoQjtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDNUIsQ0FBQyxDQUFDO1FBT0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxFQUFFLEdBQUcsa0JBQVEsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDL0IsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUF6REQsNEJBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWthaXJvQ2xpZW50LCBDb21tYW5kSGFuZGxlciwgTGlzdGVuZXJIYW5kbGVyIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgcHJlZml4LCBvd25lcnMsIGRibmFtZSB9IGZyb20gXCIuLi9Db25maWdcIjtcclxuaW1wb3J0IHsgcHJvbWlzZXMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBEYXRhQmFzZSBmcm9tIFwiLi4vc3RydWN0dXJlcy9EYXRhYmFzZVwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJkaXNjb3JkLWFrYWlyb1wiIHtcclxuICAgIGludGVyZmFjZSBBa2Fpcm9DbGllbnQge1xyXG4gICAgICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjtcclxuICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlcjtcclxuICAgICAgICBkYjogQ29ubmVjdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEJvdE9wdGlvbnMge1xyXG4gICAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgICBvd25lcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQWthaXJvQ2xpZW50IHtcclxuICAgIHB1YmxpYyBjb25maWc6IEJvdE9wdGlvbnM7XHJcbiAgICBwdWJsaWMgZGIhOiBDb25uZWN0aW9uO1xyXG4gICAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XHJcbiAgICAgICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImxpc3RlbmVyc1wiKVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyID0gbmV3IENvbW1hbmRIYW5kbGVyKHRoaXMsIHtcclxuICAgICAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiY29tbWFuZHNcIiksXHJcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXHJcbiAgICAgICAgYWxsb3dNZW50aW9uOiB0cnVlLFxyXG4gICAgICAgIGhhbmRsZUVkaXRzOiB0cnVlLFxyXG4gICAgICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxyXG4gICAgICAgIGNvbW1hbmRVdGlsTGlmZXRpbWU6IDNlNSxcclxuICAgICAgICBkZWZhdWx0Q29vbGRvd246IDZlNCxcclxuICAgICAgICBhcmd1bWVudERlZmF1bHRzOiB7XHJcbiAgICAgICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcclxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZC4uLmAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBcIllvdSB0b29rIHRvbyBsb25nLCB0aGUgY29tbWFuZCBoYXMgbm93IGJlZW4gY2FuY2VsbGVkLi4uXCIsXHJcbiAgICAgICAgICAgICAgICBlbmRlZDogXCJZb3UgZXhjZWVkZWQgdGhlIG1heGltdW0gYW1vdW55IG9mIHRyaWVzLCB0aGlzIGNvbW1hbmQgaGFzIG5vdyBiZWVuIGNhbmNlbGxlZC4uLlwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBcIlRoaXMgY29tbWFuZCBpcyBub3cgY2FuY2VsbGVkLi4uXCIsXHJcbiAgICAgICAgICAgICAgICByZXRyaWVzOiAzLFxyXG4gICAgICAgICAgICAgICAgdGltZTogM2U0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG90aGVyd2lzZTogXCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWdub3JlUGVybWlzc2lvbnM6IG93bmVyc1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgb3duZXJJRDogY29uZmlnLm93bmVyc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIudXNlTGlzdGVuZXJIYW5kbGVyKHRoaXMubGlzdGVuZXJIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5zZXRFbWl0dGVycyh7XHJcbiAgICAgICAgICAgIGNvbW1hbmRIYW5kbGVyOiB0aGlzLmNvbW1hbmRIYW5kbGVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxyXG4gICAgICAgICAgICBwcm9jZXNzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYiA9IERhdGFCYXNlLmdldChkYm5hbWUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZGIuY29ubmVjdCgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZGIuc3luY2hyb25pemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xyXG4gICAgfVxyXG59ICJdfQ==