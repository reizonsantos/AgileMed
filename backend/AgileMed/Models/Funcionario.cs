using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgileMed.Models
{
    public class Funcionario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdFuncionario { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string CRO { get; set; }
        public string Funcao { get; set; }
        public string Endereco { get; set; }
        public int NumbEndereco { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
