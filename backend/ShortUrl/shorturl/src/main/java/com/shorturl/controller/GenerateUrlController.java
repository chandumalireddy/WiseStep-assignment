package com.shorturl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.shorturl.model.ShortURL;
import com.shorturl.service.GeneratedUrlService;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class GenerateUrlController {
	
	@Autowired
	private GeneratedUrlService urlService;
	
	@GetMapping("/geturl/{url}")
	public String getShortenUrl(@PathVariable(value="url") String shortenUrl) {
		System.out.println(shortenUrl);
		return urlService.getOriginalUrl(shortenUrl);
		
	}
	
	@PostMapping("/generate/shorturl")
	public String generateShortUrl(@RequestBody ShortURL originalUrl) {
		return urlService.generateShortUrl(originalUrl);
		
	}


}
