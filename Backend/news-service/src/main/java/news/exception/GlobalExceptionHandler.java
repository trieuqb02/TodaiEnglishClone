package news.exception;

import news.payload.ErrorPl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GlobalException.class)
    public ResponseEntity<ErrorPl> handlerException(GlobalException globalException) {
        return ResponseEntity.status(globalException.getHttpStatus()).body(
                ErrorPl.builder().message(globalException.getMessage()).build()
        );
    }
}
