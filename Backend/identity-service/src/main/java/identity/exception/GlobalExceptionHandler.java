package identity.exception;

import identity.exception.GlobalException;
import identity.payload.response.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GlobalException.class)
    public ResponseEntity<ErrorResponse> handlerException(GlobalException globalException) {
        return ResponseEntity.status(globalException.getHttpStatus()).body(
                ErrorResponse.builder().message(globalException.getMessage()).build()
        );
    }
}
