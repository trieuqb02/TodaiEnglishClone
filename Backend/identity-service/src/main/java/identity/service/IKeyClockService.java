package identity.service;


import identity.payload.request.RegisterRequest;
import identity.payload.response.UserResponse;

public interface IKeyClockService {

    void createRole(String name, String description,Boolean init);

    UserResponse createUser(RegisterRequest user);

}
