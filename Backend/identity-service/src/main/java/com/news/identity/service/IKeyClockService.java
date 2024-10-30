package com.news.identity.service;


import com.news.identity.payload.request.RegisterRequest;
import com.news.identity.payload.response.UserResponse;

public interface IKeyClockService {

    void createRole(String name, String description,Boolean init);

    UserResponse createUser(RegisterRequest user);

}
