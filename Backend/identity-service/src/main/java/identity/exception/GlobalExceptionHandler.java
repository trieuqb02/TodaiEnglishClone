package identity.exception;

import identity.payload.response.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GlobalException.class)
    public ResponseEntity<ErrorResponse> handlerException(GlobalException newsPaperGlobalException) {
        return ResponseEntity.status(newsPaperGlobalException.getHttpStatus()).body(
                ErrorResponse.builder()
                .code(newsPaperGlobalException.getCode())
                .message(newsPaperGlobalException.getMessage()).build()
        );
    }

}
