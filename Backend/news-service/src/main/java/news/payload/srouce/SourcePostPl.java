package news.payload.srouce;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import news.entity.Source;

@Builder
public record SourcePostPl(@NotNull String name, @NotNull String description, boolean status) {
    public Source toModel(){
        return Source.builder()
                .name(name)
                .description(description)
                .status(status)
                .build();
    }
}
