class ChatService {
    constructor() {
        this.HUB_URL = 'https://localhost:7181/hubs/support';
        this.connection = null;

        this.ui = {
            statusBadge: document.getElementById('connectionStatus'),
            messageList: document.getElementById('messageList'),
            btnSend: document.getElementById('btnSend'),
            txtUser: document.getElementById('txtUser'),
            txtMsg: document.getElementById('txtMessage')
        }

        this.init();
    }

    init() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(this.HUB_URL)
            .withAutomaticReconnect()
            .build();

        this.registerEvents();
        this.startConnection();
    }

    registerEvents() {
        // Mesaj Geldiğinde
        this.connection.on('ReceiveMessage', (messageDto) => {
            this.appendMessageToUi(messageDto);
        })

        // Gönder butonuna tıklandığında
        this.ui.btnSend.addEventListener('click', (e) => {
            e.preventDefault()
            this.sendMessage();
        })

        // Enter tuşu desteği
        this.ui.txtMsg.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.ui.btnSend.click()
            }
        })

    }

    async startConnection() {
        try {
            this.ui.statusBadge.textContent = 'Bağlanıyor...'
            this.ui.statusBadge.className = 'badge text-bg-warning';
            await this.connection.start();

            this.ui.statusBadge.textContent = 'Bağlandı';
            this.ui.statusBadge.className = 'badge text-bg-success';
            this.ui.btnSend.disabled = false;
            this.ui.txtMsg.disabled = false;
        } catch (err) {
            console.error('Connection error: ', err);
            this.ui.statusBadge.textContent = 'Bağlantı Yok';
            this.ui.statusBadge.className = 'badge text-bg-danger';
            this.ui.btnSend.disabled = true;
            this.ui.txtMsg.disabled = true;
            setTimeout(() => this.startConnection(), 5000); // 5 saniye sonra yeniden bağlanmayı dene
        }
    }

    async sendMessage() {
        const sender = this.ui.txtUser.value.trim() || "Anonim";
        const message = this.ui.txtMsg.value.trim();
        if (!message) {
            alert('Lütfen mesajınızı girin.');
            return;
        }

        const payload = {
            sender: sender,
            content: message,
            timestamp: new Date().toISOString()
        }

        try {
            await this.connection.invoke('SendMessageToAll', payload);
            this.ui.txtMsg.value = '';
            this.ui.txtMsg.focus();
        } catch (err) {
            console.error('Mesaj gönderme hatası: ', err);
            alert('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
        }
    }

    appendMessageToUi(messageDto) {
        const msgWrapper = document.createElement('div');
        msgWrapper.className = 'mb-3 d-flex flex-column align-items-start';
        const timeStr = new Date(messageDto.timestamp).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

        msgWrapper.innerHTML = `
        <div class="d-fles w-100 justify-content-between">
            <small class="fw-bold text-primary">${messageDto.sender}</small>
            <small class="text-muted">${timeStr}</small>
        </div>
        <div class="alert alert-secondary py-2 px-3 mt-1 mb-0" role="alert">
            ${messageDto.content}
        </div>
        `

        this.ui.messageList.appendChild(msgWrapper);
        this.ui.messageList.scrollTop = this.ui.messageList.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => { new ChatService(); })