package news.exception;

import org.springframework.http.HttpStatus;

public class NotFoundException extends GlobalException{

    public NotFoundException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
