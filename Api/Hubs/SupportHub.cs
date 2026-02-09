using Api.Interfaces;
using Api.Models;
using Microsoft.AspNetCore.SignalR;

namespace Api.Hubs
{
    public class SupportHub: Hub<ISupportClient>
    {
        public async Task SendMessageToAll(MessageDto message)
        {

        }
    }
}
