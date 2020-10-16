using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using honeytechassignment;

namespace honeytechassignment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoomsController : ControllerBase
    {
        private readonly ILogger<RoomsController> _logger;

        public RoomsController(ILogger<RoomsController> logger)
        {
            _logger = logger;
        }

        [Route("temperature")]
        [HttpGet]
        public ActionResult<Temperature> GetTemperature()
        {        
            var temperatureDetails =  new Temperature() {CurrentDate = DateTime.Now, Summary = "Temperature", TemperatureC = 23 };
            return Ok(temperatureDetails);
        }

         [HttpGet]
         [Route("humidity")]
        public ActionResult<Humidity> GetHumidity()
        {        
            var temperatureDetails =  new Humidity() {CurrentDate = DateTime.Now, Summary = "Humidity", CurrentHumidity = 40 };
            return Ok(temperatureDetails);
        }
    }
}
