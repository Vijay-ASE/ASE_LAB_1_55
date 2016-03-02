package com.ASE;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;

import com.ApiService.*;

@Path("/apiresp")
public class MyWebService {
	
	
	@GET
	@Produces("application/json")
	public Response getVenueDetials() throws Exception{
		APIIntegration results = new APIIntegration();
		String result = results.getVenues();
		return Response.status(200).entity(result).build();
	}

}