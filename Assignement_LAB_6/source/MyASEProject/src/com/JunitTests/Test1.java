package com.JunitTests;

import javax.ws.rs.core.Response;

import org.junit.Test;

import com.ASE.MyWebService;

public class Test1 {
	
	@Test
	public void weServiceTest() throws Exception{
		MyWebService test = new MyWebService();
		Response resp = test.getVenueDetials();
		System.out.println(resp.toString());
		System.out.println("The Response was processed successfully");
	}
}
