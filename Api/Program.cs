using Api.Hubs;

var builder = WebApplication.CreateBuilder(args);

var corsOrigin = builder.Configuration["CorsSettings:Origin"];

builder.Services.AddSignalR();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("ClientPermission", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500", "http://localhost:5500")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors("ClientPermission");

app.MapHub<SupportHub>("/hubs/support");

app.Run();
