package com.example.Mongoexample.resource;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Mongoexample.model.Book;
import com.example.Mongoexample.repository.BookRepository;

@RestController
public class BookController {
	
	@Autowired
	private BookRepository repository;
	
	@PostMapping("/addBook")
	public String saveBook(@RequestBody Book book)
	{
		repository.save(book);
		return "Added book successfully";
	}
	
	@GetMapping("/findAllBooks")
	public List<Book> getBooks()
	{
		return repository.findAll();
	}
	
	@GetMapping("/findallbooks/{id}")
	public Optional<Book> getBook(@PathVariable String id)
	{
		return repository.findById(id);
	}
	@DeleteMapping("/delete/{id}")
	public String DeleteBook(@PathVariable String id)
	{
		repository.deleteById(id);
		return "Book deleted successfully";
	}
	
}
