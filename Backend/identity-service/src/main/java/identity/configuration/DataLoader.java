package identity.configuration;

import identity.constant.RoleConstant;
import identity.service.impl.KeyClockService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class DataLoader implements ApplicationRunner {

    KeyClockService keyClockService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        keyClockService.createRole(RoleConstant.CUSTOMER,"Có các quyền cho người đọc", true);
        keyClockService.createRole(RoleConstant.ADMIN,"Có tất cả các quyền thao tác", true);
    }
}
