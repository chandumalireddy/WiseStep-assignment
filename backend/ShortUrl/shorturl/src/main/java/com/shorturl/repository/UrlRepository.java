package com.shorturl.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.shorturl.model.ShortURL;

@Repository
public interface UrlRepository extends MongoRepository<ShortURL,String>{

	@Query(value="{ 'shortUrl' : ?0 }", fields="{ 'originalUrl' : 1, 'shortUrl' : 1, 'createdDate':1}")
	List<ShortURL> findByShortUrl(String url);
	@Query(value="{ 'originalUrl' : ?0 }", fields="{ 'originalUrl' : 1, 'shortUrl' : 1, 'createdDate':1}")
	List<ShortURL> findByOriginalUrl(String url);
}
