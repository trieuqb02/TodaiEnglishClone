package com.news.identity.exception;

import org.springframework.http.HttpStatus;

public class EntityAlreadyException extends GlobalException{
    public EntityAlreadyException(String message, String code, HttpStatus httpStatus) {
        super(code, message,httpStatus);
    }
}
