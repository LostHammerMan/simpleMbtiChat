package com.chat.simpleMbtiChat.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	@GetMapping("/api/test")
	public String hello() {
		return "백엔드 데이터";
	}

	@GetMapping("/hello")
	public String hello2(){
		return "hello from Spring";
	}
}
