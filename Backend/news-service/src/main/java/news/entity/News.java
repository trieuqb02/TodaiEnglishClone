package news.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import news.auditing.AbstractAuditing;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
@DynamicUpdate
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "news")
public class News extends AbstractAuditing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    @Column(name = "title", unique = true)
    String title;

    @Column(name = "image_url")
    String imageUrl;

    @Column(name = "audio_url")
    String audioUrl;

    @Column(name = "viewed")
    int viewed;

    @Column(name = "status")
    boolean status;

    @OneToMany(mappedBy = "news",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    List<Paragraph> paragraphs = new ArrayList<>();

    @ManyToOne
    Topic topic;

    @ManyToOne
    Source source;
}
