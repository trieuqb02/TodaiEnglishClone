package news.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import news.entity.Topic;
import news.exception.BadRequestException;
import news.exception.DuplicatedException;
import news.exception.NotFoundException;
import news.payload.topic.TopicPostPl;
import news.repository.TopicRepository;
import news.utils.ErrorCode;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
@Transactional
@RequiredArgsConstructor
public class TopicService {

    TopicRepository topicRepository;

    public List<Topic> getAll(){
        return topicRepository.findAll();
    }

    public Topic createTopic(TopicPostPl topicPostPl) {
        validateExistedName(topicPostPl.name(), null);
        return topicRepository.save(topicPostPl.toModel());
    }

    public Topic editTopic(UUID id, TopicPostPl topicPostPl) {
        validateExistedName(topicPostPl.name(), id);

        Topic topic = topicRepository
                .findById(id).
                orElseThrow(() -> new NotFoundException(ErrorCode.TOPIC_NOT_FOUND, HttpStatus.NOT_FOUND));
        topic.setName(topicPostPl.name());
        topic.setDescription(topicPostPl.description());
        topic.setStatus(topicPostPl.status());
        return topicRepository.save(topic);
    }

    public void deleteTopic(UUID id) {
        Topic topic = topicRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorCode.TOPIC_NOT_FOUND, HttpStatus.NOT_FOUND));
        if (!topic.getNews().isEmpty()) {
            throw new BadRequestException(ErrorCode.MAKE_SURE_TOPIC_DONT_CONTAINS_ANY_NEWS, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateExistedName(String name, UUID id) {
        boolean checkName = topicRepository.findExistedName(name, id) != null;
        if (checkName) {
            throw new DuplicatedException(ErrorCode.NAME_ALREADY_EXITED, name, HttpStatus.BAD_REQUEST);
        }
    }
}
