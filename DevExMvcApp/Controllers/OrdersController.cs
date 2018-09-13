using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DevExMvcApp.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;

namespace DevExMvcApp.Controllers {
    public class OrdersController : ApiController {

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.Orders, loadOptions));
        }

    }
}