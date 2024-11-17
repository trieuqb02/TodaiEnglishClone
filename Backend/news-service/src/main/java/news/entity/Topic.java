package news.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import news.auditing.AbstractAuditing;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
@DynamicUpdate
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "topics")
public class Topic extends AbstractAuditing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    @Column(name = "name", unique = true)
    String name;

    @Column(name = "description")
    String description;

    @Column(name = "status")
    boolean status;

    @OneToMany(mappedBy = "topic", fetch = FetchType.LAZY)
    Set<News> news = new HashSet<>();
}
