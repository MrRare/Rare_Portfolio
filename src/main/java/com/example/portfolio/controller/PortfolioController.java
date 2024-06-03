package com.example.portfolio.controller;

import com.example.portfolio.model.TranscriptionResponse;
import com.example.portfolio.services.TranscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PortfolioController {

//    @Autowired
//    private TranscribeService transcribeService;
//
//    @GetMapping("/")
//    public String index(Model model) {
//        return "index";
//    }
//
//    @PostMapping("/transcribe")
//    public String transcribe(@RequestParam("audioUrl") String audioUrl, Model model) {
//        TranscriptionResponse response = transcribeService.transcribe(audioUrl);
//        model.addAttribute("transcription", response.getTranscript());
//        return "index";
//    }
}
