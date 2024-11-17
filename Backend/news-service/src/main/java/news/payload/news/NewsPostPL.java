package news.payload.news;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.util.List;
import java.util.UUID;

@Builder
public record NewsPostPL(@NotNull String title, @NotNull boolean status,@NotNull UUID topicId,
                         @NotNull UUID sourceId,@NotNull List<String> paragraphs) {
}
