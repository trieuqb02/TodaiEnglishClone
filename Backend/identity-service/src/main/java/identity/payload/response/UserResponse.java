package identity.payload.response;


import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    String username;
    String firstName;
    String lastName;
    String thumbnail;
    Boolean enable;
}
