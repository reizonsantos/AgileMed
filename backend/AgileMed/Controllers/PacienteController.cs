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
    public class PacienteController : ControllerBase
    {
        private readonly PacienteService _pacienteService;

        public PacienteController(PacienteService pacienteService)
        {
            _pacienteService = pacienteService;
        }

        [HttpGet]
        public ActionResult<List<Paciente>> Get()
        {
            return _pacienteService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<Paciente> Get(string id)
        {
            var paciente = _pacienteService.Get(id);

            if (paciente == null)
            {
                return NotFound();
            }

            return paciente;
        }

        [HttpPost]
        public ActionResult<Paciente> Create([FromBody] Paciente paciente)
        {
            _pacienteService.Create(paciente);

            return Created("Getpaciente", paciente);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Paciente pacienteIn)
        {
            var paciente = _pacienteService.Get(id);

            if (paciente == null)
            {
                return NotFound();
            }

            _pacienteService.Update(id, pacienteIn);

            return NoContent();
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(string id)
        {
            var paciente = _pacienteService.Get(id);

            if (paciente == null)
            {
                return NotFound();
            }

            _pacienteService.Remove(paciente.IdPaciente);

            return NoContent();
        }
    }
}