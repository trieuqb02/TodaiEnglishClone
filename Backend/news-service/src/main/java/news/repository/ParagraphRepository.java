package news.repository;

import news.entity.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ParagraphRepository extends JpaRepository<Paragraph, UUID> {
}