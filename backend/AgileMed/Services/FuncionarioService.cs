using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AgileMed.Models;
using MongoDB.Driver;

namespace AgileMed.Services
{
    public class FuncionarioService
    {
        private readonly IMongoCollection<Funcionario> _funcionarios;

        public FuncionarioService(IFuncionarioDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _funcionarios = database.GetCollection<Funcionario>(settings.CollectionName);
        }

        public List<Funcionario> Get()
        {
            return _funcionarios.Find(funcionario => true).ToList();
        }

        public Funcionario Get(string id)
        {
            return _funcionarios.Find<Funcionario>(funcionario => funcionario.IdFuncionario == id).FirstOrDefault();
        }

        public Funcionario Create(Funcionario funcionario)
        {
            _funcionarios.InsertOne(funcionario);
            return funcionario;
        }

        public void Update(string id, Funcionario funcionarioIn)
        {
            _funcionarios.ReplaceOne(funcionario => funcionario.IdFuncionario == id, funcionarioIn);
        }

        public void Remove(Funcionario funcionarioIn)
        {
            _funcionarios.DeleteOne(funcionario => funcionario.IdFuncionario == funcionarioIn.IdFuncionario);
        }

        public void Remove(string id)
        {
            _funcionarios.DeleteOne(funcionario => funcionario.IdFuncionario == id);
        }


    }
}
