package news.payload;

public record PaginationPl<T>(T data ,  int pageNumber, int getSize ,int totalElements, boolean isLastPage) {
}
