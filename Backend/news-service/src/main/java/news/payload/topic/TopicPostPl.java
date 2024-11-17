package news.payload.topic;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import news.entity.Topic;

@Builder
public record TopicPostPl(@NotNull String name, @NotNull String description, boolean status) {
    public Topic toModel() {
        return Topic.builder()
                .name(name)
                .description(description)
                .status(status)
                .build();
    }
}
