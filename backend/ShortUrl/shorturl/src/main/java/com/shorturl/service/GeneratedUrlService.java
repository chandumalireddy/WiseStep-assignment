package com.shorturl.service;

import com.shorturl.model.ShortURL;

public interface GeneratedUrlService {

	public String getOriginalUrl(String url);
	public String generateShortUrl(ShortURL url);
}
