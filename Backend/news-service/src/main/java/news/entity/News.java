package news.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import news.auditing.AbstractAuditing;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "news")
public class News extends AbstractAuditing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    String title;

    String image;

    String audio;

    int viewed;

    boolean status;

    @OneToMany(mappedBy = "news",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    Set<Paragraph> paragraphs = new HashSet<>();

    @ManyToOne
    Topic topic;

    @ManyToOne
    Source source;
}
