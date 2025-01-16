package favorite.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "favorites")
public class Favorite extends AbstractAuditing{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    String userId;

    String newsId;
}
