using Api.Models;

namespace Api.Interfaces
{
    public interface ISupportClient
    {
        Task ReceiveMessage(MessageDto message);
    }
}
