package com.shorturl.service;

import java.nio.charset.Charset;
import java.util.Date;
import java.util.List;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.validator.routines.UrlValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.google.common.hash.Hashing;
import com.shorturl.model.ShortURL;
import com.shorturl.repository.UrlRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UrlServiceImpl implements GeneratedUrlService {

	Logger logger = LoggerFactory.getLogger(UrlServiceImpl.class);

	@Autowired
	UrlRepository repository;

	@Override
	public String getOriginalUrl(String url) {
		String result = "";
		List<ShortURL> shortUrl = repository.findByShortUrl(url);
		if (CollectionUtils.isNotEmpty(shortUrl)) {
			Date date = new Date();
			long difference_In_Time = date.getTime() - shortUrl.get(0).getCreatedDate().getTime();
			long difference_In_Minutes = (difference_In_Time / (1000 * 60)) % 60;
			if (difference_In_Minutes > 5) {
				result = "expired";
			} else {
				result = shortUrl.get(0).getOriginalUrl();
			}
		} else {
			result = "Url is not exist";
		}
		return result;
	}

	@Override
	public String generateShortUrl(ShortURL requestUrl) {
		String shortUrl = "";

		List<ShortURL> duplicateResult = repository.findByOriginalUrl(requestUrl.getOriginalUrl());
		if (CollectionUtils.isNotEmpty(duplicateResult)) {
			return "Duplicate URL";
		} else {
			try {
				Boolean isValid = isUrlValid(requestUrl.getOriginalUrl());
				if (!isValid) {
					return "Invalid Url";
				} else {
					shortUrl = Hashing.murmur3_32_fixed()
							.hashString(requestUrl.getOriginalUrl(), Charset.defaultCharset()).toString();
					ShortURL url = new ShortURL();
					url.setOriginalUrl(requestUrl.getOriginalUrl());
					url.setShortURl(shortUrl);
					url.setCreatedDate(new Date());
					repository.save(url);
				}
			} catch (Exception exception) {
				logger.error("Exception Occur while generating Shorten URL", exception);
				throw exception;
			}
		}
		return shortUrl;
	}

	private Boolean isUrlValid(String url) {
		boolean result = UrlValidator.getInstance().isValid(url);
		return result;
	}

}
