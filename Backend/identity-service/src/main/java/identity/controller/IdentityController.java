package identity.controller;


import identity.exception.GlobalCode;
import identity.payload.response.ApiResponse;
import identity.payload.request.RegisterRequest;
import identity.payload.response.UserResponse;
import identity.service.IKeyClockService;
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

    IKeyClockService keyClockService;

    @PostMapping("register")
    public ResponseEntity<ApiResponse<UserResponse>> createUser(@RequestBody RegisterRequest request){
        UserResponse response = keyClockService.createUser(request);
        ApiResponse apiResponse = new ApiResponse<UserResponse>(GlobalCode.SUCCESS,"Đăng kí thành công",response);
        return ResponseEntity.status(HttpStatus.CREATED).body(apiResponse);
    }
}
