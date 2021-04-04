using AgileMed.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgileMed.Services
{
    public class PacienteService
    {
        private readonly IMongoCollection<Paciente> _paciente;

        public PacienteService(IPacienteDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _paciente = database.GetCollection<Paciente>(settings.CollectionName);
        }

        public List<Paciente> Get()
        {
            return _paciente.Find(paciente => true).ToList();
        }

        public Paciente Get(string id)
        {
            return _paciente.Find<Paciente>(paciente => paciente.IdPaciente == id).FirstOrDefault();
        }

        public Paciente Create(Paciente paciente)
        {
            _paciente.InsertOne(paciente);
            return paciente;
        }

        public void Update(string id, Paciente pacienteIn)
        {
            _paciente.ReplaceOne(paciente => paciente.IdPaciente == id, pacienteIn);
        }

        public void Remove(Paciente pacienteIn) 
        {
            _paciente.DeleteOne(paciente => paciente.IdPaciente == pacienteIn.IdPaciente);
        }
        public void Remove(string id)
        {
            _paciente.DeleteOne(paciente => paciente.IdPaciente == id);
        }
    }
}
