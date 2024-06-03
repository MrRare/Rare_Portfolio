package com.example.portfolio.services;

import com.example.portfolio.model.TranscriptionResponse;
import org.springframework.stereotype.Service;
//import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
//import software.amazon.awssdk.regions.Region;
//import software.amazon.awssdk.services.transcribe.TranscribeClient;
//import software.amazon.awssdk.services.transcribe.model.*;

import java.util.concurrent.TimeUnit;

@Service
public class TranscribeService {

//    private final TranscribeClient transcribeClient;
//
//    public TranscribeService() {
//        this.transcribeClient = TranscribeClient.builder()
//                .region(Region.US_EAST_1)
//                .credentialsProvider(DefaultCredentialsProvider.create())
//                .build();
//    }
//
//    public TranscriptionResponse transcribe(String audioUrl) {
//        String jobName = "portfolio-transcription-job-" + System.currentTimeMillis();
//
//        StartTranscriptionJobRequest request = StartTranscriptionJobRequest.builder()
//                .transcriptionJobName(jobName)
//                .languageCode(LanguageCode.EN_US)
//                .media(Media.builder().mediaFileUri(audioUrl).build())
//                .outputBucketName("your-output-bucket") // Ensure this bucket exists in your AWS account
//                .build();
//
//        transcribeClient.startTranscriptionJob(request);
//
//        GetTranscriptionJobRequest jobRequest = GetTranscriptionJobRequest.builder()
//                .transcriptionJobName(jobName)
//                .build();
//
//        GetTranscriptionJobResponse jobResponse;
//        while (true) {
//            jobResponse = transcribeClient.getTranscriptionJob(jobRequest);
//            TranscriptionJobStatus status = jobResponse.transcriptionJob().transcriptionJobStatus();
//            if (status == TranscriptionJobStatus.COMPLETED || status == TranscriptionJobStatus.FAILED) {
//                break;
//            }
//            try {
//                TimeUnit.SECONDS.sleep(10); // Poll every 10 seconds
//            } catch (InterruptedException e) {
//                Thread.currentThread().interrupt();
//                throw new RuntimeException(e);
//            }
//        }
//
//        String transcript = jobResponse.transcriptionJob().transcript().transcriptFileUri();
//        return new TranscriptionResponse(transcript);
//    }
}
