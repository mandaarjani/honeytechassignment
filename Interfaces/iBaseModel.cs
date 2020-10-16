using System;

namespace honeytechassignment.Interfaces
{
    public interface IBaseModel
    {
        public DateTime CurrentDate { get; set; }
        public string Summary { get; set; }
    }
}
 