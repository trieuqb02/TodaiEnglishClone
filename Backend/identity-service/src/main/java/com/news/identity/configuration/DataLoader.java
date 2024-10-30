package com.news.identity.configuration;

import com.news.identity.constant.RoleConstant;
import com.news.identity.service.IKeyClockService;
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

    IKeyClockService keyClockService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        keyClockService.createRole(RoleConstant.CUSTOMER,"Có các quyền cho người đọc", true);
        keyClockService.createRole(RoleConstant.ADMIN,"Có tất cả các quyền thao tác", true);
    }
}
