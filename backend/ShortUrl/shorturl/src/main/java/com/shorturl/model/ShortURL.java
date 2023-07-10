package com.shorturl.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(value="genarate_url")
public class ShortURL {

	private String shortUrl;
	private String originalUrl;
	
	public String getOriginalUrl() {
		return originalUrl;
	}

	public void setOriginalUrl(String originalUrl) {
		this.originalUrl = originalUrl;
	}

	private Date createdDate;

	public void setShortURl(String shortURl) {
		this.shortUrl = shortURl;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getShortURl() {
		return shortUrl;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	@Override
	public String toString() {
		return "ShortURL [shortURl=" + shortUrl + ", originalUrl=" + originalUrl + ", createdDate=" + createdDate + "]";
	}
	
}
