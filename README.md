# Live Support Chat System 💬

Bu proje, **.NET 8.0** ve **SignalR** teknolojileri kullanılarak geliştirilmiş, gerçek zamanlı (real-time) iletişim sağlayan basit bir Canlı Destek (Live Support) mesajlaşma uygulamasıdır. Frontend tarafında herhangi bir framework (React, Angular vb.) kullanılmamış, saf (Vanilla) JavaScript ile hafif bir yapı kurulmuştur.

## 🚀 Proje Hakkında

Bu proje, SignalR'ın temel çalışma mantığını, Hub yapısını ve Client-Server arasındaki anlık veri iletişimini göstermek amacıyla oluşturulmuştur.

### Özellikler
* 📡 **Gerçek Zamanlı İletişim:** SignalR (WebSockets) üzerinden anlık mesajlaşma.
* ⚡ **.NET 8.0:** En güncel .NET sürümü ile yüksek performans.
* 🎨 **Sade Frontend:** Karmaşık kütüphaneler olmadan, sadece HTML, CSS ve JavaScript (`chat.js`).
* Architecture:** Temiz bir `Api` (Backend) ve `Client` (Frontend) ayrımı.

## 🛠 Kullanılan Teknolojiler

* **Backend:** ASP.NET Core 8.0, SignalR
* **Frontend:** HTML5, Vanilla JavaScript
* **IDE:** Visual Studio 2022

## 📂 Proje Yapısı

* **Api:** Server tarafı kodlarını barındırır.
    * `Hubs/SupportHub.cs`: Mesaj trafiğini yöneten SignalR Hub sınıfı.
    * `Models/MessageDto.cs`: Veri transfer objesi.
* **Client:** Kullanıcı arayüzü dosyaları.
    * `index.html`: Chat arayüzü.
    * `chat.js`: SignalR client bağlantı ve mesajlaşma mantığı.

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### 1. Gereksinimler
* [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) yüklü olmalıdır.

### 2. Projeyi Klonlayın
```bash
git clone [https://github.com/KULLANICI_ADINIZ/LiveSupportChatSystem.git](https://github.com/KULLANICI_ADINIZ/LiveSupportChatSystem.git)
cd LiveSupportChatSystem
