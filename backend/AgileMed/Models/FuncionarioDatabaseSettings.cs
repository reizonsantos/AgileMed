using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgileMed.Models
{
    public class FuncionarioDatabaseSettings : IFuncionarioDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IFuncionarioDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
