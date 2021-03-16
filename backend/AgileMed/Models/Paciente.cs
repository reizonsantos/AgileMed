using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgileMed.Models
{
    public class Paciente
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdPaciente { get; set; }
        public string Nome { get; set; }
        public string DataNascimento { get; set; }
        public string CPF { get; set; }
        public string Sexo { get; set; }
        public string Endereco { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }

        public string Peso { get; set; }
        public string Altura { get; set; }

        public string QueixaSintoma { get; set; }
        public string InicioAtendimento { get; set; }
        public string EncerramentoAtendimento { get; set; }
        public bool Medicacao { get; set; }
        public string NomeMedicacao { get; set; }
        public bool Atestado { get; set; }
        public string DiaAtestado { get; set; }
    }
}
