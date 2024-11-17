package news.payload.srouce;

import lombok.Builder;

@Builder
public record SourceGetPl(String name, String description, boolean status, int quantity) {
}
