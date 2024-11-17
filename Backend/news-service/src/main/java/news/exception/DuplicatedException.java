package news.exception;

import org.springframework.http.HttpStatus;

public class DuplicatedException extends GlobalException{
    public DuplicatedException(String message, String name, HttpStatus httpStatus) {
        super(message + ": " + name, httpStatus);
    }
}
