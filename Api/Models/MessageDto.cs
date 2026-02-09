namespace Api.Models
{
    public class MessageDto
    {
        public string Sender { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        //public byte[]? Attachment { get; set; }
    }
}
