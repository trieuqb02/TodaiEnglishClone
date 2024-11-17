package news.exception;

import org.springframework.http.HttpStatus;

public class BadRequestException extends GlobalException{
    public BadRequestException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
