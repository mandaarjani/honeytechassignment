using System;
using honeytechassignment.Interfaces;

namespace honeytechassignment
{
    public class Temperature : IBaseModel
    {
        public int TemperatureC { get; set; }
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        public string Summary { get; set; }
        public DateTime CurrentDate { get ; set ; }
    }
}
