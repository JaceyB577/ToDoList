using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoList.Models
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public bool IsDone { get; set; }
        public int Date { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}