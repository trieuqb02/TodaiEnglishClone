package news.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import news.entity.Source;
import news.exception.BadRequestException;
import news.exception.DuplicatedException;
import news.exception.NotFoundException;
import news.payload.srouce.SourcePostPl;
import news.repository.SourceRepository;
import news.utils.ErrorCode;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class SourceService {
    SourceRepository sourceRepository;

    public List<Source> getAll(){
        return sourceRepository.findAll();
    }

    public Source createSource(SourcePostPl sourcePostPl) {
        validateExistedName(sourcePostPl.name(), null);
        return sourceRepository.save(sourcePostPl.toModel());
    }

    public Source editSource(UUID id, SourcePostPl sourcePostPl) {
        validateExistedName(sourcePostPl.name(), id);

        Source source = sourceRepository
                .findById(id).
                orElseThrow(() -> new NotFoundException(ErrorCode.SOURCE_NOT_FOUND, HttpStatus.NOT_FOUND));
        source.setName(sourcePostPl.name());
        source.setDescription(sourcePostPl.description());
        source.setStatus(sourcePostPl.status());
        return sourceRepository.save(source);
    }

    public void deleteSource(UUID id) {
        Source source = sourceRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorCode.SOURCE_NOT_FOUND, HttpStatus.NOT_FOUND));
        if (!source.getNews().isEmpty()) {
            throw new BadRequestException(ErrorCode.MAKE_SURE_SOURCE_DONT_CONTAINS_ANY_NEWS, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateExistedName(String name, UUID id) {
        boolean checkName = sourceRepository.findExistedName(name, id) != null;
        if (checkName) {
            throw new DuplicatedException(ErrorCode.NAME_ALREADY_EXITED, name, HttpStatus.BAD_REQUEST);
        }
    }
}
