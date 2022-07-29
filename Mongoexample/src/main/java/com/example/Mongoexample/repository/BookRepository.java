package com.example.Mongoexample.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Mongoexample.model.Book;

public interface BookRepository extends MongoRepository<Book, String> {

}
