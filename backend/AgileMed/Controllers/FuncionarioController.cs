using AgileMed.Models;
using AgileMed.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgileMed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionarioController : ControllerBase
    {
        private readonly FuncionarioService _funcionarioService;

        public FuncionarioController(FuncionarioService funcionarioService)
        {
            _funcionarioService = funcionarioService;
        }

        [HttpGet]
        public ActionResult<List<Funcionario>> Get()
        {
            return _funcionarioService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<Funcionario> Get(string id)
        {
            var funcionario = _funcionarioService.Get(id);

            if (funcionario == null)
            {
                return NotFound();
            }

            return funcionario;
        }

        [HttpPost]
        public ActionResult<Funcionario> Create([FromBody] Funcionario funcionario)
        {
            _funcionarioService.Create(funcionario);

            return Created("Getfuncionario", funcionario);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Funcionario funcionarioIn)
        {
            var funcionario = _funcionarioService.Get(id);

            if (funcionario == null)
            {
                return NotFound();
            }

            _funcionarioService.Update(id, funcionarioIn);

            return NoContent();
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(string id)
        {
            var funcionario = _funcionarioService.Get(id);

            if (funcionario == null)
            {
                return NotFound();
            }

            _funcionarioService.Remove(funcionario.IdFuncionario);

            return NoContent();
        }
    }
}
