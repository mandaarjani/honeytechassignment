using System;
using honeytechassignment.Interfaces;

namespace honeytechassignment
{
   
    public class Humidity : IBaseModel
    {
        public int CurrentHumidity { get; set; }
        public DateTime CurrentDate { get; set; }
        public string Summary { get; set; }
    }
}
