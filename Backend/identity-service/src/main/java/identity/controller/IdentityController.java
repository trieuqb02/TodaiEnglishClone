package identity.controller;


import identity.payload.request.RegisterRequest;
import identity.payload.response.UserResponse;
import identity.service.impl.KeyClockService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/identity/")
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class IdentityController {

    KeyClockService keyClockService;

    @PostMapping("register")
    public ResponseEntity<UserResponse> createUser(@RequestBody RegisterRequest request){
        UserResponse response = keyClockService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
