using AgileMed.Models;
using AgileMed.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgileMed
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<FuncionarioDatabaseSettings>(
                Configuration.GetSection(nameof(FuncionarioDatabaseSettings)));
            services.AddSingleton<IFuncionarioDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<FuncionarioDatabaseSettings>>().Value);
            services.AddSingleton<FuncionarioService>();

            services.Configure<PacienteDatabaseSettings>(
                Configuration.GetSection(nameof(PacienteDatabaseSettings)));
            services.AddSingleton<IPacienteDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<PacienteDatabaseSettings>>().Value);
            services.AddSingleton<PacienteService>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "AgileMed", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "AgileMed v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
