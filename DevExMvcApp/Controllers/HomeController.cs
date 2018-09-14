using DevExMvcApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExMvcApp.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            return View();
        }

        public ActionResult GridViewPartial()
        {
            var model = SampleData.Orders;
            return PartialView("_GridViewPartial", model);
        }
    }
}