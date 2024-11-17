package news.payload;

import lombok.Builder;
import org.springframework.http.HttpStatus;

@Builder
public record ErrorPl(String message, HttpStatus httpStatus) {
}
