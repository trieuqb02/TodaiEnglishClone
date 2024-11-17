package news.repository;

import news.entity.Source;
import news.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface SourceRepository extends JpaRepository<Source, UUID> {
    @Query("select e from Brand e where e.name = ?1 and (?2 is null or e.id != ?2)")
    Source findExistedName(String name, UUID id);
}