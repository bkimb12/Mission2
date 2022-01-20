using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class CalcModel
    {
        [Range(0, 100)]
        public int Assign { get; set; }

        [Range(0, 100)]
        public int Group { get; set; }

        [Range(0, 100)]
        public int Quiz { get; set; }

        [Range(0, 100)]
        public int Ex { get; set; }

        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
