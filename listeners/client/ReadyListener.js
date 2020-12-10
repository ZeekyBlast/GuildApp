"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Giveaways_1 = require("../../models/Giveaways");
const GiveawayManger_1 = __importDefault(require("../../structures/giveaways/GiveawayManger"));
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        const giveawayRepo = this.client.db.getRepository(Giveaways_1.Giveaways);
        this.client.user.setPresence({
            status: "idle",
            activity: {
                name: "Minecraft Survival Server. Version: 1.16.4",
                type: "PLAYING"
            }
        });
        console.log(`${this.client.user.tag} is now online`);
        setInterval(async () => {
            const giveaways = await giveawayRepo.find();
            giveaways.filter(g => g.end <= Date.now()).map(async (g) => {
                const msg = await this.client.channels.cache.get(g.channel).messages.fetch()
                    .catch(() => null);
                if (!msg)
                    return giveawayRepo.delete(g);
                GiveawayManger_1.default.end(giveawayRepo, msg);
            });
        }, 3e5);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY2xpZW50L1JlYWR5TGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBMEM7QUFHMUMsc0RBQWtEO0FBRWxELCtGQUFzRTtBQUV0RSxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDL0M7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sSUFBSTtRQUVQLE1BQU0sWUFBWSxHQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN6QixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRTtnQkFDTixJQUFJLEVBQUUsNENBQTRDO2dCQUNsRCxJQUFJLEVBQUUsU0FBUzthQUNsQjtTQUVKLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFFckQsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ25CLE1BQU0sU0FBUyxHQUFnQixNQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6RCxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO2dCQUNyRCxNQUFNLEdBQUcsR0FBWSxNQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO3FCQUNqRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXZCLElBQUksQ0FBQyxHQUFHO29CQUFFLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFeEMsd0JBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztDQUNKO0FBcENELGdDQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IFRleHRDaGFubmVsLCBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IEdpdmVhd2F5cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvR2l2ZWF3YXlzXCJcclxuXHJcbmltcG9ydCBHaXZlYXdheU1hbmdlciBmcm9tIFwiLi4vLi4vc3RydWN0dXJlcy9naXZlYXdheXMvR2l2ZWF3YXlNYW5nZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlMaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInJlYWR5XCIsIHtcclxuICAgICAgICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcclxuICAgICAgICAgICAgZXZlbnQ6IFwicmVhZHlcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY2xpZW50XCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBnaXZlYXdheVJlcG86IFJlcG9zaXRvcnk8R2l2ZWF3YXlzPiA9IHRoaXMuY2xpZW50LmRiLmdldFJlcG9zaXRvcnkoR2l2ZWF3YXlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGllbnQudXNlci5zZXRQcmVzZW5jZSh7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJpZGxlXCIsXHJcbiAgICAgICAgICAgIGFjdGl2aXR5OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1pbmVjcmFmdCBTdXJ2aXZhbCBTZXJ2ZXIuIFZlcnNpb246IDEuMTYuNFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQTEFZSU5HXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNsaWVudC51c2VyLnRhZ30gaXMgbm93IG9ubGluZWApO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdpdmVhd2F5czogR2l2ZWF3YXlzW10gPSBhd2FpdCBnaXZlYXdheVJlcG8uZmluZCgpO1xyXG4gICAgICAgICAgICBnaXZlYXdheXMuZmlsdGVyKGcgPT4gZy5lbmQgPD0gRGF0ZS5ub3coKSkubWFwKGFzeW5jIGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXNnOiBNZXNzYWdlID0gYXdhaXQgKHRoaXMuY2xpZW50LmNoYW5uZWxzLmNhY2hlLmdldChnLmNoYW5uZWwpIGFzIFRleHRDaGFubmVsKS5tZXNzYWdlcy5mZXRjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbXNnKSByZXR1cm4gZ2l2ZWF3YXlSZXBvLmRlbGV0ZShnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBHaXZlYXdheU1hbmdlci5lbmQoZ2l2ZWF3YXlSZXBvLCBtc2cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzZTUpO1xyXG4gICAgfVxyXG59Il19