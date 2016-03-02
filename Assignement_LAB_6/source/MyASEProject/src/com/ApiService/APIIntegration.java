package com.ApiService;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;


public class APIIntegration {

	public String getVenues() throws Exception{
		String url = "https://api.foursquare.com/v2/venues/search?ll=39.0997,-94.5783&query=kansas&limit=15&categoryId=4d4b7104d754a06370d81259&client_id=P2IIU4YKUJ2ILBZMYLTDO42TUKACIOTJ5QVEYUK3F2ZAW0K3&client_secret=3A3ZTVHPSK4VU2T2YJLY0SSD43IH1Z32JAQNAEV4DWMLOSPZ&v=20130815";
		CloseableHttpClient client = HttpClients.createDefault();
		HttpGet get = new HttpGet(url);
		CloseableHttpResponse resp = client.execute(get);
		BufferedReader reader = new BufferedReader(new InputStreamReader(resp.getEntity().getContent()));
		StringBuffer response = new StringBuffer();
		String inputLine = "";
        while ((inputLine = reader.readLine()) != null) {
            response.append(inputLine);
        }
        reader.close();
        client.close();
		return response.toString();
	}
	
}