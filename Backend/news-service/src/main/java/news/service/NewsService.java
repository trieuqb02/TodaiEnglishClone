package news.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import news.entity.News;
import news.entity.Paragraph;
import news.entity.Source;
import news.entity.Topic;
import news.exception.NotFoundException;
import news.payload.news.NewsPostPL;
import news.repository.NewsRepository;
import news.repository.ParagraphRepository;
import news.repository.SourceRepository;
import news.repository.TopicRepository;
import news.utils.ErrorCode;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class NewsService {

    private final NewsRepository newsRepository;

    private final TopicRepository topicRepository;

    private final SourceRepository sourceRepository;

    private final ParagraphRepository paragraphRepository;

    public News createNews(NewsPostPL postPL, MultipartFile image, MultipartFile audio) {

        Topic topic = topicRepository.findById(postPL.topicId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.TOPIC_NOT_FOUND, HttpStatus.NOT_FOUND));

        Source source = sourceRepository.findById(postPL.sourceId())
                .orElseThrow(() -> new NotFoundException(ErrorCode.SOURCE_NOT_FOUND, HttpStatus.NOT_FOUND));

        // save image and audio
        String imageUrl = "";

        String audioUrl = "";

        News news = News.builder()
                .title(postPL.title())
                .imageUrl(imageUrl)
                .audioUrl(audioUrl)
                .viewed(0)
                .status(postPL.status())
                .topic(topic)
                .source(source)
                .build();

        List<Paragraph> paragraphs = new ArrayList<>();
        for (String content : postPL.paragraphs()) {
            Paragraph paragraph = new Paragraph();
            paragraph.setContent(content);
            paragraph.setNews(news);
            paragraphs.add(paragraph);
        }

        news.setParagraphs(paragraphs);

        return newsRepository.save(news);
    }

    public News updateNews(UUID newsId, NewsPostPL postPL) {
        return null;
    }

    public void deleteNews(UUID newsId) {

    }

    public List<News> getRandNewsByTopicId(UUID topicId) {
        return null;
    }

    public List<News> getNewsByDate(String date) {
        return null;
    }
}
