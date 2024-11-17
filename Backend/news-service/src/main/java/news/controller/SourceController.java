package news.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/source/")
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class SourceController {
    @GetMapping("all")
    public String getAllTopic(){
        return "all";
    }

    @PostMapping("create")
    public String createTopic(){
        return "create";
    }

    @PutMapping("{id}/edit")
    public String editTopic(){
        return "edit";
    }

    @PutMapping("{id}/delete")
    public String deleteTopic(){
        return "delete";
    }
}
