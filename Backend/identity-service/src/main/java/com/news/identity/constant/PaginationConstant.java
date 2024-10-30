package com.news.identity.constant;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;

@FieldDefaults(makeFinal = true, level = AccessLevel.PUBLIC)
public class PaginationConstant {
    static String DEFAULT_PAGE = "1";
    static String DEFAULT_LIMIT = "9";
    static String DEFAULT_DIR = "desc";
    static String DEFAULT_ID = "id";
    static String USERNAME = "username";
    static String ROLE = "role";
    static String USER_ROLE = "USER";
}
