package news.payload.topic;

import lombok.Builder;

@Builder
public record TopicGetPl(String name, String description, boolean status, int quantity) {
}
